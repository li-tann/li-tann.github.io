---
custom_edit_url: null
last_update:
    author: li-tann
tags: [Cpp, Qt]
---

# QString功能

QString的转码功能介绍

## QString的转码功能

- 转码的一些个人经验：暂时先写到这里，等有空了再转移到cpp中

以我在windows系统下运行的chatSAR_sub_projs工程的控制台程序为例，QtCreator的默认文本显示方式为utf-8，

通过交互式的控制台输入进去的中文，是gb2312格式（与windows系统相同），而在QtCreator的.h/.cpp页面中写入的中文，是utf-8格式（与IDE相同），而程序中使用glog做日志记录文件，生成的日志文件则是utf-8格式。

### 1.fromlocal8bit(GB2312)->toUtf8

在交互式控制台输入的中文string，如果想要正常保存到utf-8格式的日志文件中：则需要先从系统的编码格式转成Qt的编码格式`QString qstr = QString::fromLocal8bit(str.c_str())`,然后再转换成utf-8格式`LOG(INFO)<<qstr.toUtf8().data()`;

### 2.utf8->tolocal8bit(GB2312)

如果想要控制台正常的显示在IDE中写入的中文，就需要从utf-8编码格式转换到GB2312(local8bit)。即以以下方式输出：`printf("%s\n",QString("中文").toLocal8Bit().data())`

### unicode()->?

通过查询资料可知，QString是使用Unicode编码格式存储信息的，所以，手写输入的中文数据可以先写入到QString中，再根据需要转换为gb2312或者是utf-8。

```cpp
QString test = "中文";
printf(%s\n",test.toLocal8Bit().data());
LOG(INFO)<<test.toUtf8().data()<<"\n";
```

## QString的查找功能
