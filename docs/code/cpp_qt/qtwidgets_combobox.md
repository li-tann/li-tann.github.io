---
custom_edit_url: null
---

# QComboBox

QComboBox的一些用法

## 修改comboBox的可选状态

适用于输入或不输入某些附加条件时，与之相关联控件（此处单是ComboBox）的是否可以被选择设置。

```cpp
//  void setItemData(int index, const QVariant &value, int role = Qt::UserRole);
/// QVariant(0) 为不可选中状态
ui->comboBox->setItemData(2,0,Qt::UserRole -1);
/// QVariant(-1) 为可选中状态
ui->comboBox->setItemData(2,-1,Qt::UserRole -1);
```

## 修改ComboBox的显示项

适用于输入或不输入某些附加条件时，与之相关联控件此处单是ComboBox的显示与隐藏设置。

```cpp
QListView *view = qobject_cast<QListView *>(ui->comboBox->view());
// 设置第三行内容隐藏
view->setRowHidden(2,true);
// 设置第三行信息显示
view->setRowHidden(2,false);
```
