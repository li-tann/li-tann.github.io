# fmt

a fast and safe alternative to C stdio and C++ iostreams.

## format

```cpp
std::string str = fmt::format("");
```

### aligent

`<` & `>`

### regex-style

## Color & Text Style

> fmt/color.h provides support for terminal color and text style output.

```cpp
#include <fmt/color.h>

fmt::print(fg(fmt::color::floral_white) | bg(fmt::color::slate_gray) | fmt::emphasis::underline, 
            "Hello, {}!\n", "World");
```

### Color

fg~foreground, 前景色, 即字体颜色；
bg~background，背景色，顾名思义，背景色。

使用方法是`fg(fmt::color::xxx)`或`bg(fmt::color::xxx)`

fmt中预设了一百多种颜色, 详见fmt/color.h

### Text Style

fmt::emphasis::xxx

fmt中预设了8中字体风格，常用的有`emphasis::bold`，`emphasis::italic`，`emphasis::underline`，`emphasis::strikethrough`等

## chrono

```cpp
#include <fmt/chrono.h>

int main() {
  using namespace std::literals::chrono_literals;
  fmt::print("Default format: {} {}\n", 42s, 100ms);
  fmt::print("strftime-like format: {:%H:%M:%S}\n", 3h + 15min + 30s);
}
```
