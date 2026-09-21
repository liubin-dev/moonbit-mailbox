# MoonBit mbox/Maildir 与 MIME 格式库 · 项目申报书

## 一、项目名称

MoonBit mbox/Maildir 与 MIME 格式库

## 二、项目说明

MoonBit 0.6.0 提供 mboxrd、Maildir flags、MIME 树、编码头及 RFC 2231 参数；Node 宿主承担真实磁盘操作。区分纯格式 API 与文件系统安全边界。

## 三、方向与通用性

基础软件与数据格式。用于私有邮件归档、迁移核对和附件元数据解析。生态已有邮件/MIME 库，例如 fhh12341/mailkit_12314；本项目需突出 mboxrd 与实际 Maildir 发布工作流，不能主张邮件解析空白。

## 四、应用场景

导入 mboxrd；Maildir.deliver/list/read/setFlags 操作私有目录；MimePart 提取正文和附件显示名。filename 是未经路径净化的元数据，不得直接当保存路径。

## 五、功能与验证边界

支持受限 multipart、Base64、Quoted-Printable、UTF-8/ASCII/Latin-1 与扩展参数。独占临时文件、fsync、硬链接防覆盖不等于跨程序事务或断电持久性；无完整 Python mailbox/MIME 容错兼容。

## 六、原创性与参考材料

原创代码 MIT。参考 Python mailbox 文档与标准库行为（PSF，https://docs.python.org/3/library/mailbox.html）及 RFC 2045/2046/2047/2231；未复制 CPython 实现或测试集，Python 仅作独立交叉读写对照。

## 七、仓库链接

https://github.com/liubin-dev/moonbit-mailbox
