# 文件夹监控功能

QFileSystemWatcher是Qt自带的一个文件夹监控类，可以检测某一文件或者某一路径的文件变化情况。

监控文件夹，只能监控文件夹是否发生改变，无法监控具体的改变内容，需要再添加函数。

## .pro

```qmake
QT += core
```

## .h

```cpp
#include <QFileSystemWatcher>

class xxx
{
    ...
    QFileSystemWatcher fsWatcher;
}
```

## .cpp

```cpp
    //点击监控按钮，添加路径到fsWatcher中，或点击解除按钮，解除路径监控
connect(ui->pushButton_watcher,&QPushButton::clicked,this,[=](){
    if(ui->pushButton_watcher->text() == "监控"){
        fsWatcher.addPath(ui->lineEdit_path->text());

        ui->pushButton_watcher->setText("解除");
        ui->lineEdit_path->setEnabled(false);

    }else if(ui->pushButton_watcher->text() == "解除"){
        fsWatcher.removePath(ui->lineEdit_path->text());

        ui->pushButton_watcher->setText("监控");
        ui->lineEdit_path->setEnabled(true);

        ui->textEdit->clear();
    }
    });
//检测到目标文件夹dir发生变化时（发出directoryChanged信号），触发的槽函数
    connect(&fsWatcher,&QFileSystemWatcher::directoryChanged,this,[=](const QString str){
        QString tmp = QString("directory changed: \n%1").arg(str);
        ui->textEdit->append(tmp);
    });
//检测到目标文件file发生变化时（发出fileChanged信号），触发的槽函数
    connect(&fsWatcher,&QFileSystemWatcher::fileChanged,this,[=](const QString str){
        QString tmp = QString("file changed: \n%1").arg(str);
        ui->textEdit->append(tmp);
    });
```
