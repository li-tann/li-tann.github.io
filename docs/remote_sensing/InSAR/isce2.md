# ISCE2学习与使用

## WSL安装ISCE2

### wsl 配置 clash

在clash for windows的主页，勾选允许局域网，并确定自己的ip号以及端口（通常是7890）

在wsl的~/.bashrc中填入一些四行信息(修改为自己的ip以及端口号)

export http_proxy='http://192.168.3.93:7890'
export https_proxy='http://192.168.3.93:7890'
export all_proxy='socks5://192.168.3.93:7890'
export ALL_PROXY='socks5://192.168.3.93:7890'

source ~/.bashrc

使用`wget www.google.com`, 查看返回信息以确定是否可以正常使用clash

### anaconda install isce2

在两台笔记本上使用anaconda的安装, 第一台成功，第二台总是在卡在sloving environment: /Killed，遂选用网上的另一种miniforge方式并安装成功

#### anaconda

参考: [Anaconda3 & isce2 - 挪挪的文章 - 知乎](https://zhuanlan.zhihu.com/p/269183148)

主要流程包括：(先写个大纲，后面再补充详细内容)

1. 安装anaconda
2. 配置基本环境(conda create --name isce2_env python=3.8)
3. 安装isce2依赖环境(conda install isce2)
4. git下载isce2包
5. 修改PATH，测试使用

2023-06-20 补充, 后发现使用anaconda安装的环境, 无法正常使用isce2.

#### miniforge

参考:
[InSAR处理环境安装配置—ISCE2+MintPy+PyAPS - 苏格拉一地的文章 - 知乎](https://zhuanlan.zhihu.com/p/497840105)
[Install ISCE-2 and MintPy - GitHub](https://github.com/yunjunz/conda_envs)

## 数据处理
