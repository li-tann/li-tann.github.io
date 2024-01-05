---
custom_edit_url: null
---

# find_package

find_package

## 前提

windows系统下的包管理工具不如linux方便，linux系统中直接使用`find_package(package_name)`即可。

虽然windows系统有vcpkg，但下载gdal、boost等三方库时出现问题且不太会解决，所以没有使用vcpkg。

查找了适用于windows系统的find_package方法。

## find_package原理

copy from [Windows10下CMake find_package总结](https://blog.csdn.net/poolooloo/article/details/125614830)

find_package搜索路径的顺序为：

- cmake自身的环境变量 `CMAKE_PREFIX_PATH` `CMAKE_FRAMEWORK_PATH` `CMAKE_APPBUNDLE_PATH` 
- 然后是系统环境变量 `<package>_DIR` `CMAKE_PREFIX_PATH` `CMAKE_FRAMEWORK_PATH` `CMAKE_APPBUNDLE_PATH`
- 接着是CMake配置过程中参数 `HINTS` 的设置
- 最后是环境变量`PATH`,其他的就是你自己设置的变量了

## 实践

缺少内容
