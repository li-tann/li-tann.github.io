---
title: GDAL_Tools 有感
authors: li-tann
tags: [GDAL]
---

简单过了一遍[GDAL_Tools](https://github.com/li-tann/GDAL_Tools)里的所有功能，才想起这个项目的初衷是学习GDAL库中的函数，API，... 但渐渐的变成了自己写基于GDAL的RasterIO读取影像，自写算法进行数据处理的相关功能的集散地...

所以呢，有个想法，

为了让这个项目重回正轨，打算将项目重构（唉，又是一次重构...），把算法类的功能拆分成一个新的项目，GDAL_Tools内只保留基于GDAL API的相关功能

新模块就叫"SAR_Image_Processing_Tools"吧...很土的名字...

立blog为据，防止忘记
