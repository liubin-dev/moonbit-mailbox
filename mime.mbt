///|
pub struct MimePart {
  fields : Array[Header]
  media_type : String
  parameters : Map[String, String]
  body : Bytes
  children : Array[MimePart]
} derive(Debug)

///|
priv struct MimeBudget {
  mut remaining : Int
}

///|
fn mime_hex(b : Byte) -> Int raise MailboxError {
  let n = b.to_int()
  if n >= 48 && n <= 57 {
    n - 48
  } else if n >= 65 && n <= 70 {
    n - 55
  } else if n >= 97 && n <= 102 {
    n - 87
  } else {
    raise Invalid("invalid quoted-printable escape")
  }
}

///|
pub fn decode_transfer(
  data : Bytes,
  encoding : String,
) -> Bytes raise MailboxError {
  if data.length() > 1048576 {
    raise Invalid("MIME body limit")
  }
  match encoding.trim().to_owned().to_lower() {
    "" | "7bit" | "8bit" | "binary" => data
    "base64" => {
      let text = @utf8.decode(data) catch {
        _ => raise Invalid("invalid base64 text")
      }
      @base64.decode(text, ignore_whitespace=true) catch {
        _ => raise Invalid("invalid MIME base64")
      }
    }
    "quoted-printable" => {
      let out : Array[Byte] = []
      let mut i = 0
      while i < data.length() {
        if data[i] != 61 {
          out.push(data[i])
          i += 1
          continue
        }
        if i + 1 < data.length() && data[i + 1] == 10 {
          i += 2
          continue
        }
        if i + 2 < data.length() && data[i + 1] == 13 && data[i + 2] == 10 {
          i += 3
          continue
        }
        if i + 2 >= data.length() {
          raise Invalid("truncated quoted-printable escape")
        }
        out.push((mime_hex(data[i + 1]) * 16 + mime_hex(data[i + 2])).to_byte())
        i += 3
      }
      Bytes::from_array(out)
    }
    _ => raise Invalid("unsupported content transfer encoding")
  }
}

///|
pub fn parse_mime_parameters(
  text : String,
) -> (String, Map[String, String]) raise MailboxError {
  if text.length() > 65536 {
    raise Invalid("MIME parameter header limit")
  }
  let pieces = []
  let out = StringBuilder()
  let mut quoted = false
  let mut escaped = false
  for c in text.iter() {
    if escaped {
      out.write_char(c)
      escaped = false
      continue
    }
    if quoted && c == '\\' {
      out.write_char(c)
      escaped = true
      continue
    }
    if c == '"' {
      quoted = !quoted
      out.write_char(c)
      continue
    }
    if c == ';' && !quoted {
      pieces.push(out.to_string().trim().to_owned())
      out.reset()
    } else {
      out.write_char(c)
    }
  }
  if quoted || escaped {
    raise Invalid("unterminated MIME parameter")
  }
  pieces.push(out.to_string().trim().to_owned())
  let kind = pieces[0].to_lower()
  let params = Map([])
  for i in 1..<pieces.length() {
    let pos = match pieces[i].find("=") {
      Some(p) => p
      None => raise Invalid("MIME parameter requires equals")
    }
    let name = pieces[i][:pos].trim().to_owned().to_lower()
    if name.is_empty() || params.contains(name) {
      raise Invalid("empty or duplicate MIME parameter")
    }
    let raw = pieces[i][pos + 1:].trim().to_owned()
    let value = if raw.has_prefix("\"") {
      if raw.length() < 2 || !raw.has_suffix("\"") {
        raise Invalid("invalid quoted MIME parameter")
      }
      let result = StringBuilder()
      let mut escape = false
      for c in raw[1:raw.length() - 1].iter() {
        if escape {
          result.write_char(c)
          escape = false
        } else if c == '\\' {
          escape = true
        } else if c == '"' {
          raise Invalid("invalid quote in MIME parameter")
        } else {
          result.write_char(c)
        }
      }
      if escape {
        raise Invalid("trailing MIME parameter escape")
      }
      result.to_string()
    } else {
      raw
    }
    params[name] = value
  }
  (kind, resolve_parameters(params))
}

///|
fn mime_header(
  fields : Array[Header],
  key : String,
  fallback : String,
) -> String raise MailboxError {
  let values = fields.filter(h => h.name.to_lower() == key)
  if values.length() > 1 {
    raise Invalid("duplicate MIME control header")
  }
  if values.is_empty() {
    fallback
  } else {
    values[0].value
  }
}

///|
pub fn parse_mime(data : Bytes) -> MimePart raise MailboxError {
  if data.length() > 1048576 {
    raise Invalid("MIME message limit")
  }
  mime_part(data, "text/plain", 0, { remaining: 512, })
}

///|
fn mime_part(
  data : Bytes,
  fallback : String,
  depth : Int,
  budget : MimeBudget,
) -> MimePart raise MailboxError {
  if depth > 32 || budget.remaining <= 0 {
    raise Invalid("MIME structure limit")
  }
  budget.remaining -= 1
  let mut head_end = data.length()
  let mut body_start = data.length()
  if data.length() > 0 && data[0] == 10 {
    head_end = 0
    body_start = 1
  } else if data.length() > 1 && data[0] == 13 && data[1] == 10 {
    head_end = 0
    body_start = 2
  } else {
    for i in 0..<data.length() {
      if i + 3 < data.length() &&
        data[i] == 13 &&
        data[i + 1] == 10 &&
        data[i + 2] == 13 &&
        data[i + 3] == 10 {
        head_end = i
        body_start = i + 4
        break
      }
      if i + 1 < data.length() && data[i] == 10 && data[i + 1] == 10 {
        head_end = i
        body_start = i + 2
        break
      }
    }
  }
  let header_text = @utf8.decode(data[:head_end]) catch {
    _ => raise Invalid("MIME headers must be UTF-8 or ASCII")
  }
  let fields = headers(header_text)
  let (kind, params) = mime_type(mime_header(fields, "content-type", fallback))
  let encoding = mime_header(fields, "content-transfer-encoding", "7bit").to_lower()
  let raw = data[body_start:].to_owned()
  let children = []
  let body = if kind.has_prefix("multipart/") {
    if !["7bit", "8bit", "binary"].contains(encoding) {
      raise Invalid("encoded multipart container")
    }
    let boundary = match params.get("boundary") {
      Some(b) => b
      None => raise Invalid("missing multipart boundary")
    }
    if boundary.is_empty() ||
      boundary.has_suffix(" ") ||
      boundary.length() > 70 ||
      boundary.to_array().iter().any(c => c.to_int() < 32 || c.to_int() > 126) {
      raise Invalid("invalid multipart boundary")
    }
    let marker = @utf8.encode("--" + boundary)
    let mut at = 0
    let mut start : Int? = None
    let mut closed = false
    while at < raw.length() {
      let line_start = at
      while at < raw.length() && raw[at] != 10 {
        at += 1
      }
      let mut end = at
      if end > line_start && raw[end - 1] == 13 {
        end -= 1
      }
      while end > line_start && (raw[end - 1] == 32 || raw[end - 1] == 9) {
        end -= 1
      }
      if at < raw.length() {
        at += 1
      }
      let line = raw[line_start:end].to_owned()
      let closing = line.length() == marker.length() + 2 &&
        line[:marker.length()] == marker &&
        line[line.length() - 2] == 45 &&
        line[line.length() - 1] == 45
      if line == marker || closing {
        if start is Some(begin) {
          let mut part_end = line_start
          if part_end > begin && raw[part_end - 1] == 10 {
            part_end -= 1
            if part_end > begin && raw[part_end - 1] == 13 {
              part_end -= 1
            }
          }
          children.push(
            mime_part(
              raw[begin:part_end].to_owned(),
              if kind == "multipart/digest" {
                "message/rfc822"
              } else {
                "text/plain"
              },
              depth + 1,
              budget,
            ),
          )
        }
        if closing {
          closed = true
          break
        }
        start = Some(at)
      }
    }
    if !closed || children.is_empty() {
      raise Invalid("unterminated or empty multipart")
    }
    b""
  } else {
    let decoded = decode_transfer(raw, encoding)
    if kind == "message/rfc822" {
      children.push(mime_part(decoded, "text/plain", depth + 1, budget))
    }
    decoded
  }
  { fields, media_type: kind, parameters: params, body, children, }
}

///|
fn mime_type(text : String) -> (String, Map[String, String]) raise MailboxError {
  let (kind, params) = parse_mime_parameters(text)
  if kind.split("/").count() != 2 ||
    kind.has_prefix("/") ||
    kind.has_suffix("/") ||
    kind.contains(" ") {
    raise Invalid("invalid MIME media type")
  }
  (kind, params)
}
