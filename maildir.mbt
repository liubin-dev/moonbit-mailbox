///|
pub(all) struct MaildirName {
  unique : String
  flags : String
  has_info : Bool
} derive(Debug, Eq)

///|
pub fn parse_maildir_name(name : String) -> MaildirName raise MailboxError {
  if name == "" ||
    name == "." ||
    name == ".." ||
    name.contains("/") ||
    name.contains("\\") ||
    name.contains("\u0000") ||
    name.contains("\r") ||
    name.contains("\n") {
    raise Invalid("expected safe basename")
  }
  let pos = name.find(":2,")
  let unique = match pos {
    Some(i) => name[:i].to_owned()
    None => name
  }
  let flags = match pos {
    Some(i) => name[i + 3:].to_owned()
    None => ""
  }
  if unique == "" || unique.contains(":") {
    raise Invalid("invalid Maildir unique name or info version")
  }
  let seen : Array[Char] = []
  for c in flags.iter() {
    if !(c >= 'A' && c <= 'Z') && !(c >= 'a' && c <= 'z') {
      raise Invalid("invalid Maildir flag")
    }
    if seen.contains(c) {
      raise Invalid("duplicate Maildir flag")
    }
    seen.push(c)
  }
  seen.sort()
  let mut sorted = ""
  for c in seen {
    sorted += c.to_string()
  }
  { unique, flags: sorted, has_info: pos is Some(_), }
}

///|
pub fn MaildirName::encode(self : MaildirName) -> String raise MailboxError {
  if !self.has_info && self.flags != "" {
    raise Invalid("flags require info suffix")
  }
  let candidate = self.unique +
    (if self.has_info { ":2," + self.flags } else { "" })
  let parsed = parse_maildir_name(candidate)
  if parsed.unique != self.unique {
    raise Invalid("unique name contains an info suffix")
  }
  parsed.unique + (if parsed.has_info { ":2," + parsed.flags } else { "" })
}
