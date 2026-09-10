# 功能与兼容性边界

## 新增能力

增加 maildir flags 更新及规范化接口。

## 尚未达到上游的部分

已增加 Node Maildir 磁盘适配；仍无 mbox 磁盘锁/事务；MIME 已支持下述核心结构，尚非完整兼容。已有基础能力参见 README 与生成的 `pkg.generated.mbti`。

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


## 0.4.0 开发更新：MoonBit MIME 树

`parse_mime(Bytes)` 返回 MimePart，包含有序重复保留的 fields、media_type、Content-Type parameters、解码后的 body 和 children。支持 multipart 混合/替代及嵌套边界、message/rfc822、7bit/8bit/binary 原始字节、Base64 和 Quoted-Printable（含软换行）。附件体返回 Bytes，不经文本转码；前导/尾随 multipart 说明文本不保留到树中。

以 [RFC 2045](https://www.rfc-editor.org/rfc/rfc2045.txt) 和 [RFC 2046](https://www.rfc-editor.org/rfc/rfc2046.txt) 的结构为参考独立实现。限制为 1 MiB 输入、32 层嵌套、512 个部件。缺失结束边界、重复 MIME 控制头、未知传输编码和破损编码会报错。现已补 RFC 2047 B/Q 显示解码和三种基础字符集；已增加 RFC 2231 扩展参数；尚无注释语法、其他字符集、MIME 写出或 Python 的全部容错行为；不声称完整 MIME 兼容。

Node 可从 web/engine.mjs 导入 `mime_summary(base64Message)` 查看实际 MoonBit 解析树的简要结果。正式接口在 `pkg.generated.mbti`。运行 `node tools/test-mime.mjs`，本轮 7 个 Python 独立对照、1 个嵌套邮件结果及 4 个错误场景通过；仅验证新增 JS 路径，未重复旧测试/打包。


## 0.5.0 开发更新：头部显示与正文文本

MoonBit `decode_header(String)` 解码 RFC 2047 B/Q 编码词，处理 Q 下划线空格和相邻编码词间的折叠空白；可用于 Subject 与已提取出的显示名称。`decode_charset(Bytes, charset)` 支持 UTF-8、US-ASCII、ISO-8859-1/Latin-1；`MimePart::text()` 读取 charset 参数，未声明时使用 US-ASCII，非 text 部件报错。

这是显示文本工具，不解析邮件地址语法，不对结构化头字段执行上下文校验，也不是可直接重新发送的线缆编码器。未知字符集、破损编码和超过 75 字符的编码词明确报错；当前没有 GBK/GB18030、Windows-1252 或字符集自动猜测。正文二进制仍可通过 body 原样访问。

新增 `node tools/test-mime-text.mjs`：9 个 Python 标准库头部对照、3 个正文字符集、6 个拒绝场景通过。Python 子进程显式使用 UTF-8，以免 Windows 默认代码页改变对照输入。只测试新增 JS 路径，未重复其他套件或打包。


## 0.6.0 开发更新：扩展参数与附件名称

`parse_mime_parameters(String)` 解析 Content-Type/Content-Disposition 参数，合并 RFC 2231 的 `name*`、`name*0*`/`name*1*` 等形式；支持乱序段、编码/未编码段混合，先合并字节再作字符集转换，避免截断跨段 UTF-8。Content-Type 解析已使用该逻辑；`MimePart::filename()` 优先取 Content-Disposition 的 filename，再回退 Content-Type 的 name。

限制 64 KiB 参数头、256 参数/段。重复编号、编号缺口、前导零、普通值与扩展值并存时拒绝歧义，和部分宽松客户端的优先级策略不同。语言标签仅消费、不返回；未声明字符集的编码值只接受可明确解释的 ASCII，支持的显式字符集仍为 UTF-8/ASCII/Latin-1。名称是未经路径净化的显示元数据，调用方不得直接当文件路径保存附件。

新增参数测试：7 个 Python filename 对照、6 个破损/歧义场景通过；只验证新增 JS 参数路径，没有重复其他套件或打包。
