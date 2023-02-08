# 正则表达式

regex正则表达式语法

## 正则表达式规则

[]: 字符集，可存放**多个字符**

{}: 计数，表示字符/字符集**次数**

(): 子模式，改变**优先级**，对一块区域整体性操作

^ :起始字符；若在[]中则表示否定

$ :终止字符

\| :或

### 字符集

. : 任意一个单字符

\d: 一个十进制数字

\l: 一个小写字母

\s: 一个空白符（空格、制表符等）

\u: 一个大写字母

\w: 一个字母（a-zA-Z）或数字（0~9）或下划线（_）

\D: 除了\d之外的其他字符

\L: 除了\l之外的其他字符

\S: 除了\s之外的其他字符

\U: 除了\u之外的其他字符

\W: 除了\w之外的其他字符

[abc] 表示字符串包含"a"、"b"、"c"任意一项

[a-z] 表示字符串中包含a~z中的任意一项

[a-zA-Z0-9] 表示字符串中包含包含有大小写不限的字母和数字

### 计数（重复）

{n}:  字符/字符集严格重复n次

{n,}: 字符/字符集至少重复n次

{n,m}:字符/字符集至少重复n次，最多重复m次

*: {0,} 不存在或存在任意次数均满足条件

+: {1,} 存在且只撒后出现1次满足条件

?: {0,1}不存在或仅存在1次满足条件

### 子模式

  为了指定模式中的子模式，用括号将其括起来

(\d*:)?(\d+)：它表示字符串前半部分可以为空，若非空，则是任意长度的数字后接一个冒号，后半部分是一个或多个数字的序列。

### 常用的正则表达式

整数:

```C++
"^[-|+]?[0-9]+$"
```

非负整数：

```C++
"^\\d+$"
```

浮点数

```C++
"^(-?\\d+)(\\.\\d+)?$"　
```

由26个英文字母组成的字符串

```C++
"^[A-Za-z]+$"
```

年-月-日

```C++
"^(d{2}|d{4})-((0([1-9]{1}))|(1[0-2]))-(([0-2]([1-9]{1}))|(3[0|1]))$"
```

### 贪婪与非贪婪

正则表达式默认是趋向于最大长度的匹配，即贪婪模式，对于字符串`string("gitbook isn't a book")`和匹配规则`"git.*book"`,贪婪模式下得到的结果为`"gitbook isn't a book"`;

而在计数符（量词）后直接加一个问号`？`，即为非贪婪模式。`git.*?book`，非贪婪模式下得到的结果为`"gitbook"`

## std::regex

regex使用的正则表达式语言是ECMAScript

### 代码示例

函数判断是否为string是否为数字：

```C++
bool isnum(std::string str)
{
    bool bInt, bFloat;
    std::regex reg_integer("^[-|+]?\\d*$");
    std::regex reg_float("^[-|+]?\\d+\\.\\d*$");
    std::smatch results;

    //bInt = std::regex_match(str, reg_integer);
    bInt = std::regex_search(str, results, reg_integer);
    if (bInt)
        return bInt;
    //bFloat = std::regex_match(str, reg_float);
    bFloat = std::regex_search(str, results, reg_float);
    return bFloat;
}
```

代码中results为返回的匹配的字符串，但未使用。

`std::regex_search(seq, m, r, mft)`函数中,

`seq`可以是一个string、一个表示范围的一对迭代器以及一个指向空字符结尾的字符数组的指针；

`m`是一个macth对象，用来保存匹配结果的相关细节。m和seq必须具有兼容的类型；

（smatch表示string类型的输入序列，cmatch表示字符数组序列，wsmatch表示宽字符串（wstring）输入，wcmatch表示款字符数组）

`r`是一个正则表达式；

`mft`是一个可选的regex_constants::match_flag_type值，详见C++Primer（第5版）659页。
