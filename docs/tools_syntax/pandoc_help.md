# pandoc

pandoc使用帮助

首先确定在cmd中输入“pandoc -v”可以正常显示pandoc版本号，证明pandoc可以正常使用。

## 格式转换

- \*.md  转 \*.docx

>pandoc -s \*.md -o \*.docx(不确定-s -o能否应用于其他类型的转换)
>
>pandoc C:\Users\lenovo>pandoc -s D:\OneDrive\exam\file\in.md -o D:\OneDrive\exam\file\out.docx
