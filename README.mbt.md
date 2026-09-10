# 可执行 API 示例

增加 maildir flags 更新及规范化接口。这些例子调用公开 API，并随 `moon test` 执行。

```mbt check
///|
test "Maildir flag updates preserve unique identity" {
  let n = @mailbox.parse_maildir_name("123.host")
  let updated = n.with_flags("RS")
  assert_eq(updated.unique, "123.host")
  assert_eq(updated.encode(), "123.host:2,RS")
  assert_true(
    try {
      ignore(n.with_flags("?"))
      false
    } catch {
      _ => true
    },
  )
}
```

限制：不操作磁盘邮箱，不提供锁、原子投递和完整 MIME 解析。
