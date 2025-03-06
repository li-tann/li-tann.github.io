---
title: vscode env.
sidebar_position: 1
custom_edit_url: null
last_update:
    author: li-tann
tags: [Cpp, CMake]
---

# VSCode开发使用技巧

:::tip
本篇内容默认开发套件为：VSCode("IDE") + CMake(工程构建) + MSVC(编译器) + vcpkg(库管理工具)
:::

个人认为，使用VSCode来做C++开发的好处有，

1. 相较于VisualStudio而言，VSCode非常轻量，同时启动很多个工程也不是问题；
2. 编译器、三方库依赖环境等参数设置更简单直接，通过修改几个json文件的参数来实现；（是优点的同时也是缺点，因人而异）
3. VSCode插件远比VisualStudio要多得多，在VSCode里开发，可以更方便的查看json、markdown、python、csv等文件，以及jpg、png、h5等影像；
4. 文件编码格式可以自由设置，VisualStudio虽然也可以设置，但对utf-8的支持不算很好...；
5. 软件的布局更舒适，可以分割出多个界面对比查看代码等；

同样肯定也有缺点，千万条缺点汇聚成一条，

:::warning
毛坯房需要自己装修
:::

使用VSCode作为开发工具，首先需要通过设置参数的方式来配置环境，而参数主要集中在`.vscode`文件夹内的`settings.json`、`c_cpp_properties.json`、`launch.json`以及`tasks.json`几个文件中。

（如果使用VisualStudio + CMake开发，参数文件则存放`.vs`文件夹中，并且命名方式与VSCode也不完全相同）

## 配置环境

需要配置的环境主要包括：CMake地址、Vcpkg地址、include所有目录。

### json创建方法

`crtl + shift + p`，输入`setting`，打开用户设置或打开工作区域设置。如果选择了工作区域设置（建议），则`.vscode`文件夹内会自动生成一个`settings.json`文件，用于自定义CMake相关的设置；

`crtl + shift + p`，输入`configuration`，打开编辑设置。同时在`.vscode`文件夹内会自动生成一个`c_cpp_properties.json`文件，用于自定义C++开发时.h文件搜索、智能提示等设置；

切换到“运行与调试”界面，点击“创建 launch.json文件”，在.vscode文件夹内会创建一个`launch.json`文件，用于自定义调试任务；

### CMake & Vcpkg 地址

为了正常的使用CMake构建工程，以及加载vcpkg内编译的三方库，需要在`settings.json`中添加，

```json
"cmake.cmakePath": "D:\\CMake\\bin\\cmake.exe",
    "cmake.ctestPath": "D:\\CMake\\bin\\ctest.exe",
    "cmake.configureSettings": {
        "CMAKE_BUILD_TYPE":"${buildType}",
        "CMAKE_TOOLCHAIN_FILE": "d:/vcpkg/scripts/buildsystems/vcpkg.cmake",
        "VCPKG_TARGET_TRIPLET": "x64-windows"
    },
```

### includePath

为确保使用vscode开发时，IDE可以正常填充函数信息，需要在`c_cpp_properties.json`中添加，

```json
"configurations": [
    {
        "name": "Win32",
        "includePath": [
            "${default}",
            "${workspaceFolder}/**", /// for local_file
            "${vcpkgRoot}/x64-windows/include", /// for 3rd party
            "D:/Microsoft Visual Studio/2022/Community/VC/Tools/MSVC/14.39.33519/include", /// for <stdxxx>
            "D:/Windows Kits/10/Include/10.0.19041.0/**"    /// for <windows.h> 
        ],
        "defines": [
            "_DEBUG",
            "UNICODE",
            "_UNICODE"
        ],
        
        "intelliSenseMode": "windows-msvc-x64",
    }
],
```

## 调试方法

### 基于CMake组件的调试

需要先安装CMake的插件。

在`settings.json`文件中添加`cmake.debugConfig`。

```json
"cmake.debugConfig": {
    "args": [
        "par1",
        "par2",
        "..."
    ]
},
```

然后点击底部工具栏的"debug"按钮启动调试，此时启动的程序所输入的参数与`"cmake.debugConfig":{"args":[...]}`相同。

这种做法的好处是比较方便，

缺点是，

1. 需要频繁的修改参数以适配多个的可执行文件或多个参数。
2. 不能调整调试器、启动方式等细节。

### 基于launch.json的调试

`launch.json`中提供了自由度更高的调试方法，需要我们自己创建调试任务，设置可执行文件地址、调试器、以及调试终端；

用户可以根据实际需求，定制多个调试任务，避免了重复修改参数的问题。

通过点击“添加配置”按钮，可以创建一个基础模板，（对于还没有创建launch.json文件的用户，参考[创建json文件](#json创建方法)）

对于windows + msvc的用户，可以选择`C/C++: (windows)启动`，可以得到一个模板：

```json
{
    "name": "(Windows) 启动",
    "type": "cppvsdbg",
    "request": "launch",
    "program": "输入程序名称，例如 ${workspaceFolder}/a.exe",
    "args": [],
    "stopAtEntry": false,
    "cwd": "${fileDirname}",
    "environment": [],
    "console": "externalTerminal"
},
```

其中, （下方说明中带有`*`标记的是需要根据实际情况修改的内容）

- name* 是该调试任务在“运行与调试”界面所显示的任务名称；
- type 是任务类型，保持默认值（cppvsdbg）不需要改动；
- request 配置类型（启动或附加）不太懂附加是什么意思；
- program* 是调试任务需要启动的可执行文件的地址，建议基于`${workspaceFolder}`填写；
  - `${workspaceFolder}`表示当前工作区的根目录，也就是.vscode文件夹所在的文件夹, 即"../root/.vscode/launch.json"地址中的"../root"
- args* 预输入的参数；
- stopAtEntry 是否需要在程序入口处停止，通常情况下保持默认(false)即可；
- cwd 目标的工作目录，应该就是执行program目标程序时的工作目录，默认是launch.json文件所在目录，有需要再修改；
- environment 程序的环境变量，暂时没想到有哪些应用场景，保持默认即可
- console 启动program目标程序的位置，即选择启动程序的终端；
  - 默认是"externalTerminal", 即调用外部的终端启动；若习惯使用VSCode中集成的终端，可修改为"integratedTerminal"

修改完成后得到，

```json
{
    "name": "test_sar_par test",
    "type": "cppvsdbg",
    "request": "launch",
    "program": "${workspaceFolder}/build/binary/Debug/test_sar_par.exe",
    "args": ["1","2","4"],
    "stopAtEntry": false,
    "cwd": "${fileDirname}",
    "environment": [],
    "console": "integratedTerminal"
},
```

（vscode及相关组件优化的很好，将指针放到变量字段上面就可以跳出一个说明窗口）

如果想指定调试器，还可以使用“gdb启动”(网上有很多设置的教程，这里就不赘述了)

```json
{
    "name": "(gdb) 启动",
    "type": "cppdbg",
    "request": "launch",
    "program": "输入程序名称，例如 ${workspaceFolder}/a.exe",
    "args": [],
    "stopAtEntry": false,
    "cwd": "${fileDirname}",
    "environment": [],
    "externalConsole": false,
    "MIMode": "gdb",
    "miDebuggerPath": "/path/to/gdb",
    "setupCommands": [
        {
            "description": "为 gdb 启用整齐打印",
            "text": "-enable-pretty-printing",
            "ignoreFailures": true
        },
        {
            "description": "将反汇编风格设置为 Intel",
            "text": "-gdb-set disassembly-flavor intel",
            "ignoreFailures": true
        }
    ]
},
```
