---
title: 学习笔记
sidebar_position: 0
---

## 环境配置

参考[yunjun's conda_envs](https://github.com/yunjunz/conda_envs) /gamma/README.md

简述：

1.通过conda或mamba创建gamma环境

```shell
conda create --name gamma
conda activate gamma
```

2.使用requirements.txt一键下载gamma依赖环境

```shell
mamba install --yes --file ~/tools/conda_envs/gamma/requirements.txt
```

3.链接libgdal.so.20

```shell
ln -s ${CONDA_PREFIX}/lib/libgdal.so ${GAMMA_HOME}/lib/libgdal.so.20
```

> 注: ${CONDA_PREFIX}, ${GAMMA_HOME}等都包含在config.rc文件中，所以需要先执行
> ```shell
> source ~/tools/conda_envs/gamma/config.rc
> ```

4.通过`load_gamma`指令快速启动gamma环境

在~/.bashrc文件中添加一行指令即可

```shell
alias load_gamma='conda activate gamma; source ~/tools/conda_envs/gamma/config.rc'
```

最后使用`source ~/.bashrc`更新环境后，即可通过load_gamma切换到gamma环境。

## 指令学习

## DISP(Display)

数据显示模块
