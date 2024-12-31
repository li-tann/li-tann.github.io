---
title: zotero+OneDrive实现云同步
authors: li-tann
tags: [zotero,OneDrive]
---

![zotero.logo](https://www.zotero.org/static/images/theme/zotero-logo.1519312231.svg)

zotero是一款免费的文献管理工具(包括但不限于文件管理功能)，其本身提供收费的云端文件存储服务（免费向每个账户提供300Mb云空间）。

但将本地存储搭建在OneDrive中，云端只同步文献基本信息（不上传附件内容），即可实现免费的多设备同步。

## 操作说明

1. zotero编辑->首选项->同步->设置，取消文件同步的两个选项（不同步附件）；

2. zotero编辑->首选项->高级->文件和文件夹：数据存储位置选择自定义，修改文件存储位置（如：`E:\zotero_library`）；

    > 长期积累的文献较大，不建议放在默认的C盘

3. 将`E:\zotero_library\storage`移动到OneDrive网盘中，如：`D:\OneDrive\Zorero_storage\storage`；

4. 建立链接

`mklink /J "E:\zotero_library\storage" "D:\OneDrive\Zorero_storage\storage"`

到此为止，实现同步。

若直接将zotero数据存储位置放至OneDrive会提示有风险（数据同步的异常情况），所以将storage放置云盘，并建立云盘与本地的链接风险更低。

<!-- truncate -->