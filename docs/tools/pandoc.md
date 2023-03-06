# pandoc

pandoc指令

## 确认是否可以使用

```cmd
pandoc -v
```

查看pandoc版本号，检验pandoc是否可以正常使用。

## md 转 docx

`pandoc -s \*.md -o \*.docx`

不确定-s -o能否应用于其他类型的转换

例如：

```cmd
pandoc C:\Users\lenovo>pandoc -s D:\OneDrive\exam\file\in.md -o D:\OneDrive\exam\file\out.docx
```
