# QThread 多线程

QT 多线程类的应用

## 传统的多线程 class QThread

以QThread为基类创建一个专门用于多线程的类。

```C++
class thread_work : public QThread
{
    Q_OBJECT
 public:
    thread_work(QObject *parent = nullptr);
    void run();

signals:
    // ...

public slots:
    // ...
}   
```

将多线程处理的函数放到`run()`中

通过`QThread::start()`开启线程处理

通过`QThread::terminate()`+`QThread::wait()`提前结束线程。（参考Qt手册QThread::terminate()部分）

## 新版多线程 moveToThread

（待补充）

与传统的多线程相比，新方法的好处是对原代码的改动很小，但在实际使用时，出现过不太好用的情况（不排除是自身原因...）
