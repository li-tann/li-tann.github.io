---
title: Crontab
custom_edit_url: null
last_update:
    author: li-tann
tags: [crontab, SCHTASKS]
---

# 定时启动任务

## linux

crontab

```shell
crontab -u [user_name] -l #查看当前已经设置的定时任务
crontab -u [user_name] -e #编辑定时任务
crontab -u [user_name] -r #删除所有定时任务
```

使用`-e`开启编辑模式后，在文件中编写任务即可

```shell
[minute] [hour] [day] [mouth] [weekend] [command] [pars] ...
```

格式说明：

- minute即分钟，可输入0~59；
- hour即小时，可输入0~23；
- day即日期，可输入0~31；
- mouth即月份，可输入1~12；
- weekend即星期几，可输入0~7，其中0和7均代表周日；

日期时间部分支持四种特殊字符`*`, `-`, `,`, `/`，用来实现更高级的功能

- `*`星号运算符，表示允许所有的值，`* * * * * command` 表示每分钟执行一次任务
- `-`连字符运算符，指定一个连续区间，`0 8 * * 1-5 command` 表示周一至周五每天8点执行一次
- `,`逗号运算符，指定一个离散区间，`0 8 * * 1,3,5 command` 表示周一、周三、周五的8点执行一次
- `/`斜杠运算符，代表步长，`1-10/2 8 */10 1 * command` 表示每月月初开始，每隔10天的8点执行任务，1~10分区间内每2分钟执行一次

设置完时间后之后，command pars...用于描述需要执行的任务，不在详细介绍

## windows

SCHTASKS

```shell
SCHTASKS /Create #创建新任务
SCHTASKS /Delete #删除指定任务
SCHTASKS /Query  #查询所有任务
SCHTASKS /?      #查看帮助
```

部分常用简写说明：

- /TN, task name   任务名称
- /TR, task run    任务的执行目标, 通常是脚本路径
- /SC, schedule    更新频率，后可接MINUTE、 HOURLY、DAILY、WEEKLY、MONTHLY等
- /ST, start time  任务启动时间
- /MO, modifier    修改计划类型
- ...

示例，创建一个名为GACOS_DATA_AUTOMATIC_DOWNLOAD的任务，任务执行时会启动一次auto_download.bat数据下载脚本，周期为每天早9点一次，

```shell
schtasks /Create /TN GACOS_DATA_AUTOMATIC_DOWNLOAD /TR E:\gacos_lutan1\auto_download.bat /ST 09:00 /SC DAILY /MO 1
```

删除该任务即可终止任务执行,

```shell
schtasks /Delete /TN GACOS_DATA_AUTOMATIC_DOWNLOAD
```
