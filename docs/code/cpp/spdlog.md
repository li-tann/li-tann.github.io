# spdlog

Very fast, header-only/compiled, C++ logging library.

## 参考信息

[gabime/spdlog](https://github.com/gabime/spdlog)

[spdlog.Wiki](https://github.com/gabime/spdlog/wiki)

只是写一些自己已经用到的内容, 会很浅, 详细说明可以直接看github。

## 平台

- Linux, FreeBSD, OpenBSD, Solaris, AIX
- Windows (msvc 2013+, cygwin)
- macOS (clang 3.5+)
- Android

根据github上的信息, 应该是不支持Windows MinGW编译器, 自己也在msys下载库但无法使用...

## logger类型

- basic logger, 无特殊功能、文件大小会随文本内容无线增长的logger
- rotating logger, 应该是可以自定义文本日志大小和数量的logger, 可以控制日志数量
- daily logger, 每天定时(自定义时间)创建一个新日志文件的logger

### Create basic logger

```cpp
#include "spdlog/sinks/basic_file_sink.h"
void basic_logfile_example()
{
    try {
        auto logger = spdlog::basic_logger_mt("basic_logger", "logs/basic-log.txt");
    }
    catch (const spdlog::spdlog_ex &ex){
        std::cout << "Log init failed: " << ex.what() << std::endl;
    }
}
```

### Create rotating logger

```cpp
#include "spdlog/sinks/rotating_file_sink.h"
void rotating_example()
{
    // Create a file rotating logger with 5mb size max and 3 rotated files
    auto max_size = 1048576 * 5;
    auto max_files = 3;
    auto logger = spdlog::rotating_logger_mt("some_logger_name", "logs/rotating.txt", max_size, max_files);
}
```

### Create daily logger

```cpp
#include "spdlog/sinks/daily_file_sink.h"
void daily_example()
{
    // Create a daily logger - a new file is created every day on 2:30am
    auto logger = spdlog::daily_logger_mt("daily_logger", "logs/daily.txt", 2, 30);
}
```

spdlog也是可以支持异步打印日志的。

## 基本操作

spdlog使用了fmt库, 可以使用与python类似的格式打印文本信息。

关于fmt的使用方法，可参考旁边文章。

### 控制台打印日志信息

```cpp
#include "spdlog/spdlog.h"

int main() 
{
    spdlog::info("Welcome to spdlog!");
    spdlog::error("Some error message with arg: {}", 1);
    
    spdlog::warn("Easy padding in numbers like {:08d}", 12);
    spdlog::critical("Support for int: {0:d};  hex: {0:x};  oct: {0:o}; bin: {0:b}", 42);
    spdlog::info("Support for floats {:03.2f}", 1.23456);
    spdlog::info("Positional args are {1} {0}..", "too", "supported");
    spdlog::info("{:<30}", "left aligned");
    
    spdlog::set_level(spdlog::level::debug); // Set global log level to debug
    spdlog::debug("This message should be displayed..");    
    
    // change log pattern
    spdlog::set_pattern("[%H:%M:%S %z] [%n] [%^---%L---%$] [thread %t] %v");
    
    // Compile time log levels
    // define SPDLOG_ACTIVE_LEVEL to desired level
    SPDLOG_TRACE("Some trace message with param {}", 42);
    SPDLOG_DEBUG("Some debug message");
}
```

spdlog中打印的信息登记被分为`info`, `warn`, `error`, 和`critical`四种。

### 创建日志文件

```cpp
#include <iostream>
#include "spdlog/spdlog.h"
#include "spdlog/sinks/basic_file_sink.h" // support for basic file logging
#include "spdlog/sinks/rotating_file_sink.h" // support for rotating file logging

int main(int, char* [])
{
    try 
    {
        // Create basic file logger (not rotated)
        auto my_logger = spdlog::basic_logger_mt("basic_logger", "logs/basic.txt");
        
        // create a file rotating logger with 5mb size max and 3 rotated files
        auto file_logger = spdlog::rotating_logger_mt("file_logger", "myfilename", 1024 * 1024 * 5, 3);
    }
    catch (const spdlog::spdlog_ex& ex)
    {
        std::cout << "Log initialization failed: " << ex.what() << std::endl;
    }
}
```
