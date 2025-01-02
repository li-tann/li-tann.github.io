---
custom_edit_url: null
last_update:
    author: li-tann
tags: [数据结构, 设计模式, 单例]
---

# Section.1 单例模式

[单例模式url](https://www.cnblogs.com/leaves1024/p/10985599.html)

## 单例模式有三个关键点

1. 单例类只能有一个实例。

    为此，单例类只能提供私有的构造函数，即保证不能随意创建该类的实例。

2. 单例类必须自己创建自己的唯一实例。

    因为构造函数是私有的，其他对象不能创建单例类的实例，只能是单例类自己来创建。

3. 单例类必须给所有其他对象提供这一实例。

    外界需要获取并使用这个单例类的实例，但是由于该类的构造函数是私有的，外界无法通过new去获取它的实例，那么就必须提供一个静态的公有方法，该方法创建或者获取它本身的静态私有对象并返回。

## 单例模式有两种实现方式：

- 懒汉式：故名思义，懒汉很懒只有饿了才会去找吃的。也就是说，只有在需要使用的时候才会去实例化。

- 饿汉式：饿了肯定要饥不择食。在单例类定义的时候就进行实例化。

## code

### 懒汉版

```cpp
//Singleton.h
#pragma once

class Singleton {
public:
    static Singleton* getInstance();

private:
    Singleton();
    Singleton(const Singleton&);
    Singleton& operator=(const Singleton&);

    static Singleton* instance_;
};

//Singleton.cpp
#include <iostream>
#include "Singleton.h"

Singleton* Singleton::instance_ = NULL;

Singleton::Singleton() {
}

Singleton::Singleton(const Singleton&) {
}

Singleton &
Singleton::operator=(const Singleton&) {
}

Singleton *
Singleton::getInstance() {
    if (NULL == instance_) {
        instance_ = new Singleton();
    }

    return instance_;
}
```

1. 默认构造函数是私有的，外部不能进行单例类的实例化；

2. 拷贝构造函数和赋值运算符也是私有的，以禁止拷贝和赋值；

3. 具有一个私有的静态成员指针 instance_，指向唯一的实例；

4. 提供一个公有的静态成员函数用于返回实例，如果实例为NULL，则进行实例化。

- (如果有两个线程同时获取单例类的实例，都发现实例不存在，因此都会进行实例化，就会产生两个实例都要赋值给instance_，这是严重的错误。为了解决这个问题，就要考虑加锁。)

