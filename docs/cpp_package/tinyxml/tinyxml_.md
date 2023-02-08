# TinyXML

这是个很小但又很常用的库，没有过多的内容所以不需要再创建子文件。

## 环境配置

tinyxml共有两个版本（tinyxml和tinyxml2）

tinyxml使用时将六个文件（2个.h 4个.cpp）加入到工程中即可调用。

tinyxml2则需要调用外部库的形式使用，但只需要添加一个.h和dll即可。

tinyxml2好像优化了代码以减少异常情况？

## 使用

### 首先设置根目录

```C++
TiXmlDocument doc(path);
//  path 为const char*类的路径
bool loadOK = doc.LoadFile();
if (!loadOK)
{
cout << "The file can't load correctly.\n" << "Error: " << doc.ErrorDesc() << endl;
}
TiXmlElement* Root = doc.RootElement();
//Root为xml的根目录
```

### 按名称查找

```C++
FirstChildElement()或FirstChildElement("…")
//不加名称时是子集中第一个元素
//加名称时是在子集中按名称查找相应元素
//例如：
TiXmlElement* tempElements = imageinfo->FirstChildElement("width");
int width = atoi(tempElements->GetText());
//得到结果为string  如需转换成int或double类型 需要对应使用atoi()和atof()两个函数

```

### 其他

其他还包括同级节的指针传递（nextSiblie..?）适合提取卫星状态矢量

提取节点的属性值

等功能，后续使用时再继续添加。
