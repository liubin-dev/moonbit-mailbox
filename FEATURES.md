# 功能与兼容性边界

## 新增能力

增加 maildir flags 更新及规范化接口。

## 尚未达到上游的部分

已增加 Node Maildir 磁盘适配；仍无 mbox 磁盘锁/事务和完整 MIME 解析。已有基础能力参见 README 与生成的 `pkg.generated.mbti`。

## 工程交付范围

独立 Git 仓库、独立构建目录、可执行文档、Wasm-GC/JS 测试、真实编译的浏览器与 CLI、边界输入检查、样例基准、CI 配置均随仓库交付。运行记录见 evidence；配置 CI 不代表远端 CI 已运行。没有公开发布或比赛验收结论。


## 0.3.0 开发更新：实际 Maildir

`tools/maildir-store.mjs` 用 Node 承担文件系统操作，MoonBit 负责文件名和 flags 规则。`new Maildir(path,{create:true})` 创建 tmp/new/cur；提供 deliver、list、read、setFlags、remove 和 folder。原始邮件字节保留，默认每封最多 32 MiB。Windows 默认 `!2,`，其他平台默认 `:2,`，与 Python Maildir.colon 配置对应。

```js
import {Maildir} from './tools/maildir-store.mjs';
const box = new Maildir('./local-mail', {create:true});
const key = box.deliver('Subject: Example\r\n\r\nBody\r\n');
box.setFlags(key, 'S');
console.log(box.read(key).toString());
```

投递使用独占临时文件、文件 fsync、同文件系统硬链接发布及临时文件清理，发布不覆盖已有目标。文件系统需支持硬链接。单 key 锁用于本适配器内部变更互斥；其他程序不遵守此锁时不保证事务隔离。标记移动使用 link/unlink，崩溃可能留下重复项，list 会报告歧义而不是静默丢信。没有目录 fsync、断电持久性或多操作事务保证；崩溃留下的锁需人工确认后清理。适用于用户掌控的私有目录，不提供对恶意目录替换的隔离保护。

针对性检查 `node tools/test-maildir-store.mjs` 已通过：真实磁盘字节保存、拒绝覆盖、flags、文件夹、删除和路径拒绝；Python 标准库读本项目邮件并写回另一封，再由本项目读取。需要 Node 和 Python，未重跑旧测试/其他仓库，未重打包；最新源码以本独立仓库为准。
