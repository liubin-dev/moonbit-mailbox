///|
/// Return a canonical filename with the supplied standard Maildir flags.
pub fn MaildirName::with_flags(
  self : MaildirName,
  flags : String,
) -> MaildirName raise MailboxError {
  let candidate = MaildirName::{ unique: self.unique, flags, has_info: true, }
  parse_maildir_name(candidate.encode())
}
