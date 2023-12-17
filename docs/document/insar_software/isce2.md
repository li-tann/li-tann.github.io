---
title: ISCE2
sidebar_position: 1
---

## WSL安装ISCE2

参考:

[InSAR处理环境安装配置—ISCE2+MintPy+PyAPS - 苏格拉一地的文章 - 知乎](https://zhuanlan.zhihu.com/p/497840105)

[Anaconda3 & isce2 - 挪挪的文章 - 知乎](https://zhuanlan.zhihu.com/p/269183148)

[Install ISCE-2 and MintPy - GitHub](https://github.com/yunjunz/conda_envs)

包管理工具可任意选择，anaconda / mambaforge / ... ，最重要是需要保证下载时网络顺畅。

### conda

anaconda, mambaforge, ...

### git clone

```shell
mkdir ~/tools;
cd ~/tools

# 如果不需要使用
mkdir isce2; cd isce2
mkdir build install src; cd src
git clone https://github.com/isce-framework/isce2.git

cd ~/tools
git clone https://github.com/yunjunz/conda_envs.git

# 顺带把MintPy, PyAPS, PySolid也下载了
git clone https://github.com/insarlab/MintPy.git 
git clone https://github.com/insarlab/PyAPS.git
git clone https://github.com/insarlab/PySolid.git
```

### conda install

```shell
conda create --name isce --yes
conda activate isce

cd ~/tools
mamba install --file conda_envs/insar/requirements.txt --file MintPy/requirements.txt isce2">=2.6.3" --yes

# MintPy, PyAPS, PySolid...
python -m pip install -e MintPy
python -m pip install -e PyAPS
export SETUPTOOLS_ENABLE_FEATURES="legacy-editable"
python -m pip install -e PySolid
```

### .bashrc setup

```shell
alias load_isce='conda activate isce; source ~/tools/conda_envs/insar/config.rc'

# conda_envc/gamma/里还有关于gamma环境配置说明, 有兴趣也可以参考
# 用conda创建并配置gamma的虚拟环境, 最后在.bashrc中生成load_gamma快捷指令
# "一键启动" GAMMA
```

### test

```shell
load_isce                # conda environment
topsApp.py -h            # test ISCE-2
smallbaselineApp.py -h   # test MintPy

load_tops_stack
stackSentinel.py -h      # test ISCE-2 stack
```

## 数据处理

### topsApp.py

DInSAR

### stackSentinel.py

Preprocessing of SBAS / PS-InSAR for Sentinel-1 data

#### 数据准备

准备SLC数据、精轨数据、DEM数据、以及辅助计算数据。分别存放到单独文件夹内。

##### sentinel-1

两种下载方式，一是[search.asf](https://search.asf.alaska.edu/)，二是[dataspace.copernicus](https://dataspace.copernicus.eu/browser)。

##### eof

可以使用sentineleof包（工具）下载sentinel-1数据对应的精轨文件

##### dem

使用dem.py工具下载对应的dem数据

##### aux_cal

辅助计算数据，可从[Calibration Auxiliary Data [AUX_CAL]](https://sar-mpc.eu/adf/aux_cal/)下载（貌似没有也没事...）

#### 脚本说明

stackSentinel.py 可以在当前地址生成run_files文件，包含了13个脚本文件，依次执行即可。

-s SLC数据的存放地址

-d DEM文件路径

-o 精轨文件存放地址

-b 'lat_min lat_max lon_min lon_max' 目标区域的经纬度范围

-a 辅助计算数据的存放地址

-c int 干涉对数？

-W 数据类型？

...
