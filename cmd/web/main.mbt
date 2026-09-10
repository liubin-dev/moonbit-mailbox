///|
pub fn run(input : String) -> String {
  try {
    let messages = @lib.parse_mboxrd(input)
    let lines = []
    for i in 0..<messages.length() {
      let m = messages[i]
      lines.push(
        "Message \{i+1}: " +
        m.envelope +
        "\nSubject: " +
        @lib.header_values(m.content, "subject").join(" | "),
      )
    }
    lines.join("\n\n") +
    "\n\nCanonical mboxrd:\n" +
    @lib.encode_mboxrd(messages)
  } catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
fn main {

}

///|
pub fn maildir_name(input : String) -> String {
  @lib.parse_maildir_name(input).encode() catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}

///|
pub fn maildir_flags(input : String, flags : String) -> String {
  @lib.parse_maildir_name(input).with_flags(flags).encode() catch {
    e => "ERROR: " + Repr(e).to_string()
  }
}
