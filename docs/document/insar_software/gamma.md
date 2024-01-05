---
title: GAMMA
sidebar_position: 0
custom_edit_url: null
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

> 注: `${CONDA_PREFIX}`, `${GAMMA_HOME}`等都包含在config.rc文件中，所以需要先执行
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

列举几种常见的数据处理流程。

### 数据导入

#### ALOS/ALOS2

ALOS/ALOS2 level 1.1 CEOS格式的数据导入很简单, 调用`par_EORC_PALSAR`指令即可。

```shell
par_EORC_PALSAR <CEOS_leader> <SLC_par> <CEOS_data> [SLC]

# <CEOS_leader> 对应头文件, 命名格式为LED...
# <SLC_par> 转换后的参数文件, 通常设置为"date.slc.par"
# <CEOS_data> 对应数据文件, 命名格式为IMG..., 存在IMG-HH和IMG-HV两种数据, 根据需求选择其一
# [SLC] 转换后的数据文件, 通常设置为"date.slc"
```

### 配准>>>干涉

准备好一组干涉数据, 如master.slc, master.slc.par, slave.slc, slave.slc.par

#### 主辅影像配准

首先需要对主辅影像进行配准, 配准流程为,

1. 使用`create_offset`指令, 创建主辅影像的偏移量文件;
2. 使用`init_offset_orbit`或`init_offset`指令, 计算初始偏移量(仅计算单点偏移量, 获取偏移量系数的常数项信息);
3. 使用`offset_pwr`或`offset_SLC`指令, 计算主辅影像同名点的坐标信息;
4. 使用`offset_fit`指令, 基于主辅影像同名点的坐标信息进行多项式拟合, 得到主辅影像的偏移量的多项式系数

```shell
create_offset <SLC1_par> <SLC2_par> <OFF_par> [algorithm] [rlks] [azlks] [iflg]

# <SLC1_par> 
# <SLC2_par>
# <OFF_par>
# [algorithm]
# [rlks]
# [azlks]
# [iflg]
```

create_offset指令说明

```shell
init_offset_orbit
```

init_offset_orbit指令说明

```shell
offset_pwr
```

offset_pwr指令说明

```shell
offset_fit
```

offset_fit指令说明

通过`grep poly mas-sla.off`可以快速查看配准偏移量的多项式系数

#### 辅影像重采样

#### 主辅影像干涉

(干涉完记着多视)

### 生成DSM

去平地、滤波、解缠、相高转换等

### 地理编码

create_dem_par, replace_values, interp_ad, gc_map, geocode, create_diff_par, init_offsetm, offset_pwrm, offset_fitm, gc_map_fine, geocode_back等等

### 差分干涉

介绍去除地形相位后解缠以及 解缠后再去除地形相位等方法
