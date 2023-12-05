---
title: Mastering CMake
sidebar_position: 0
---

*Mastering CMake* study notes

[Mastering CMake](https://cmake.org/cmake/help/book/mastering-cmake/index.html)

## Getting Started

### Hello World for CMake

`cmake_minimum_required`, the first line of the top level CMakeLists file should always be.

This allows projects to require a given **version of CMake** and, in addition, allows CMake to be **backwards compatible(向后兼容)**.

设定CMake版本并且支持向后兼容

`project`, the next line of any top level CMakeLists file should be.

This command sets **the name of the project** and **may specify other options** such as language or version.

设置工程名称, 也可以设置语言、版本等其他信息（后面应该会有详细说明）

The project will contain all targets that are in the CMakeLists.txt file and any subdirectories, as specified by the `add_subdirectory` command.(If the `EXCLUDE_FROM_ALL` option is used in the `add_subdirectory` command, the generated project will not appear in the top-level Makefile or IDE project file; this is useful for generating sub-projects that do not make sense as part of the main build process.)

project会链接所有的targets, 包括通过`add_subdirectory`添加的子目录, 除非在子目录中设置`EXCLUDE_FROM_ALL`。

`add_executable`, be used to add an executable to the project using the given source file.

### Configure and Generate

After a CMakeLists file has been created, CMake processes the text file and creates entries in a cache file. Users may edit the CMakeLists file or specify cache values with the CMake gui or ccmake and re-configure. Next, CMake uses the cache entries to generate a project in the user’s desired build system (e.g. Makefile or Visual Studio solution).

写好CMakeLists.txt后，就需要配置和生成项目，可以通过gui/command等多种途径。但是在配置前还需要进行一些设置, 例如构建目录、设置编译器等。

### Specifying the Compiler to CMake

The `CC` environment variable specifies the C compiler, while `CXX` specifies the C++ compiler.You can specify the compilers directly on the command line by using `-DCMAKE_CXX_COMPILER=cl` for example.

Once cmake has been run and picked a compiler, if you wish to change the compiler, start over with **an empty binary directory**.

The flags for the compiler and the linker can also be changed by setting environment variables. Setting `LDFLAGS` will initialize the cache values for link flags, while `CXXFLAGS` and `CFLAGS` will initialize `CMAKE_CXX_FLAGS` and `CMAKE_C_FLAGS` respectively.

通过`-DCMAKE_CXX_COMPILER=cl`命令可以设置C++编译器为cl(不过在VSCode、VisualStudio等具备CMake相关组件的IDE中, 都具有可视化的编译器设置选项)。

![vscode, set compiler](./pics/cmake_vscode_set_complier.png)

### Build Configurations

Build configurations allow a project to be built in different ways for debug, optimized, or any other special set of flags. CMake supports, by **default**, **Debug**, **Release**, **MinSizeRel**, and **RelWithDebInfo** configurations.

- Debug has the basic debug flags turned on.
- Release has the basic optimizations turned on.
- MinSizeRel has flags that produce the smallest object code, but not necessarily the fastest code.
- RelWithDebInfo builds an optimized build with debug information as well.

CMake handles the configurations in slightly different ways depending on the generator being used.

但不同的generator，可能使CMake在处理配置的方法略有不同。

The Visual Studio IDE supports the notion of Build Configurations. A default project in Visual Studio usually has Debug and Release configurations. From the IDE you can select build Debug, and the files will be built with Debug flags. The IDE puts all of the binary files into directories with the name of the active configuration. This brings about an extra complexity for projects that build programs that need to be run as part of the build process from custom commands.

这一段不是很理解...

With Makefile-based generators, only one configuration can be active at the time CMake is run, and it is specified with the CMAKE_BUILD_TYPE variable。

构建项目时，可以通过`-DCMAKE_BUILD_TYPE=Debug/Release`来指定构建类型。

### Building Your Project

Another option is to use cmake’s `--build` option from the command line. This option is simply a convenience that allows you to build your project from the command line, even if that requires launching an IDE.

`cmake --build _build`, 在`./_build`文件夹中构建项目。

### 总结

写CMakeLists.txt时, 最基础的文件应包含`cmake_minimum_required(VERSION 3.26.0)`和`project(name)`, 通过`add_executable(exe_name hello_world.cpp)` 来添加可执行文件。

在编译和构建CMake项目时, 可以通过`-DCMAKE_CXX_COMPILER=<complier>` 设置编译器, 通过`-DCMAKE_BUILD_TYPE=<build_type>`设置编译类型, 通过`--build`设置编译目录。

## Writing CMakeLists Files

The CMake language is composed of **comments(注释)**, **commands(命令)**, and **variables(变量)**.

### Comments(注释)

Comments start with # and run to the end of the line. See the [cmake-language](https://cmake.org/cmake/help/latest/manual/cmake-language.7.html) manual for more details.

在CMakeLists文件中,由`#`起始的行为注释行

### variables(变量)

CMakeLists files use variables much like any programming language. CMake variable names are **case sensitive(大小写敏感)** and may only contain **alphanumeric characters字母字符** and **下划线**.

A number of useful variables are automatically defined by CMake and are discussed in the [cmake-variables](https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html) manual. These variables begin with `CMAKE_`. Avoid this naming convention (and, ideally, establish your own) for variables specific to your project.

All CMake variables are stored internally as **strings** although they may sometimes be interpreted as other types.

Use the `set` command to set variable values. In its simplest form, the first argument to `set` is the name of the variable and the rest of the arguments are the values. Multiple value arguments are packed into a semicolon-separated list and stored in the variable as a string. For example:

```cmake
set(Foo "")      # 1 quoted arg -> value is ""
set(Foo a)       # 1 unquoted arg -> value is "a"
set(Foo "a b c") # 1 quoted arg -> value is "a b c"
set(Foo a b c)   # 3 unquoted args -> value is "a;b;c"
```

`set`命令, 简单的语法是变量名+参数/字符串, 如果输入多个参数会被拼接成以分号`;`分割符的一个字符串。

Variables may be referenced in command arguments using syntax `${VAR}` where `VAR` is the variable name.

If the named variable is not defined, the reference is replaced with an empty string; otherwise it is replaced by the value of the variable. Replacement is performed prior to the expansion of unquoted arguments, so variable values containing semicolons are split into zero-or-more arguments in place of the original unquoted argument.For example:

```cmake
set(Foo a b c)    # 3 unquoted args -> value is "a;b;c"
command(${Foo})   # unquoted arg replaced by a;b;c and expands to three arguments

command("${Foo}") # quoted arg value is "a;b;c"
set(Foo "")       # 1 quoted arg -> value is empty string
command(${Foo})   # unquoted arg replaced by empty string and expands to zero arguments

command("${Foo}") # quoted arg value is empty string
```

通过`${VAR}`可以调用变量，使用变量`VAR`的值`VALUE`。如果变量未被定义使用时会被`替换(replace)`成一个空字符串`""`。且`替换`动作发生在VALUE的展开前，所以包含分号`;`的值`VALUE`是被拆分为多个参数后, 再替换`${VAR}`

**System environment variables(系统环境变量)** and **Windows registry values(注册表值)** can be accessed directly in CMake. To access system environment variables, use the syntax `$ENV{VAR}`. CMake can also reference registry entries in many commands using a syntax of the form `[HKEY_CURRENT_USER\\Software\\path1\\path2;key]`, where the paths are built from the registry tree and key.

`$ENV{VAR}`可以直接读取环境变量。(注册表值没试过)

### Variable Scope

变量范围

Variables in CMake have a scope that is a little different from most languages. When you set a variable, it is visible to the current CMakeLists file or function and any subdirectory’s CMakeLists files, any functions or macros(宏) that are invoked(调用), and any files that are included using the `include` command.

 When a new subdirectory is processed (or a function called), a new variable scope is created and initialized with the current value of all variables in the calling scope. Any new variables created in the child scope, or changes made to existing variables, will not impact the parent scope.

 There is a way for CMake to return a value from a function, and it can be done by using the PARENT_SCOPE option with the set command.

 ```cmake
function(foo)
  message(${test}) # test is 1 here
  message(${test_2}) # test_2 is 1 here
  set(test 2)
  set(test_2 2 PARENT_SCOPE)
  message(${test}) # test is 2 here, but only in this scope
  message(${test_2}) # test_1 still 1 in this scope
endfunction()

set(test 1)
set(test_2 1)
foo()
message(${test}) # test will still be 1 here
message(${test_2}) # test_2 will now be 2 here
 ```

CMakeLists.txt中设置的变量，在当前文件或函数、子目录文件、所有被调用的函数或宏、以及使用`include`命令引用的文件中可见。

子目录或函数中修改上一区域(parent scope)的变量, 只会影响当前区域该变量的值, 改变量在上一区域的使用时不受任何影响。

但如果在`set(VAR VALUE PARENT_SCPOE)`加入`PARENT_SCPOE`，就会修改该变量在上一区域的值，而不会修改当前区域。

### Commands(指令)

A command consists of the **command name**, **opening parenthesis**, **whitespace separated arguments**, and a **closing parenthesis**. Each command is evaluated in the order that it appears in the CMakeLists file. See the [cmake-commands](https://cmake.org/cmake/help/latest/manual/cmake-commands.7.html) manual for a full list of CMake commands.

CMake is **no longer case sensitive** to command names, so where you see `command`, you could use `COMMAND` or `Command` instead.It is considered best practice to use lowercase commands.All whitespace (**spaces**, **line feeds**, **tabs**) is ignored except to separate arguments.Therefore, commands may span multiple lines as long as the command name and the opening parenthesis are on the same line.

与参数不同，命令对大小写不敏感。建议使用小写输入命令。命令中的空白都会被忽略（使用该特征可以执行命令中参数之间的换行等操作），但要保证命令名称与开始的左括号在同一行。

常见命令有：

- set, 设置普通变量、缓存变量、或环境变量
- unset, 消除普通变量、缓存变量、或环境变量
- string, 字符串操作, 包括查找替换(find, replace)、复杂操作(append, tolower, toupper, length...)、对比(compare)、哈希(hash)...
- list, 列表操作, 包与string类似, 但操作对象不同
- separate_arguments, 解析命令行参数
- add_executable, 新增可执行文件
- add_library, 新增库文件
- ...

### Conditional Statements (if)

if, elseif, else的基本用法:

```cmake
if(MSVC80)
  # do something here
elseif(MSVC90)      
  # do something else
elseif(APPLE)
  # do something else
else()
endif()
```

详细使用方法参考: [if](https://cmake.org/cmake/help/latest/command/if.html#command:if)

主要是对if判断条件语法(Condition Syntax)的拓展，包含

- 基础字符的处理、
- 逻辑判断（Logic Operators: NOT, AND, OR...）
- 存在检查（Existence Checks）
- 文件判断（File Operations: EXISTS, IS_NEWER_THAN, IS_DIRECTORY, IS_SYMLINK, IS_ABSOLUTE..）
- 变量或字符的比较（MATCHES, LESS, GREATER, EQUAL, LESS_EQUAL...）
- 版本比较(Version Comparisons(暂时还没有仔细看"版本比较"是什么意思))

:::info

应该还得有一个详细的解释或者示例

:::

### Looping Constructs (foreach, while)

The foreach command enables you to execute a group of CMake commands repeatedly on the members of a list.

用foreach命令, 可以在for循环汇总, 使用同一个变量代替数组内的其他变量

```cmake
foreach(tfile
        TestAnisotropicDiffusion2D
        TestButterworthLowPass
        TestButterworthHighPass
        TestCityBlockDistance
        TestConvolve
        )

message("tfile:" ${tfile})
endforeach()        
```

上述示例代码中, 将会执行5次循环, 第一次循环中`${tfile}`为TestAnisotropicDiffusion2D, 第二次循环中`${tfile}`是TestButterworthLowPass... 一次类推

foreach可以用于嵌套, 比如: (设想的应用场景)

```cmake
foreach(package OpenMP GDAL Eigen3 fmt)
find_package(${package} CONFIG REQUIRED)
if(NOT ${package}_FOUND)
message(FATAL_ERROR "${package} not found!")
endif()
endforeach()
```

搜索各个库, 搜索不到的话就报错退出。

foreach的详细用法参考：[foreach](https://cmake.org/cmake/help/latest/command/foreach.html#command:foreach)

:::info

应该还得有一个详细的解释或者示例

:::

while用法是当满足判断条件时执行循环操作, 直到不满足判断条件为止。语法形如：

```cmake
while(<condition>)
  <commands>
endwhile()
```

`<condition>`的语法与`if(<condition>)endif()`相同。

The commands break() and continue() provide means to escape from the normal control flow.

while中提供了`break()`和`continue()`两个指令, 来跳出和跳过当前循环, 用法与C++近似。

### Procedure definitions (macro, function)

The main differences (between `macro` and `function`) are that a macro does not push and pop a new variable scope, and that the arguments to a macro are not treated as variables but as strings replaced prior to execution.

`macro`和`function`的区别与C++中宏和函数的区别类似，`macro`可以理解为将一段代码进行替换, 而`function`则是开辟一块新的空间，在空间内部执行相应指令，即function内部变量的改动不会改变其在function外部的值。所以，如果想在function中设置变量，且希望其在function结束后仍然生效，需要添加`PARENT_SCOPE`指令，即`set(${var} "value" PARENT_SCOPE)`。

参数( ARGC, ARGV, ARGV#i, ARGN)

- ${ARGC}, the number of arguments passed into the function (macro), 输入的参数个数
- ${ARGV}, A list of all arguments given to the function (macro)， 所有参数(不包含超过定义参数个数的可变参数, 即ARGN部分)
- ${ARGV#i}, ARGV0 represents the first argument to the macro, 第i个参数
- ${ARGN}, a list of all the arguments after the formal arguments, 所有超过定义参数格式之后的可变参数

```cmake
macro(regist mas sla)
  message(STATUS ARGC=${ARGC})
  message(STATUS ARGV=${ARGV})
  message(STATUS ARGN=${ARGN})
  message(STATUS ARGV0=${ARGV0})
  message(STATUS ARGV1=${ARGV1})
  message(STATUS ARGV2=${ARGV2})
  message(STATUS ARGV3=${ARGV3})
endmacro()

regist(mas sla aux)

# 输出:
[cmake] -- ARGC=3
[cmake] -- ARGV=masslaaux
[cmake] -- ARGN=aux
[cmake] -- ARGV0=mas
[cmake] -- ARGV1=sla
[cmake] -- ARGV2=aux
[cmake] -- ARGV3=
```

The `return` command returns from a function, directory or file.

`return`命令可以返回一个函数、目录或文件。由于`macro`和`function`的机制不同（`macro`没有开辟新空间而是原地展开/替换）, `macro`不能使用`return`指令。

### Regular Expressions

 Since there are several different conventions for specifying regular expressions, CMake’s standard is described in the string command documentation. The description is based on the open source regular expression class from Texas Instruments, which is used by CMake for parsing regular expressions.

CMake的正则表达式使用的是 **Texas Instruments**的标准，详情需要参考[string](https://cmake.org/cmake/help/latest/command/string.html#command:string)。

### Advanced Commands

There are a few commands that can be very useful, but are not typically used in writing CMakeLists files. This section will discuss a few of these commands and when they are useful.

介绍了几个不常用但在特定情况下非常有用的指令。

[add_dependencies](https://cmake.org/cmake/help/latest/command/add_dependencies.html#command:add_dependencies)

Makes a top-level `target` depend on other top-level targets to ensure that they build before `target` does. A top-level target is one created by one of the `add_executable()`, `add_library()`, or `add_custom_target()` commands (but not targets generated by CMake like `install`).

作用是在两个"top-level"的目标(targets)之间建立关系，top-level是可执行文件(executable), 库(library)或custom_target( a target with no output so it will always be built)。

[include_regular_expression](https://cmake.org/cmake/help/latest/command/include_regular_expression.html#command:include_regular_expression)

Set the regular expression used for dependency checking.

```cmake
include_regular_expression(regex_match [regex_complain])

regex_match    = "^.*$" (match everything)
regex_complain = "^$" (match empty string only)
```

## CMake Cache

The CMake cache may be thought of as a configuration file. The first time CMake is run on a project, it produces a CMakeCache.txt file in the top directory of the build tree. CMake uses this file to store a set of global cache variables, whose values persist across multiple runs within a project build tree.

## Key Concepts

## Policies

## Modules

## Installing Files

## System Inspection

## Finding Packages

## Custom Commands

## Converting Existing Systems To CMake

## Cross Compiling With CMake

## Packaging With CPack

## Testing With CMake and CTest

## CDash

## CMake Tutorial

## User Interaction Guide

## Using Dependencies Guide

## Importing and Exporting Guide

## IDE Integration Guide
