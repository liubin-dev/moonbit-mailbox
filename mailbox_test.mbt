///|
test "mboxrd quote depth roundtrip" {
  let messages : Array[@mailbox.Message] = [
    {
      envelope: "alice@example.com Thu Sep 10 00:00:00 2026",
      content: "Subject: hello\n\nFrom plain\n>From quoted\n>>From twice\n",
    },
    {
      envelope: "bob@example.com Thu Sep 10 01:00:00 2026",
      content: "Subject: two\n\nHello\n",
    },
  ]
  let wire = @mailbox.encode_mboxrd(messages)
  assert_true(wire.contains(">>>From twice\n"))
  assert_eq(@mailbox.parse_mboxrd(wire), messages)
  assert_eq(@mailbox.parse_mboxrd(""), [])
}

///|
test "folded and duplicate headers" {
  let body = "Subject: first\r\n continuation\r\nX-Tag: one\r\nX-Tag: two\r\n\r\nbody"
  assert_eq(@mailbox.header_values(body, "subject"), ["first continuation"])
  assert_eq(@mailbox.header_values(body, "x-tag"), ["one", "two"])
  assert_true(
    try {
      ignore(@mailbox.headers(" folded"))
      false
    } catch {
      _ => true
    },
  )
}

///|
test "maildir flags canonicalization and no info" {
  let name = @mailbox.parse_maildir_name("123.M4P5.host:2,SRF")
  assert_eq(name.flags, "FRS")
  assert_eq(name.encode(), "123.M4P5.host:2,FRS")
  assert_eq(@mailbox.parse_maildir_name("123.host").encode(), "123.host")
  assert_eq(@mailbox.parse_maildir_name("123.host:2,").encode(), "123.host:2,")
}

///|
test "reject unsafe filenames and invalid envelopes" {
  for name in ["../x", "x/y", "x\\y", "a:1,S", "a:2,SS", ":2,S", "x:2,7"] {
    assert_true(
      try {
        ignore(@mailbox.parse_maildir_name(name))
        false
      } catch {
        _ => true
      },
    )
  }
  assert_true(
    try {
      ignore(@mailbox.parse_mboxrd("Subject: no separator"))
      false
    } catch {
      _ => true
    },
  )
  let m : @mailbox.Message = { envelope: "x\nFrom injected", content: "", }
  assert_true(
    try {
      ignore(@mailbox.encode_mboxrd([m]))
      false
    } catch {
      _ => true
    },
  )
}
