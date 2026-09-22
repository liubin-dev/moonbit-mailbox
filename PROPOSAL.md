# mboxrd 与 Maildir 邮件归档迁移工具

本地申报候选材料，2026-09-22；模块 `liubin-dev/mailbox`，版本 `0.6.0`。团队的公开仓库可能还是先前提交，本次没有推送；最终表单必须指向团队实际上传版本。

## 要解决的任务

把文本归档和真实 Maildir 文件投递/标记/读取流程接起来，保持原始邮件字节，并暴露重复项和写入歧义。

以下是目标任务和可复现工程证据，不虚构客户、存量部署或采用人数。

## 现有工作与新增贡献

[fhh12341/mailkit_12314；oyjh0381/moonmime；moonmail](https://github.com/fhh12341/12314)。mailkit_12314、MoonMIME 等已经提供 MIME 解析；本项目保留这部分为辅助功能，不以首个 MIME 库申报。重点是 mbox/Maildir 归档存取和与 Python mailbox 的磁盘交换流程。

MoonBit 负责 mboxrd、文件名/flags 及附属 MIME 树/头部解码；Node 提供真实文件、独占临时文件和硬链接发布。

- [fhh12341/12314 固定提交](https://github.com/fhh12341/12314/tree/92d3d0f632d820971c0939bea303daf89c171ae0)：依据该版本的公开说明对照，不冒充本轮运行了对方全部实现。
- [MoonMIME GitLink 项目](https://www.gitlink.org.cn/sky_0381/MoonMIME)：邮件 MIME 相邻实现，公开索引已命中。

## 可复现路径

仓库附编译引擎；修改源码后先构建。参考工具的额外依赖与环境变量见 TESTING.md；测试创建的网络服务仅在本机。

```sh
node tools/test-maildir-store.mjs
```

本轮在真实临时目录验证字节保存、拒绝覆盖、flags 和 Python mailbox 双向读写。 本轮 JS/WasmGC 核心测试及 JS 构建通过，原始日志见 [本轮验证](evidence/innovation-review-20260922/results.json)。测试数量证明所列范围，不能代替创新性论证或推断正式审核通过。

## 边界与来源

无 mbox 磁盘事务/锁；Maildir 没有目录 fsync 或断电持久性保证，其他客户端未必遵守本适配器锁。附件名称是显示文本，不能直接当输出路径。

许可证与来源沿用仓库现有 LICENSE/第三方说明，不将标准、算法、词库或参考软件写成本项目发明。查重不是对全生态不存在的证明，日期、相邻项与未覆盖范围见 [DUPLICATION.md](DUPLICATION.md)。
