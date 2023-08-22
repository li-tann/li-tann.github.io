# UML类图

## 常见定义

### 抽象类

抽象类，对应C++接口。

> [C++接口(抽象类) | 菜鸟教程](https://www.runoob.com/cplusplus/cpp-interfaces.html)
>C++ 接口是使用抽象类来实现的，抽象类与数据抽象互不混淆，数据抽象是一个把实现细节与相关的数据分离开的概念。
>如果类中至少有一个函数被声明为**纯虚函数**，则这个类就是抽象类。
>设计抽象类（通常称为 ABC）的目的，是为了给其他类提供一个可以继承的适当的基类。抽象类不能被用于实例化对象，它**只能**作为接口使用。

## 类之间的关系

## 泛化关系(generalization)

泛化关系与实现关系均都属于类的继承。

泛化是继承非抽象类，区别于实现关系（继承抽象类），使用**空心三角箭头+实线**表示。

不太严谨的栗子：小汽车在现实中有实现，是一个可实例化的对象（区别于不可实例化的抽象类），SUV继承小汽车，则小汽车与SUV之间为泛化关系。

## 实现关系(realize)

泛化是继承抽象类，区别于泛化关系（继承非抽象类），使用**空心三角箭头+虚线**表示。

## 聚合关系(aggregation)

聚合关系表示实体与对象之间的关系，表示整体由部分构成的语义，使用带**空心菱形箭头+实线**表示。A聚合到B上，也可描述为B由A组成。

区别于组合关系，聚合关系中整体和部分不是强依赖的，即整体不存在了，部分仍然可以存在。

例如：一个部门由多个员工组成，部门撤销但员工依然存在。

在代码中，可能可以理解为指针调用的关系。主体的删除不会影响个体？

## 组合关系(composition)

组合关系同样表示实体与对象之间的组合关系，但用于描述强依赖的特殊聚合关系，使用**实心菱形箭头+实线**表示。

在代码中，可能可以理解为，class中的实例化对象，当类析构时类中的实例化对象也被删除。

## 关联关系(association)

关联关系不同类的对象之间的结构关系，使用**实线**表示。

它是一种静态关系， 通常与运行状态无关，一般由常识等因素决定的；它一般用来定义对象之间静态的、天然的结构； 所以，关联关系是一种“强关联”的关系。 **（没看懂）**

关联关系默认不强调方向，表示对象间相互知道。当特别强调方向时，使用**带箭头的实线**表示。

在最终代码中，关联对象通常是以成员变量的形式实现的。

## 依赖关系(dependency)

区别于关联关系，依赖关系时一种临时性的关系，产生于运行期间，运行状态的变化可能会导致依赖关系的变化，使用**带箭头的虚线**表示。

依赖关系有方向，但应该尽量保持单向依赖，避免双向依赖的情况发生。

代码中，<ins>依赖关系体现为类构造方法及类方法的传入参数，箭头的指向为调用关系；依赖关系除了临时知道对方外，还是“使用”对方的方法和属性；</ins>

## 图示

![UML类图](./pics/uml_class_struct.jpg)

引用自[图说设计模式](https://design-patterns.readthedocs.io/zh_CN/latest/index.html)。

图中，

- 车是一个抽象类，在UML类图中使用\<\<abstract\>\>表示；
- 小汽车和自行车是车的继承类，他们之间属于实现关系，在UML类图中使用**空心三角形箭头+虚线**表示；
- **SUV**是**小汽车**的继承类，他们之间属于泛化关系，在UML类图中使用**空心三角箭头+实线**表示；
- 学生与班级...
- 发动机、轮胎与小汽车...
- 学生与身份证...
- 学生与自行车...