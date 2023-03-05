# filesystem 文件系统

c++17支持的文件系统库

## C++版本要求

C++17

以VisualStudio IDE为例，需要在

>\<属性\>--\<常规\>--\<C++语言标准\>

处设置C++语言标准。

## 介绍

```C++
#include <filesystem>

// namespace: std::filesystem
std::string root_path;
std::filesystem::path fs_path(root_path);
bool ans;
std::string str_path = fs_path.string(); //路径转字符串
ans = fs_path.is_directory();  //文件夹
ans = fs_path.is_regular_file();   //文件
std::filesystem::path fs_parentpath = fs_path.parent_path(); //文件的路径

std::filesystem::path filename = fs_path.filename(); //文件名
std::filesystem::path extension = fs_path.extension(); //拓展名（后缀）


for (auto& iter : directory_iterator(root_path))
{
    //查看当前路径下的所有文件/文件夹
}

for (auto& iter : recursive_directory_iterator(root_path))
{
    //迭代查看当前路径及子文件内的所有文件/文件夹
}

```

## 代码参考

遍历文件夹，输出SUMMARY.md的程序。

generate_summary_markdown.exe
