# chrono

c++的计时功能

## 代码

```c++
auto start = std::chrono::system_clock::now();
/// 一个费时的函数
func();
auto end = std::chrono::system_clock::now();
auto duration = std::chrono::duration_cast<std::chrono::microseconds>(end - start);
cout <<  "Spent" << double(duration.count()) * std::chrono::microseconds::period::num / std::chrono::microseconds::period::den << " seconds." << endl;
```

此方法可以精确到微妙，如花费了0.123456秒

num 和 den分别表示分子(numerator)和分母(denominator),在上面的代码中，num=1， den=1,000,000

count( ) 用来返回时间

C++11的 #include< chrono >和传统的 #include < ctime >相比，代码量较多，但是精度也更高

## chrono::time_point -> string

``` c++
auto tp = std::chrono::system_clock::now(); // time_point
time_t time = std::chrono::system_clock::to_time_t(tp);
std::stringstream ss;
ss << std::put_time(std::localtime(&time), "%Y-%m-%d %H:%M:%S");

std::string str = ss.str();
```

首先通过`to_time_t`将`time_point`转换为`time_t`，然后使用`std::localtime()`将`time_t`转换为`tm`，再使用`put_time()`将`tm`转换为指定输出格式的`_TimeObj`，存储到`stringstream`中，最后通过`stringstream::str()`转换为string。

如果使用`tm`存储时间数据，则可以直接使用`put_time`将时间转换为字符串。

## put_time & get_time

按照指定格式输出和获取时间

参考资料：
[get_time](http://www.bytekits.com/cppstdlib/cppstdlib-get-time.html)

[put_time](http://www.bytekits.com/cppstdlib/cppstdlib-put-time.html)

put_time的链接中包含了支持的各种格式说明，同样适用于get_time

例如：
说明符 |  替换 | 示例
 :---: | :---: | :---:
%y|年份，最后两位数字（00-99）|01
%Y|年份，四位数字|2001
%m|月份的十进制数（01-12）|08
%M|分钟（00-59）|56
%d|月份中的某一天，用零填充（01-31）|23
%D|MM/DD/YY日期的简写，相当于％m/％d/％y|08/23/19
%F|YYYY-MM-DD日期的简写，相当于％Y-％m-％d
...|...|...

### get_time 样例(含put_time)

```c++
std::tm t = {};
std::istringstream ss("2011-Februar-18 23:12:34");
ss.imbue(std::locale("de_DE.utf-8"));
ss >> std::get_time(&t, "%Y-%b-%d %H:%M:%S");

if (ss.fail())
  std::cout << "Parse failed\n";
else
  std::cout << std::put_time(&t, "%c") << '\n';
```

copy from CMake Cookbook 3.7章节

```c++
// copy from CMake Cookbook 3.7章节
std::chrono::time_point<std::chrono::system_clock> start, end;
std::chrono::duration<double> elapsed_seconds;
std::time_t end_time;
start = std::chrono::system_clock::now();
// ...
end = std::chrono::system_clock::now();
// Report times
elapsed_seconds = end - start;
end_time = std::chrono::system_clock::to_time_t(end);
std::cout <<"matrices allocated and initialized"
          <<std::put_time(std::localtime(&end_time),"%a %b %d %Y %r\n")
          <<"elapsed time: "
          <<elapsed_seconds.count()<<"s\n";

// cmd打印内容
// matrices allocated and initialized Sun Jun 17 2018 11:04:20 AM
// elapsed time: 0.0492328s
```

