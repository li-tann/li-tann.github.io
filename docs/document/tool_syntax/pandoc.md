---
custom_edit_url: null
---

# Pandoc

pandoc指令

## 确认是否可以使用

```cmd
pandoc -v
```

查看pandoc版本号，检验pandoc是否可以正常使用。

## md 转 docx

`pandoc -s *.md -o *.docx`

不确定-s -o能否应用于其他类型的转换

例如：

```cmd
pandoc C:\Users\lenovo>pandoc -s D:\OneDrive\exam\file\in.md -o D:\OneDrive\exam\file\out.docx
```

## docx 转 md

带图像的docx文件转换到markdown的方法如下:

`pandoc -f docx -t markdown --extract-media ./images -o *.md *.docx`

word文档中的图片会被存放到./images路径下。
