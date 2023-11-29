---
title: packages
---

## elevation

DEM下载工具 (需要有GNU make)

安装: pip install elevation

下载数据:

```shell
eio clip -o name.tif --bounds left down right top
```

可选的下载数据类型:

```shell
eio --product [SRTM1|SRTM3|SRTM1_ELLIP] clip -o name.tif --bounds left down right top
```

clip指令的自选项:

- -o, --output PATH     DEM的地址, 默认值为“out.tif”, 已存在文件会被覆盖
- --bounds FLOAT...     DEM的范围, 顺序为左, 下, 右, 上
- -m, --margin TEXT     Decimal degree margin added to the bounds. Use '%' for percent margin.  [default: 0]
- -r, --reference TEXT  使用GDAL/OGR的数据的范围代替bounds的边界

## sentineleof

Tool to download Sentinel 1 precise/restituted orbit files (.EOF files) for processing SLCs

下载Sentinel-1的EOF精轨数据

但还没开始使用...
