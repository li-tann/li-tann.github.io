---
custom_edit_url: null
---

# pybind11

使用CMake + Pybind11, 将C++写的算法/类，导出到Python中，类似于一个Python库/包

## 导入pybind11

1. vcpkg

cd到vcpkg根目录下, 下载pybind11库

```shell
vcpkg install pybind11:x64-windows --clean-after-build
```

在CMakeLists.txt内添加如下字段

```cmake
find_package(Python COMPONENTS Interpreter Development)
find_package(pybind11 CONFIG)

```

2. sub_directory

pybind11是一个header-only库, 所以直接把它当做子项目加载到当前项目中也非常方便

从github下载[pybind11](https://github.com/pybind/pybind11)到指定路径。

项目结构，如下所示

```shell
projects/
    pybind11/   <--
        docs/
        include/
        tools/
        ...
        setup.py
        CMakeLists.txt
    mylib.cpp
    CMakeLists.txt  <--
```

在外侧CMakeLists.txt中添加如下字段

```cmake
add_subdirectory(pybind11)
```

## 创建模板库

不同于C++中常见的可执行文件'executable', 动态库'shared library', 又或是静态库'static library', pybind11的目标在VSCode被标记为模板库'module library'。

在创建模板库时也不应该使用C++中常用的`add_library`, `add_executable`, 而是`pybind11_add_module`.

```cmake
pybind11_add_module(py_ltie
		your_libs.cpp)
target_link_libraries(py_ltie PUBLIC utils)
target_link_libraries(py_ltie PUBLIC sar)
target_link_libraries(py_ltie PUBLIC insar)  # utils, sar, insar 都是依赖库
target_link_libraries(py_ltie PRIVATE pybind11::lto pybind11::embed pybind11::module pybind11::headers)
```

执行一次CMake后, 该目标会显示在IDE(VSCode)中,

![alt text](pics/py_ltie_target.png)

## pybind"语法"

### 函数

### 类

### 枚举

### 成员函数(重载)

### operator

### 模板类

### TODO

派生类, 静态变量...

## pyd使用

## IDE提示

pybind11-stubgen
