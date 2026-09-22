# 历史说明（部分内容已被后续版本替代）

# mbox/maildir 邮箱格式

> 2026-09-21 本地构建修复：命令包 import 已同步到当前 moon.mod 模块名；moon info/check、JS 构建、MoonBit 示例和 Node 引擎示例通过。算法未改，本轮未重跑历史全部行为/性能套件。当前提交指纹见 evidence/module-import-fix.json。

邮箱文本归档和 Maildir 文件名状态解析。本地候选版 0.2.0，供比较和代码审查；尚未作为完整竞赛作品提交。

## 运行

安装 MoonBit 后在本目录执行：

```sh
moon check
moon test
moon run cmd/main
```

也可在本目录运行 `./verify.ps1` 验证本项目。`pkg.generated.mbti` 是真实工具链生成的公共 API。命名空间 `localreview` 仅用于本地，正式发布前应替换为申请人的账号。

## 本版范围

实现目标：mboxrd 分隔与转义、消息头折行、Maildir flags。

未承诺：磁盘锁、文件系统变更、MIME 解码、完整 Python mailbox API。

## 来源与实现方式

规格/算法参考：https://docs.python.org/3/library/mailbox.html。

当前代码是本地新写的 MoonBit 实现，不声称是上游完整移植；未复制上游源代码、词库或测试集。测试输入为本项目新写。MIT 仅适用于本目录原创代码。将来如移植上游文件，需要另行保存其版权声明并核查许可证，不能直接沿用当前说明。

## 审查

先看 `cmd/main/main.mbt` 的实际使用，再看公共 API 与测试文件。联网兼容性、性能数据或官方验收未执行的部分不得从本地单元测试成功推断。

## 下一阶段与明确限制

增加流式字节接口、mboxo/mboxcl 方言和真实 Maildir 文件锁/原子写；当前仅 mboxrd 文本编解码，统一 LF，保留正文转义深度，空消息和终止换行存在标准化。

本分装包自带 `web/index.html`（用 `start-review.ps1` 启动）。`cmd/web/main.mbt` 为薄适配层，网页调用编译后的真实 MoonBit 模块。

## 独立分装使用

本文件夹可以单独移动或建立仓库，不依赖其他候选项目。浏览器演示已编译，无须安装 MoonBit 即可试用（需要 Python 3）：

```powershell
./start-review.ps1
```

打开 http://127.0.0.1:8779/web/ 。修改和测试源码需安装 MoonBit 与 Node.js，再运行 `./verify.ps1`。本机尚未将 MoonBit 加入 PATH 时，可传入 `-MoonPath`。独立包不捆绑编译器。

仅含本项目源码和构建产物；没有上传仓库或发布包。`DUPLICATION.md`、`evidence/current-validation.json` 和本次分装清单 提供查重、测试和完整性资料。

## 独立仓库工作流

本目录是该项目后续开发的唯一主仓库，旧批次目录及 ZIP 为历史审查快照。没有 Git remote，没有共享构建目录，没有上级 moon.work。

真实 CLI 支持输入参数、文件和标准输入：

```powershell
node tools/cli.mjs --help
node tools/cli.mjs --file sample.txt --json
```

需要安装 MoonBit 后传 `-MoonPath` 或将 moon 加入 PATH；不依赖工作区之外的私有脚本。详见 [TESTING.md](TESTING.md) 和 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 本轮功能升级

增加 maildir flags 更新及规范化接口。

已增加 Node Maildir 磁盘适配；仍无 mbox 磁盘锁/事务；MIME 已支持下述核心结构，尚非完整兼容。

[可执行 API 示例](README.mbt.md)会随测试运行；[功能边界](FEATURES.md)和[测试说明](TESTING.md)用于独立审查。网页与 CLI 展示示例入口，新 API 的完整使用见可执行示例。


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
