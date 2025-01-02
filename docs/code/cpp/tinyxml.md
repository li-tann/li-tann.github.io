---
custom_edit_url: null
last_update:
    author: li-tann
tags: [Cpp, Tinyxml]
---

# TinyXML

这是个很小但又很常用的库，没有过多的内容所以不需要再创建子文件。

## 环境配置

tinyxml共有两个版本（tinyxml和tinyxml2）

tinyxml使用时将六个文件（2个.h 4个.cpp）加入到工程中即可调用。

tinyxml2则需要调用外部库的形式使用，但只需要添加一个.h和dll即可。

tinyxml2好像优化了代码以减少异常情况?

## TinyXML1

### 首先设置根目录

```cpp
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

```cpp
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

## TinyXML2

转载自[在C++中使用tinyxml2解析和创建xml文件](https://blog.csdn.net/yancola/article/details/93896148)。

### 使用Tinyxml2创建XML

xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<school>
    <student Name="libai">stu</student>
    <teacher>
        <gender>man</gender>
    </teacher>
</school>
```

代码：

```cpp
tinyxml2::XMLDocument doc;
 
//1.添加声明
tinyxml2::XMLDeclaration* declaration = doc.NewDeclaration();
doc.InsertFirstChild(declaration);
 
//2.创建根节点
tinyxml2::XMLElement* root = doc.NewElement("school");
doc.InsertEndChild(root);
 
//3.创建子节点
tinyxml2::XMLElement* childNodeStu = doc.NewElement(“student”);
tinyxml2::XMLElement* childNodeTea = doc.NewElement(“teacher”);
tinyxml2::XMLElement* childNodeTeaGender = doc.NewElement(“gender”);
 
//4.为子节点增加内容
tinyxml2::XMLText* contentStu = doc.NewText(“stu”);
childNodeStu->InsertFirstChild(contentStu);
 
tinyxml2::XMLText* contentGender = doc.NewText(“man”);
childNodeTeaGender->InsertFirstChild(contentGender);
 
//5.为子节点增加属性
childNodeStu->SetAttribute("Name", "libai");
 
root->InsertEndChild(childNodeStu);//childNodeStu是root的子节点
root->InsertEndChild(childNodeTea);//childNodeTea是root的子节点
childNodeTea->InsertEndChild(childNodeTeaGender);//childNodeTeaGender是childNodeTea的子节点
 
//6.保存xml文件
doc.SaveFile(“school.xml”);
```

### 使用Tinyxml2解析XML

与tinyxml相似。

```cpp
tinyxml2::XMLDocument doc;
 
//1.加载xml文件
if(doc.LoadFile("school.xml") != 0) {
    return;
}
 
//2.找到根节点
tinyxml2::XMLElement* root = doc.RootElement();
if (xmlRoot == NULL) {
    return;
}
 
//3.获取子节点信息
tinyxml2::XMLElement* childNodeStu = root->FirstChildElement("student");
std::string contentStu = childNodeStu->GetText();
```

### 更新XML

暂无
