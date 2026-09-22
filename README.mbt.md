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

本例只处理 Maildir 文件名；另有 Node Maildir 磁盘宿主，提供单 key 锁、文件同步和基于硬链接的不覆盖投递，见 [README.md](README.md)。该宿主面向用户掌控的私有目录，不保证外部程序遵守锁、目录 fsync、断电持久性或多操作事务；MoonBit MIME 解析也不是完整 MIME 兼容实现。
