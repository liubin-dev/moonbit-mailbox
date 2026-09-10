///|
/// Decode explicitly supported MIME charsets; unsupported charsets never silently corrupt text.
pub fn decode_charset(
  data : Bytes,
  charset : String,
) -> String raise MailboxError {
  if data.length() > 1048576 {
    raise Invalid("charset input limit")
  }
  match charset.trim().to_owned().to_lower() {
    "utf-8" | "utf8" =>
      @utf8.decode(data) catch {
        _ => raise Invalid("invalid UTF-8 MIME text")
      }
    "us-ascii" | "ascii" => {
      let out = StringBuilder()
      for b in data {
        if b.to_int() > 127 {
          raise Invalid("non-ASCII MIME text")
        }
        out.write_char(b.to_int().unsafe_to_char())
      }
      out.to_string()
    }
    "iso-8859-1" | "latin1" | "latin-1" => {
      let out = StringBuilder()
      for b in data {
        out.write_char(b.to_int().unsafe_to_char())
      }
      out.to_string()
    }
    _ => raise Invalid("unsupported MIME charset")
  }
}

///|
pub fn MimePart::text(self : MimePart) -> String raise MailboxError {
  if !self.media_type.has_prefix("text/") {
    raise Invalid("MIME part is not text")
  }
  decode_charset(
    self.body,
    match self.parameters.get("charset") {
      Some(c) => c
      None => "us-ascii"
    },
  )
}

///|
/// Decode an unstructured header/display phrase. Not an address parser or wire encoder.
pub fn decode_header(value : String) -> String raise MailboxError {
  if value.length() > 65536 {
    raise Invalid("header decoding limit")
  }
  let chars = value.to_array()
  let out = StringBuilder()
  let whitespace = StringBuilder()
  let mut at = 0
  let mut previous_encoded = false
  while at < chars.length() {
    if chars[at] == ' ' ||
      chars[at] == '\t' ||
      chars[at] == '\r' ||
      chars[at] == '\n' {
      whitespace.write_char(chars[at])
      at += 1
      continue
    }
    if at + 1 < chars.length() && chars[at] == '=' && chars[at + 1] == '?' {
      let start = at
      let mut end = at + 2
      let mut separators = 0
      while end < chars.length() && separators < 2 && end - start < 75 {
        if chars[end] == '?' {
          separators += 1
        }
        end += 1
      }
      while end + 1 < chars.length() &&
            !(chars[end] == '?' && chars[end + 1] == '=') &&
            end - start < 75 {
        end += 1
      }
      if end + 1 >= chars.length() ||
        end - start + 2 > 75 ||
        chars[end] != '?' ||
        chars[end + 1] != '=' {
        raise Invalid("unterminated or oversized encoded word")
      }
      let inner = String::from_array(chars[at + 2:end])
      let pieces = inner.split("?").map(x => x.to_owned()).collect()
      if pieces.length() != 3 ||
        pieces[0].is_empty() ||
        pieces[2].is_empty() ||
        inner.to_array().iter().any(c => c.to_int() <= 32 || c.to_int() > 126) {
        raise Invalid("invalid encoded word")
      }
      let bytes = match pieces[1].to_lower() {
        "b" =>
          @base64.decode(pieces[2]) catch {
            _ => raise Invalid("invalid header base64")
          }
        "q" =>
          decode_transfer(
            @utf8.encode(pieces[2].replace_all(old="_", new=" ")),
            "quoted-printable",
          )
        _ => raise Invalid("unsupported encoded word method")
      }
      if !previous_encoded {
        out.write_string(whitespace.to_string())
      }
      whitespace.reset()
      out.write_string(decode_charset(bytes, pieces[0]))
      previous_encoded = true
      at = end + 2
    } else {
      out.write_string(whitespace.to_string())
      whitespace.reset()
      out.write_char(chars[at])
      at += 1
      previous_encoded = false
    }
  }
  out.write_string(whitespace.to_string())
  out.to_string()
}
