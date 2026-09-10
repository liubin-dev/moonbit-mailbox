///|
fn main raise {
  let messages = @lib.parse_mboxrd(
    "From demo@example.com Thu Sep 10 00:00:00 2026\nSubject: MoonBit\n\n>From escaped body\n\n",
  )
  println("Messages: \{messages.length()}")
  println(@lib.header_values(messages[0].content, "subject")[0])
  println(@lib.parse_maildir_name("100.host:2,SR").encode())
}
