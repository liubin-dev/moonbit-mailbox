# 原始邮件导入 Maildir 后导出

把文本归档和真实 Maildir 文件投递/标记/读取流程接起来，保持原始邮件字节，并暴露重复项和写入歧义。

## 输入、操作、输出

原创合成邮件含非 UTF-8 字节；完整流程只写新的临时目录。

最简运行：先按 README 构建，然后 `node examples/run-use-case.mjs`。它自动创建输出目录并执行下面命令。下列 `{out}` 是运行器替换的实际目录，不是直接输入 shell 的变量；stdin 文件由运行器传递，以避免 Windows 与 POSIX 重定向差异。

```text
node tools/maildir-cli.mjs import {out}/maildir examples/use-case/message.eml --create --key example-message
node tools/maildir-cli.mjs flags {out}/maildir example-message S
node tools/maildir-cli.mjs list {out}/maildir
node tools/maildir-cli.mjs export {out}/maildir example-message {out}/export.eml
```

观察：导入与导出的 SHA256 相同，标记后位于 cur，flags=S；不重复解码 MIME。

每一步输出见实际目录下 `step-N.stdout.txt` / `step-N.stderr.txt`；本轮已保存回执见 `evidence/value-rework-20260922/use-case.json`。

## 为什么保留这个实现

需要 mbox/Maildir 原始邮件归档交换时评估，MIME 解析只是辅助；新 CLI 让库可以完成实际文件任务。

mailkit_12314、MoonMIME 等已经提供 MIME 解析；本项目保留这部分为辅助功能，不以首个 MIME 库申报。重点是 mbox/Maildir 归档存取和与 Python mailbox 的磁盘交换流程。

## 不能由样例推出的结论

无 mbox 磁盘事务/锁；Maildir 没有目录 fsync 或断电持久性保证，其他客户端未必遵守本适配器锁。附件名称是显示文本，不能直接当输出路径。

该样例是可修改的使用入口，不能证明存在真实用户、全部兼容或性能领先。继续投入的依据应是明确的输入或接入需求；若对接任务用既有成熟库即可完成，应优先复用而不是为保留参赛数量扩张本项目。
