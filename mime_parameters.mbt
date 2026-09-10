///|
fn percent_bytes(text : String, encoded : Bool) -> Bytes raise MailboxError {
  let input = @utf8.encode(text)
  let out : Array[Byte] = []
  let mut at = 0
  while at < input.length() {
    if input[at] == 37 && encoded {
      if at + 2 >= input.length() {
        raise Invalid("truncated MIME percent escape")
      }
      out.push(
        (mime_hex(input[at + 1]) * 16 + mime_hex(input[at + 2])).to_byte(),
      )
      at += 3
    } else {
      out.push(input[at])
      at += 1
    }
  }
  Bytes::from_array(out)
}

///|
fn resolve_parameters(
  raw : Map[String, String],
) -> Map[String, String] raise MailboxError {
  let result = Map([])
  let groups : Map[String, Map[Int, (Bool, String)]] = Map([])
  let singles : Map[String, Bool] = Map([])
  if raw.length() > 256 {
    raise Invalid("MIME parameter count limit")
  }
  for key, value in raw {
    match key.find("*") {
      None => result[key] = value
      Some(pos) => {
        let name = key[:pos].to_owned()
        let tail = key[pos + 1:].to_owned()
        if name.is_empty() {
          raise Invalid("empty extended parameter name")
        }
        let encoded = tail.is_empty() || tail.has_suffix("*")
        let index = if tail.is_empty() {
          singles[name] = true
          0
        } else {
          let digits = if encoded {
            tail[:tail.length() - 1].to_owned()
          } else {
            tail
          }
          if digits.is_empty() ||
            digits.length() > 3 ||
            (digits.length() > 1 && digits.has_prefix("0")) {
            raise Invalid("invalid MIME continuation index")
          }
          let mut number = 0
          for c in digits.iter() {
            if c < '0' || c > '9' {
              raise Invalid("invalid MIME continuation index")
            }
            number = number * 10 + c.to_int() - 48
          }
          if number > 255 {
            raise Invalid("MIME continuation index limit")
          }
          number
        }
        let group = match groups.get(name) {
          Some(g) => g
          None => {
            let g = Map([])
            groups[name] = g
            g
          }
        }
        if group.contains(index) {
          raise Invalid("duplicate MIME continuation")
        }
        group[index] = (encoded, value)
      }
    }
  }
  for name, group in groups {
    if result.contains(name) || (singles.contains(name) && group.length() != 1) {
      raise Invalid("ambiguous MIME parameter alternatives")
    }
    let bytes : Array[Byte] = []
    let mut charset = "us-ascii"
    let mut first_encoded = false
    for i in 0..<group.length() {
      let (encoded, raw_value) = match group.get(i) {
        Some(v) => v
        None => raise Invalid("gap in MIME continuation")
      }
      let mut value = raw_value
      if i == 0 && encoded {
        first_encoded = true
        let pieces = value.split("'").map(x => x.to_owned()).collect()
        if pieces.length() < 3 {
          raise Invalid("missing MIME charset/language delimiters")
        }
        charset = if pieces[0].is_empty() { "us-ascii" } else { pieces[0] }
        value = pieces[2:].to_owned().join("'")
      }
      for byte in percent_bytes(value, encoded) {
        bytes.push(byte)
      }
    }
    result[name] = if first_encoded {
      decode_charset(Bytes::from_array(bytes), charset)
    } else {
      @utf8.decode(Bytes::from_array(bytes)) catch {
        _ => raise Invalid("invalid unlabelled MIME parameter")
      }
    }
  }
  result
}

///|
/// Returns display metadata only; never use the result directly as a filesystem path.
pub fn MimePart::filename(self : MimePart) -> String? raise MailboxError {
  let values = self.fields.filter(h => {
    h.name.to_lower() == "content-disposition"
  })
  if values.length() > 1 {
    raise Invalid("duplicate Content-Disposition")
  }
  if !values.is_empty() {
    let (_, params) = parse_mime_parameters(values[0].value)
    if params.get("filename") is Some(value) {
      return Some(value)
    }
  }
  self.parameters.get("name")
}
