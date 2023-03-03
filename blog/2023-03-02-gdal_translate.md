---
title: gdal_translate去除编码影像黑边
authors: li-tann
tags: [gdal, gdal_translate]
---

地理编码后影像的四个角点一般都有“黑边”(对于float以上数据，显示为NoData，值为NAN)，在arcgis中显示时非常影响观感，需要消除。

使用gdal_translate.exe工具，可以有效消除“黑边”，命令如下：

`gdal_translate.exe img_input.tif img_output.tif -a_nodata 0`

该命令可以将img_input.tif中所有值为`NoData`的值转换为`0`，并且为影像添加数据`NoData Value=0`，

转换完成后，再次使用arcmap加载该影像，即可得到无“黑边”的地理编码后影像。

但使用GDAL库的方式还没有成功，有机会再继续补充
