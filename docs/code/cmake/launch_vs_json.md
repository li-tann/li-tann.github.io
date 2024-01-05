---
title: VisualStudio
custom_edit_url: null
---

# CMake + Visual Studio 设置传入参数

关键文件: `launch.vs.json`

## 打开launch.vs.json文件

打开方法有很多：

可以直接在`.vs`文件中找到该文件；

也可以对目标可执行文件右键，选择**添加调试设置**，选择默认调试类型，即可打开`launch.vs.json`文件并为目标可执行文件创建一个默认的参数设置列表；

又或者，对任意Cpp右键，点击“打开和启动设置”按钮，同样可以切换到`launch.vs.json`里，但不会创建一条新的参数设置列表。

默认参数的设置：

## 添加传入参数

launch.vs.json格式如下所示：

```json
{
  "version": "0.2.1",
  "defaults": {},
  "configurations": [
    {
      "type": "default",
      "project": "build\\Debug\\bin\\app_script.exe",
      "projectTarget": "",
      "name": "app_script_ldsar_to_sarbox",
      "args": [
        "D:\\_sarbox\\note\\scripts\\landsar_to_sarbox.script.json"
      ]
    }
  ]
}
```

`configurations`是一个单位为object对象的数组，每一个对象都是一个“传入参数的设置”。

每个对象里，

`type`,表示调试类型, 一般使用default即可;

`project`, 输入需要传入参数的可执行文件的地址, 以最外层的CMakeLists.txt所在地址写起即可;

`projectTarget`, 不太清楚有啥用, 但空着也没事;

`name`, 在可选的调试列表中显示的名称;

`args`, 传入的参数, 是一个数组, 与project不同, 这里需要输入参数如果是地址, **不能**从最外层的CMakeLists.txt所在地址写起;

修改好信息后, 保存该文件后, 在可选的调试列表中将会更新该信息。

## 注意事项

1.选则这里的调试功能进行调试时, 工程将不会编译, 当最新代码与exe存在一定差异时, 断点功能将不会被启用;

2.后续再补充...
