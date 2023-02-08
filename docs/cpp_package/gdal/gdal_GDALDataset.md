# GDALDataset

Dataset介绍（MEM格式数据）

## MEM

当代码需要使用GDAL频繁的创建临时数据并且无需输出时，将数据写到磁盘中，频繁的读写操作会降低代码的运行效率、并且大量的临时数据写入到磁盘中最后再被删除，长期积累也会对硬盘造成一定影响。

所以，需要使用GDAL提供的MEM数据格式，将生成的数据（GDALDataset格式）保存到内存中，既可以方便数据的读取、又能够减少硬盘的损耗，唯一的确定就是对内存要求更高。

GDAL的数据读取是使用GDALOpen等函数读写数据时，都需要输入数据的地址const char*  pszFilename`，使用GDAL提供的MEM数据存储格式，即可解决该问题。

使用gdal自带的gdalwarp对数据进行开窗、重采样处理，由于代码只支持整景影像的重采样，所以需要使用RasterIO(..)提取出窗口数据，保存在内存中，再传入gdalWarp进行重采样处理。

```C++
//代码回头在写............
GDALDataset* pSrcDS = (GDALDataset*)GDALOpen(pszSrcFile,GA_ReadOnly);
if(pSrcDS == nullptr){
    return -1;  //Error -1, "srcDataset's point is equal with nullptr
}
GDALDataType eDT = pSrcDS->GetRasterBand(1)->GetRasterDataType();
int iBandCount = pSrcDS->GetRasterCount();
int iSrcWidth = pSrcDS->GetRasterXSize();
int iSrcHeight = pSrcDS->GetRasterYSize();
void* arr;
//读取窗口数据
CPLErr e_cpl = pSrcDS->RasterIO(GF_Read, 0, 0, iSrcWidth, iSrcHeight, arr, iSrcWidth, iSrcHeight, GDT_Float64, iBandCount, ibands, 0, 0, 0);
sprintf_s(c_src_mem_path, 256, "MEM:::DATAPOINTER=%d,PIXELS=%d,LINES=%d,BANDS=%d,DATATYPE=%s", arr, iSrcWidth, iSrcHeight, iBandCount, GDALGetDataTypeName(eDT));
```

核心是MEM数据的写法，如下所示：

```c++
sprintf_s(c_src_mem_path, 256, "MEM:::DATAPOINTER=%d,PIXELS=%d,LINES=%d,BANDS=%d,DATATYPE=%s", arr, iSrcWidth, iSrcHeight, iBandCount, GDALGetDataTypeName(eDT));
```
