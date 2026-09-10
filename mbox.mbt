///|
pub suberror MailboxError {
  Invalid(String)
} derive(Debug)

///|
pub(all) struct Message {
  envelope : String
  content : String
} derive(Debug, Eq)

///|
fn from_line(s : String) -> Bool {
  let mut i = 0
  while i < s.length() && s[i].to_int() == 62 {
    i += 1
  }
  s[i:].has_prefix("From ")
}

///|
fn normalize_newlines(s : String) -> String raise MailboxError {
  let out = s.replace_all(old="\r\n", new="\n")
  if out.contains("\r") || out.contains("\u0000") {
    raise Invalid("bare CR or NUL unsupported in text mailbox")
  }
  out
}

///|
/// mboxrd text codec. Content is normalized to LF and one final LF.
/// One blank separator line is removed between messages; MIME bytes are not decoded.
pub fn parse_mboxrd(source : String) -> Array[Message] raise MailboxError {
  if source.length() > 16777216 {
    raise Invalid("mailbox exceeds 16 Mi UTF-16 units")
  }
  let text = normalize_newlines(source)
  if text == "" {
    return []
  }
  if !text.has_prefix("From ") {
    raise Invalid("mbox must start with envelope line")
  }
  let out = []
  let mut envelope = ""
  let mut content = ""
  let lines = text.split("\n").to_array()
  for i in 0..<lines.length() {
    let line = lines[i].to_owned()
    if i == lines.length() - 1 && line == "" {
      break
    }
    if line.has_prefix("From ") {
      if envelope != "" {
        if content.has_suffix("\n\n") {
          content = content[:content.length() - 1].to_owned()
        }
        out.push({ envelope, content, })
      }
      envelope = line[5:].to_owned()
      if envelope.trim() == "" {
        raise Invalid("empty envelope")
      }
      content = ""
    } else {
      let unquoted = if line.has_prefix(">") && from_line(line) {
        line[1:].to_owned()
      } else {
        line
      }
      content += unquoted + "\n"
    }
  }
  if content.has_suffix("\n\n") {
    content = content[:content.length() - 1].to_owned()
  }
  out.push({ envelope, content, })
  out
}

///|
pub fn encode_mboxrd(messages : Array[Message]) -> String raise MailboxError {
  let mut out = ""
  for message in messages {
    if message.envelope.trim() == "" ||
      message.envelope.contains("\n") ||
      message.envelope.contains("\r") ||
      message.envelope.contains("\u0000") {
      raise Invalid("invalid envelope")
    }
    out += "From " + message.envelope + "\n"
    let body = normalize_newlines(message.content)
    let lines = body.split("\n").to_array()
    for i in 0..<lines.length() {
      let line = lines[i].to_owned()
      if i == lines.length() - 1 && line == "" {
        break
      }
      out += (if from_line(line) { ">" } else { "" }) + line + "\n"
    }
    out += "\n"
  }
  out
}
