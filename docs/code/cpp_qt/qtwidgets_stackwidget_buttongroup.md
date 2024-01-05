---
custom_edit_url: null
---

# stackWidget & buttonGroup

StackWidget搭配buttonGroup

## StackWidget

（草稿）

通常需要搭配buttonGroup按钮包和上下翻页按钮实现堆叠界面之间的切换。

界面切换时就需要...

## QButtonGroup

stackwidget堆叠界面常与buttonGroup搭配，通过点击button切换stackWidget的显示窗口。

设置button的`checkable`和`autoExclusive`为`true`，一个是使按钮可以点击后出现“下沉”的窗台，另一个是排他性，确保整组中选中一个按钮后，上一个被选中按钮的选中状态会被取消。
