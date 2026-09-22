# mboxrd / Maildir 邮件归档工具 · 0.6.0

重点是邮件归档存取：MoonBit 处理 mboxrd、Maildir 文件名与 flags，Node 提供真实 Maildir 投递、读取、标记、删除和子文件夹。附属 MIME、编码头和附件参数解析服务于归档查看；生态已有 MIME 库，不能以首个 MIME 实现申报。查重及边界见 [DUPLICATION.md](DUPLICATION.md)，新申报草稿见 [PROPOSAL.md](PROPOSAL.md)。

## 实际文件任务

需要 Node24，仓库附实际 MoonBit 编译引擎。只在自己指定的目录中操作：

```js
import {Maildir} from './tools/maildir-store.mjs';
const box = new Maildir('./local-mail', {create:true});
const key = box.deliver('Subject: Example\r\n\r\nBody\r\n');
box.setFlags(key, 'S');
console.log(box.read(key).toString());
```

投递保留原始字节，单封默认32 MiB；Windows 默认 `!2,`，其他平台 `:2,`。独占临时文件经文件 fsync 和同文件系统硬链接发布，不覆盖已有目标。需要支持硬链接的文件系统。

单 key 锁只约束遵守本适配器协议的调用者。flags 移动采用 link/unlink，崩溃可留下重复项，list 会报告歧义。没有目录 fsync、断电持久性、多操作事务或恶意目录替换隔离；没有 mbox 磁盘锁。不要从能写文件推断这些额外保证。

## MoonBit 能力与边界

- mboxrd 文本拆分与转义、折行头、Maildir flags；mbox 文本会规范化 LF，不是任意字节格式完全保真。
- MIME 树：multipart、message/rfc822、Base64/Quoted-Printable、原始附件字节；上限1 MiB、32层、512部件，前导/尾随说明文本不保留。
- RFC2047 B/Q 显示解码、UTF-8/ASCII/Latin-1 正文、RFC2231 连续附件参数。没有 MIME 写出、所有字符集或全部宽松容错；附件名称未作路径净化，不能直接当保存路径。

公共接口见 [pkg.generated.mbti](pkg.generated.mbti)，调用示例见 [README.mbt.md](README.mbt.md)。MoonBit 负责格式逻辑，文件系统与持久性由 Node 层实现。

## 验证与来源

```sh
moon test --target js
moon test --target wasm-gc
node tools/test-maildir-store.mjs
```

2026-09-22 本轮双后端及真实 Maildir 文件检查通过，包含 Python mailbox 双向读写，见 [验证记录](evidence/innovation-review-20260922/results.json)。MIME 的独立对照和以前版本的范围仍在 TESTING.md 与 evidence 中，不把未重跑套件写成本轮验收。

依据 Python mailbox 文档、RFC2045/2046/2047/2231 独立实现，原代码 MIT，非完整 Python mailbox 移植。团队已有公开仓库，本次修订只在本地。按版本记录的旧说明放在 [历史文档](README-HISTORY-20260921.md)，旧版本“无 MIME/无磁盘”不代表当前状态。
