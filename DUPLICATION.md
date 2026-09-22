> 2026-09-22 三份初审反馈后的当前判断：**条件复审**。与 MIME 库有重叠且事务/断电边界有限；本轮合成邮件不是真实客户归档。 本次差异说明：mailkit_12314、MoonMIME 等已经提供 MIME 解析；本项目保留这部分为辅助功能，不以首个 MIME 库申报。重点是 mbox/Maildir 归档存取和与 Python mailbox 的磁盘交换流程。 以下保留之前检索的固定提交与来源；此前“补足场景”不能理解为本次已解除价值异议。

# mailbox 查重与定位 · 2026-09-22

[fhh12341/mailkit_12314；oyjh0381/moonmime；moonmail](https://github.com/fhh12341/12314)。mailkit_12314、MoonMIME 等已经提供 MIME 解析；本项目保留这部分为辅助功能，不以首个 MIME 库申报。重点是 mbox/Maildir 归档存取和与 Python mailbox 的磁盘交换流程。

- [fhh12341/12314 固定提交](https://github.com/fhh12341/12314/tree/92d3d0f632d820971c0939bea303daf89c171ae0)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。
- [MoonMIME GitLink 项目](https://www.gitlink.org.cn/sky_0381/MoonMIME)：邮件 MIME 相邻实现，公开索引已命中。

本轮材料采用定位：**mboxrd 与 Maildir 邮件归档迁移工具**。

MoonBit 与宿主分工：MoonBit 负责 mboxrd、文件名/flags 及附属 MIME 树/头部解码；Node 提供真实文件、独占临时文件和硬链接发布。

本轮证据：本轮在真实临时目录验证字节保存、拒绝覆盖、flags 和 Python mailbox 双向读写。 具体输入、脚本、已执行与历史对照分开记录在 [PROPOSAL.md](PROPOSAL.md) 和 evidence/innovation-review-20260922/。

边界：无 mbox 磁盘事务/锁；Maildir 没有目录 fsync 或断电持久性保证，其他客户端未必遵守本适配器锁。附件名称是显示文本，不能直接当输出路径。

检索覆盖 Mooncakes 官方关键词/别名、GitHub 仓库查询、GitLink 公开索引、直接来源文档；没有完整赛事报名表、私有仓库、未公开分支或 GitHub 全代码索引。GitLink 索引也不完整。未找到同范围项目不等于生态空白；已有相关项目不自动等于无独立贡献。完整查询和固定提交快照在总交付目录 innovation-review-20260922/。

初次复核风险为“中”。本次补足差异和可复现工作流，没有自行将重叠归零，也不替评委作创新性认定。最终公开代码与表单附件须使用一致版本。
