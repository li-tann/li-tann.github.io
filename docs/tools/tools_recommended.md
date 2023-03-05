# 软件推荐

软件推荐

## processExplorer

exe文件的依赖文件查询软件。

微软的软件，在bing上直接搜索可以比较方便的进入下载链接。

进入软件，View -> Lower Pane View -> DLLs, 勾选该选项可以显示启动exe文件时所依赖的dll文件。

## ILMerge*

合并dll和exe的工具，还未使用。

## CCompare

Beyond Compare的平替软件，开源。

方便地对比两个文本文件之间的差异，用于查看两版代码的区别。

## Inno Setup

安装包制作工具，免费。

## VSCode拓展包

Markdown Preview Enhanced
>markdown的增强显示功能，并且支持html、pdf的转换。

Markdown Preview Mermaid Support
>mermaid diagram 图的增强显示功能。

markdownlint
>markdown语法检测和提示。

## zotero

文献库的管理，免费使用。

免费300M存储文献信息 + OneDrive存储文献内容，实现免费的多设备信息共享。

[知乎-Zotero使用Onedrive实现云同步](https://zhuanlan.zhihu.com/p/408027026)

核心方法是zotero账户只同步占空间极小的文献信息，文献库放到OneDrive云平台。为防止云平台的文献库多设备见出现未知错误，只将storage文件夹存放到云平台中，并使用`mklink /J`建立云平台storage与本地storage的链接。

[zotero内置外文翻译](https://github.com/windingwind/zotero-pdf-translate.git)

## listary

比everyone更方便的文件搜索工具。

## Captura

截屏和录屏工具。

## 个人主页

github.io

ReadTheDocs

## vcpkg

windows下的c++库

```shell
# 安装
git clone https://github.com/microsoft/vcpkg
.\vcpkg\bootstrap-vcpkg.bat
# 下载包 
.\vcpkg\vcpkg install [package name]:x64-windows
```

下载gdal时，出现libpq failed。

解决方法：Visual Studio 添加英文环境。
