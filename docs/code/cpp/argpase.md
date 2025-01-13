---
custom_edit_url: null
last_update:
    author: li-tann
tags: [Cpp, argparse]
---

# argparse

## basic

### positional Arguments

定位参数 (必选参数)

`program.add_argument("square")`

### optional Arguments

可选参数

`program.add_argument("-o", "--optional")`

#### flag

可选参数有时候会被视为一种标识使用，比如：输入"-f"或""--filter"代表对影像进行滤波，否则就不执行

可以使用下面两种方式来实现“标识”功能

```c++
program.add_argument("-f", "--filter")
  .help("do filter to image")
    .default_value(false)
    .implicit_value(true);
/// or
program.add_argument("-f", "--filter")
  .help("do filter to image")
    .flag();
```

`.flag()` 与 `.default_value(false).implicit_value(true)` 完全等效

#### Requiring optional arguments(必选项的可选参数？)

需求是：需要一个以“-”或“--”开头的参数，可以使用`.required()`实现

```c++
program.add_argument("-o", "--output")
  .required()
  .help("specify the output file.");
```

加入`.required()`后，如果该参数没有被调用，program就会抛出一个异常

但也可以为该参数假如一个默认值`.default_value(...)`

```c++
program.add_argument("-o", "--output")
  .default_value(std::string("-"))
  .required()
  .help("specify the output file.");
```

#### Accessing optional arguments without default values(没有默认值的可选参数)

使用`.parent()`代替`.get<T>()`

`.parent()`会返回一个`std::optional<T>`, 所以如果该可选参数没有使用时，program不会提示异常，返回值相当于`std::nullopt`

:::note
so that when the user does not provide a value to this parameter, the return value compares equal to `std::nullopt`.
:::

#### Deciding if the value was given by the user

使用`.is_used()`来判断一个可选参数是否被输入

```c++
bool flag = program.is_used("--color");
```

#### Joining values of repeated optional arguments

为可选参数追加输入内容, 可使用`.append()`，

```c++
program.add_argument("--color")
  .default_value<std::vector<std::string>>({ "orange" })
  .append()
  .help("specify the cat's fur color")
```

这样就可以实现如下的指令：

```shell
./main --color red --color green --color blue
```

并在读取参数值转换为`vector`

```c++
auto colors = program.get<std::vector<std::string>>("--color");  // {"red", "green", "blue"}
```

#### Repeating an argument to increase a value

通过重复输入同一参数来不停修改一个数值，实现方法：`.action([](){...})`

```c++
int verbosity = 0;
program.add_argument("-V", "--verbose")
  .action([&](const auto &) { ++verbosity; })
  .append()
  .default_value(false)
  .implicit_value(true)
  .nargs(0);

program.parse_args(argc, argv);    // Example: ./main -VVVV

std::cout << "verbose level: " << verbosity << std::endl;    // verbose level: 4
```

示例中预先定义了一个变量，并增加.action()函数，定义一个lambda表达式来持续对verbosity进行修改，（记得要加上.append()）

输入了四次`V`后，verbosity的值为4

#### Mutually Exclusive Group

互斥变量，为program建立一个group，在group中添加可选参数，每个group中的参数就不允许同时存在了

```c++
auto &group = program.add_mutually_exclusive_group();
group.add_argument("--first");
group.add_argument("--second");
```

`add_mutually_exclusive_group()`中的默认参数被省略了：`required = false`

当`required = true`时，表示group中的参数至少要存在一个。

使用场景举例：

当进行差分干涉时，需要把差分干涉图减去平地相位（应用于insar）或地形相位（应用于dinsar），必须要减相位，并且只能减其中一个相位，

此时：

```c++
auto &group = program.add_mutually_exclusive_group(true);
group.add_argument("-f", "--flat");
group.add_argument("-t", "--topo");
```

#### Binding Variables

:::note
但是个人认为这种方式的实际使用场景不多。
:::

绑定数据

可以通过`.store_into()`把数据绑定到一个变量上，这种做法类似于为参数设置了一个默认值。

```c++
bool flagvar = false;
program.add_argument("--flagvar").store_into(flagvar);
```

:::tip
但只支持`bool`, `int`, `double`, `std::string`, `std::vector<std::string>`, 这几种常见数据。
:::

### Print Help

`add_description("str")`可以在主要参数说明文本的上方加入帮助说明

`add_epilog ("str")`可以在主要参数说明文本的下方加入帮助说明

### List Arguments

参数列表

使用`.nargs(int)`可以控制变量后面需要输入的参数数量, 使用时可以使用`get<T>`将参数转换为`std::vector`或`std::list`

```c++
program.add_argument("--input_files")
  .help("The list of input files")
  .nargs(2);
/// ...
auto files = program.get<std::vector<std::string>>("--input_files");
```

`.nargs(int, int)`表示可以输入的参数数量区间，例如下面示例指该参数后面可携带1~3个参数

```c++
program.add_argument("--input_files")
  .nargs(1, 3);  // This accepts 1 to 3 arguments.
```

此外`.nargs(int)`中的`int`还可以替换为：

- `.nargs(argparse::nargs_pattern::any)`, 指可以输入任意个参数
- `.nargs(argparse::nargs_pattern::at_least_one)`, 指至少输入一个参数
- `.nargs(argparse::nargs_pattern::optional)`, 指可以输入0或1个参数

### Compound Arguments

复合参数

多个flag可选参数，搭配最多一个普通的可变参数，可以实现如下效果：

```c++
argparse::ArgumentParser program("test");

program.add_argument("-a")
  .default_value(false)
  .implicit_value(true);

program.add_argument("-b")
  .default_value(false)
  .implicit_value(true);

program.add_argument("-c")
  .nargs(2)
  .default_value(std::vector<float>{0.0f, 0.0f})
  .scan<'g', float>();

/// ...
```

可以输入`-abc[par1] [par2]`来启动程序性，如下所示：

```c++
./main -ac 3.14 2.718
// a = true
// b = false
// c = {3.14, 2.718}
/// or
foo@bar:/home/dev/$ ./main -cb
// a = false
// b = true
// c = {0.0, 0.0}
```

### Converting to Numeric Types

可用`.scan<Shape,T>()`来限制输入数据的类型。

详细说明如下表所示：

|Shape|interpretation|
|:---:|:---:|
|'a' or 'A'|hexadecimal floating point|
|'e' or 'E'|scientific notation (floating point)|
|'f' or 'F'|fixed notation (floating point)|
|'g' or 'G'|general form (either fixed or scientific)|
|'d'|decimal|
|'i'|std::from_chars grammar with base == 10|
|'o'|octal (unsigned)|
|'u'|decimal (unsigned)|
|'x' or 'X'|hexadecimal (unsigned)|

常用的方式有：

小数：`.scan<'g', float>()`或`.scan<'g', double>()`

整数：`.scan<'i', int>()`

### Gathering Remaining Arguments

使用`.remaining()`来收集多余的参数

感觉好像类似于`.nargs(argparse::nargs_pattern::at_least_one)`

:::warning
需要注意的是，可选参数(optional arguments)必须写在使用`.remaining()`的参数之前，否则可变参数也会称为remainin()g的一部分。
:::

### Parent Parser

`program1.add_parents(program2)`可以将一个program整体添加到当前的programs里。

### Subcommands

指令集

`program1.add_subparser(program2)`可以将program2作为一个子集加入到program1中。

:::info
可参考LITE_Tools, 或GDAL_Tools (此处省略一万字)
:::

如果在子项目的`set_suppress`设置为`true`，则它可以再主项目中被隐藏，只是`-h`时不显示，但仍然可以直接输入指令调用。

### Getting Argument and Subparser Instances

使用`.at<T>`获取`ArgumentParser`或`Argument`

```c++
/// 使用.at("--dir")获取Argument
program.add_argument("--dir");
program.at("--dir").default_value(std::string("/home/user"));

/// 使用.at<argparse::ArgumentParser>("walk")获取ArgumentParser
program.add_subparser(argparse::ArgumentParser{"walk"});
program.at<argparse::ArgumentParser>("walk").add_argument("depth");
```

### Parse Known Args

### Hidden argument and alias

### ArgumentParser in bool Context

### Custom Prefix Characters

### Custom Assignment Characters

## Further Examples

### choices

`.choices({"mehtod1", "mehtod2", "mehtod3"})`

:::warning
注意, 使用时好像有点问题, 只能放到最后, 否则会导致exe无法正常识别参数.
:::
