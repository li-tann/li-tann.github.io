---
title: vcpkg 
custom_edit_url: null
last_update:
    author: li-tann
tags: [CMake, vcpkg]
---

# vcpkg

在setting中设置vcpkg

`crtl`+`shift`+`p`，输入`setting`，打开用户设置或打开工作区域设置

添加如下代码，以设置vcpkg环境：

```json
"cmake.configureSettings": {
    "CMAKE_TOOLCHAIN_FILE": "c:/src/vcpkg/scripts/buildsystems/vcpkg.cmake",
    "VCPKG_TARGET_TRIPLET": "x64-windows"
},
```

在CMakeLists.txt中设置vcpkg。以GDAL为例，需要在CMakeLists.txt中输入：

```cmake
find_package(GDAL CONFIG REQUIRED)
target_link_libraries(test PRIVATE GDAL::GDAL)
```

其中test为project名。

其他库需要输入的指令可以通过vcpkg查找，使用vcpkg下载完库（`vcpkg install [name]:x64-windows`）后会提示在cmake中需要输入的指令。


`CMAKE_TOOLCHAIN_FILE`是提供vcpkg.cmake路径，以查找其他库的`.cmake`文件；`VCPKG_TARGET_TRIPLET`是设置构建平台，需要与vcpkg安装的包平台以及之后我们的项目选择的平台一致。

## include

`crtl`+`shift`+`p`，输入`configuration`，打开编辑设置

对于C, C++代码，会进入（或生成）c_cpp_properties.json文件。

文件中有`includePath`字段，在里面输入相应的路径后，在工作路径中就可以通过`#include <..>`引入.h文件。
