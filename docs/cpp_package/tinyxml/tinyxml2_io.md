# TinyXML2 IO

>版权声明：本文为CSDN博主「唐朝的李白」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：[https://blog.csdn.net/yancola/article/details/93896148]

## 使用Tinyxml2创建XML

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

```c++
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

## 使用Tinyxml2解析XML

与tinyxml相似。

```c++
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

## 更新XML？

暂无
