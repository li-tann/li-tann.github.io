---
custom_edit_url: null
last_update:
    author: li-tann
tags: [Cpp, Qt]
---

# QNetWork下载文件

QNetworkAccessManager + QNetWorkRequest 实现数据下载，并且可以显示下载进度。

## 核心代码

首先在pro文件中, 添加

```qmake
QT += network
```

以可视化窗口为例，界面内有一个按钮和一个进度条，.h文件为：

```cpp
/// mainwindow.h
class mainwindow : public QMainWindow
{
    // ...
    QProgressBar* m_progressBar;
    QNetworkReply* m_reply;
    QNetworkAccessManager* m_manager;
}

```

示例代码中点击按钮后，开始执行数据下载任务，

```cpp
/// mainwindow.cpp
void on_xxx_clicked()
{
    m_manager = new QNetWorkAccessManager(this);

    /// 当获取文件(get)结束后(finished), 触发该函数并下载文件
    connect(m_manager, &QNetworkAccessManager::finished, this, [&](QNetWorkReply *reply){
        auto bytearray = reply->readAll();
        QFile file("download_filepath");
        if(file.open(QIODevice::WriteOnly)){
            file.write(bytearray);
            file.close();
        }
        reply->deleteLater();
    });
    /// 获取文件
    m_reply = manager->get(QNetworkRequest(QUrl("http://172.17.xxx.xxx:8080/index.xml")));

    /// 显示文件下载进度
    connect(m_reply, &QNetworkReply::downloadProgress, this, [&](qint64 bytesReceived, qint64 bytesTotal){
        m_progressBar->setMaximum(bytesTotal);
        m_progressBar->setValue(bytesReceived);
    });
}
```

