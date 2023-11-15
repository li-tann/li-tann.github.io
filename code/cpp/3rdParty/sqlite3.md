# sqlite3

sqlite3 是一个基于c/c++实现的轻量级数据库，对环境依赖非常小，所以常应用于嵌入式开发（与该文档无关）。

gdal也使用了sqlite3库。

## 主要函数

打开数据库文件，如果没有则会自动创建，

`int sqlite3_open(const char *filename,sqlite3 **ppDb)`

关闭数据库文件，

`int sqlite3_close(sqlite3*)`

数据库的执行命令, 指定数据库，输入执行语句，根据实际执行名命令编写回调函数，执行，

`int sqlite3_exec(sqlite3* db, const char *sql, callback, void *, char **errmsg)`

> 该命令是执行数据库相关操作的主要命令。
> sql的写法即为数据库查添删改等操作的语法。
> 回调函数一定要写返回值，否则再次调用时会报错。

释放内存，通常用于每次exec结束后，释放存储错误信息的`errmsg`字符串

`sqlite3_free(void*)`

## 回调函数

回调函数可以根据实际情况编写对应回调函数。

在GUI程序中，每次程序启动前需要查询数据库，读取所有的NAME字段并填写到comboBox中。它的回调函数为：

```cpp
int MainWindow::callback_widget_init(void *data, int argc, char **argv, char **azColName)
{
    Q_UNUSED(data);
    QString qstr_info;
    if(argc < 1){
        return 0;
    }
    QStringList callback_qstringlist;
    for(int i=0; i<argc; i++){
        callback_qstringlist.append(argv[i]);
    }

    static_minwindow->ui->comboBox->addItems(callback_qstringlist);
    return 0;
}    
```

## 注意事项

回调函数callback可以根据实际使用场景分类，编写各自的回调函数。

回调函数为静态函数，如果在类中声明和定义回调函数，在回调函数内调用类中其他函数时需要该类为静态类。

解决方法：
在类中声明一个该类的静态类，在cpp中对该类定义（nullptr即可）。

```cpp
/// myClass.h
class myClass
{
    ...
    static int callback(void *data, int argc, char **argv, char **azColName);

    static myClass* static_myClass;

    void func();
}
```

```cpp
/// myClass.cpp
myClass myClass::static_myClass = nullptr; //很重要
int myClass::callback(void *data, int argc, char **argv, char **azColName)
{
    ...
    func();
}
```
