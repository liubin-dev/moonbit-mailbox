# mboxrd 与 Maildir 邮件归档迁移工具 · 修订申报草稿

本项目仓库：https://github.com/liubin-dev/moonbit-mailbox
模块 / 本地版本：`liubin-dev/mailbox` / `0.7.0`；许可证：MIT。
修订状态：条件复审；本轮仅本地修订，未推送或提交表单。

## 任务与选择依据
把文本归档和真实 Maildir 文件投递/标记/读取流程接起来，保持原始邮件字节，并暴露重复项和写入歧义。
需要 mbox/Maildir 原始邮件归档交换时评估，MIME 解析只是辅助；新 CLI 让库可以完成实际文件任务。

## 已实现内容
MoonBit 负责 mboxrd、文件名/flags 及附属 MIME 树/头部解码；Node 提供真实文件、独占临时文件和硬链接发布。
可复现任务：原始邮件导入 Maildir 后导出；按 README 构建后运行 `node examples/run-use-case.mjs`，输入与输出见 USE-CASE.md。
新增 import/list/flags/export CLI 以 SHA256 展示原始字节保持；本轮验证重复键、输出不覆盖和非 UTF-8 字节。先前 Python mailbox 双向磁盘交换报告独立保留。

## 原创、复用与差异
原创实现/参考来源/第三方材料许可按 README、DUPLICATION 与仓库来源说明披露；不将既有协议、算法、词库或规范发明归于本项目。
mailkit_12314、MoonMIME 等已经提供 MIME 解析；本项目保留这部分为辅助功能，不以首个 MIME 库申报。重点是 mbox/Maildir 归档存取和与 Python mailbox 的磁盘交换流程。
比较项目链接单列于 DUPLICATION.md，不作为本项目提交地址。检索范围不含完整未公开报名表，不能保证无重叠。

## 边界与剩余计划
无 mbox 磁盘事务/锁；Maildir 没有目录 fsync 或断电持久性保证，其他客户端未必遵守本适配器锁。附件名称是显示文本，不能直接当输出路径。
与 MIME 库有重叠且事务/断电边界有限；本轮合成邮件不是真实客户归档。
剩余计划：由对接团队核对真实表单链接、公开本轮对应提交及确认选题/换题流程；按实际接入输入补验证，避免以更多规则、测试数量或改名替代用途证据。
交付：MoonBit 库、限定宿主入口、可运行任务、源码/来源说明及分层验证证据；不承诺自动通过初审。
