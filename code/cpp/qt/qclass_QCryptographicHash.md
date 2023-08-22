# MD5码获取

md5码，个人理解，是一个加密码，同一个文件会生成唯一不重合的md5码。

使用情景：在写文件的监测功能时，需要保存检测过的历史信息，那么将检测文件夹的地址作为地址非常合适，但仅有一个问题：地址无法作为文件名保存。

所以就想到讲地址（QString）转换为md5码作为文件名保存。

## QCryptographicHash

Qt提供的QCryptographicHash类，有但不仅限于字符串转换为md5码的功能。

函数使用非常简单：

```C++
QString strToMd5(QString str)
{
    QByteArray qba = QCryptographicHash::hash(str.toLatin1(), QCryptographicHash::Md5);
    return qba.toHex();
}
```

将地址以QString字符串的形式输入函数，即可得到一个32位长度的md5码。

更多功能可以参考QtCreator的帮助文档。
