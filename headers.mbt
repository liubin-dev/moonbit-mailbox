///|
pub struct Header {
  name : String
  value : String
} derive(Debug, Eq)

///|
/// Ordered duplicate-preserving RFC-style header extraction; no MIME decoding.
pub fn headers(content : String) -> Array[Header] raise MailboxError {
  let out : Array[Header] = []
  for view in normalize_newlines(content).split("\n") {
    let line = view.to_owned()
    if line == "" {
      break
    }
    if line.has_prefix(" ") || line.has_prefix("\t") {
      if out.is_empty() {
        raise Invalid("fold without header")
      }
      let old = out[out.length() - 1]
      out[out.length() - 1] = {
        name: old.name,
        value: old.value + " " + line.trim().to_owned(),
      }
      continue
    }
    let pos = match line.find(":") {
      Some(p) => p
      None => raise Invalid("header missing colon")
    }
    let name = line[:pos].to_owned()
    if name == "" {
      raise Invalid("empty header name")
    }
    for c in name.iter() {
      if c <= ' ' || c >= '\u007f' || c == ':' {
        raise Invalid("invalid header name")
      }
    }
    out.push({ name, value: line[pos + 1:].trim().to_owned(), })
  }
  out
}

///|
pub fn header_values(
  content : String,
  name : String,
) -> Array[String] raise MailboxError {
  headers(content)
  .filter(h => h.name.to_lower() == name.to_lower())
  .map(h => h.value)
}
