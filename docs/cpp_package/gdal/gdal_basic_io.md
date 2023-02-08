# GDAL 基本读写功能

GDAL基本读写功能

## read

```c++
int image_read(const char* imgpath)
{
    /// 加载所有注册器
    GDALAllRegister();
    /// 是否支持读取utf8路径
    CPLSetConfigOption("GDAL_FILENAME_IS_UTF8", "NO");

    /// 读取文件到
    GDALDataset* p_src_ds =  (GDALDataset*)GDALOpen(imgpath, GA_ReadOnly);

    if(p_src_ds == nullptr){
        return -1;
    }

    int img_width = p_src_ds->GetRasterYSize();
    int img_height= p_src_ds->GetRasterXSize();

    /// 以complex<float>格式的数据为例
    std::complex<float>* c_float_arr = new std::complex<float> [size_t(img_width) * size_t(img_height)];

    CPLErr cpl_err;
    cpl_err = p_src_ds->RasterIO(GF_Read,0,0,img_width,img_height,c_float_arr,img_width,img_height,GDT_CFloat32,1,panBandMap,0,0,0);

    if(cpl_err > 1){
        return -2;
    }

    /// 如果没有报错说明影像已经读取到数组中
    /// 如何使用不在赘述
}
```

## read-write

```c++
int image_read(const char* imgpath)
{
    /// 加载所有注册器
    GDALAllRegister();
    /// 是否支持读取utf8路径
    CPLSetConfigOption("GDAL_FILENAME_IS_UTF8", "NO");

    /// 读取文件到
    GDALDataset* p_src_ds =  (GDALDataset*)GDALOpen(imgpath, GA_ReadOnly);

    if(p_src_ds == nullptr){
        return -1;
    }

    int img_width = p_src_ds->GetRasterYSize();
    int img_height= p_src_ds->GetRasterXSize();

    /// 以complex<float>格式的数据为例
    std::complex<float>* c_float_arr = new std::complex<float> [size_t(img_width) * size_t(img_height)];

    /// 指读取顺序
    int panBandMap[3] = { 1,2,3 };

    CPLErr cpl_err;
    cpl_err = p_src_ds->RasterIO(GF_Read,0,0,img_width,img_height,c_float_arr,img_width,img_height,GDT_CFloat32,1,panBandMap,0,0,0);

    if(cpl_err > 1){
        return -2;
    }

    /// 创建驱动
    GDALDriver* p_dst_driver = GetGDALDriverManager()->GetDriverByName("GTiff");
    /// 通过驱动创建数据层
    GDALDataset* p_dst_ds = p_dst_driver->Create("./tmp/phase.bmp",img_width,img_height,1,GDT_CFloat32,nullptr);

    /// 举例，将c_float_arr的数据写到新文件中。
}
```
