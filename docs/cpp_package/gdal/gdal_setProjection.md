# setProjection

为影像添加坐标系统

参考网址：[4326坐标系统字符串格式](https://spatialreference.org/ref/epsg/4326/html/)

```C++
/// 此处为了整齐 切了很多行, 实际使用时会报错，需要将所有字符修改到同一行中。
const char* projection = "GEOGCS[\"WGS 84\",
    DATUM[\"WGS_1984\",
        SPHEROID[\"WGS 84\",6378137,298.257223563,
            AUTHORITY[\"EPSG\",\"7030\"]],
        AUTHORITY[\"EPSG","6326\"]],
    PRIMEM[\"Greenwich\",0,
        AUTHORITY[\"EPSG","8901\"]],
    UNIT[\"degree\",0.01745329251994328,
        AUTHORITY[\"EPSG","9122\"]],
AUTHORITY[\"EPSG","4326\"]]";

GDALDataset::setProjection(projection);
```
