---
custom_edit_url: null
---

# 强度影像的拉伸

等比缩放

把float格式的强度图转换为8bit影像时，受强度图噪声影像，等比缩放强度图数值时，其中的有效信息会被压缩到非常小的范围，从而导致生成的8bit图视觉效果时一片漆黑或一片空白。

以`power.tif`图为例

## 百分比拉伸

### code

```cpp
int gdt_float32_img_convert_to_gdt_byte(const char* src_imgpath, const char* dst_imgpath,size_t histgram_size, double stretch_rate)
{
    auto start = std::chrono::system_clock::now();
    GDALAllRegister();
    GDALDataset* p_src_dataset = static_cast<GDALDataset*>(GDALOpen(src_imgpath,GA_ReadOnly));
    GDALRasterBand* raster_band = p_src_dataset->GetRasterBand(1);
    int width = p_src_dataset->GetRasterXSize();
    int height= p_src_dataset->GetRasterYSize();
    GDALDataType src_datatype = raster_band->GetRasterDataType();

    if(src_datatype != GDT_Float32){
        std::cout<<"datatype != dgt_float32"<<std::endl;
        return -1;
    }
    double maxmum,minmum;
    GUIntBig* histgram_result = new GUIntBig[histgram_size];
    float* data = new float[size_t(width)*size_t(height)];
    CPLErr cpl_err = raster_band->RasterIO(GF_Read,0,0,width,height,data,width,height,GDT_Float32,0,0);
    if(cpl_err > 1){
        std::cout<<"rasterio.read failed"<<std::endl;
        return -2;
    }
    /// 统计影像的最大最小值
    size_t k = 0;
    for(; k<size_t(width)*size_t(height); k++){
        if(!isnan(data[0])){
            maxmum = minmum = double(data[0]);
            break;
        }
    }
    if(k == size_t(width)*size_t(height)-1){
        std::cout<<"all data is nan date"<<std::endl;
        return -3;
    }
    for(; k<size_t(width)*size_t(height); k++)
    {
        if(maxmum < double( data[k]))
            maxmum = double(data[k]);
        if(minmum > double(data[k]))
            minmum = double(data[k]);

    }
  
    /// 统计直方图
    raster_band->GetHistogram(minmum,maxmum,int(histgram_size),histgram_result,FALSE,FALSE,GDALDummyProgress,nullptr);
  
    /// 分析对应百分比拉伸量的拉伸值
  
    /// 统计分布直方图的累计值
    GUIntBig* histgram_accumulate = new GUIntBig[histgram_size];
    histgram_accumulate[0] = histgram_result[0];

    for(size_t i=1; i<histgram_size; i++){
        histgram_accumulate[i] = histgram_accumulate[i-1] + histgram_result[i];
    }

    /// 换算成百分比
    /// 计算满足拉伸比例附近的数值作为新的最大值最小值

    double minmum_new=0, maxmum_new=0;
    bool get_minmum_new{false}, get_maxmum_new{false};
    double* histgram_accumulate_percent = new double[histgram_size];

    for(size_t i=0; i<histgram_size; i++){
        histgram_accumulate_percent[i] = 1. * histgram_accumulate[i] / histgram_accumulate[histgram_size-1] ;
        if(i==0)continue;
        /// 考虑到第一个值就大于 stretch_rate 的情况
        if((histgram_accumulate_percent[i-1] < stretch_rate || i == 1) && histgram_accumulate_percent[i] > stretch_rate){
            minmum_new = minmum + (maxmum - minmum)/ histgram_size * (i-1);
            get_minmum_new = true;
        }
        if(histgram_accumulate_percent[i-1] < 1 - stretch_rate && histgram_accumulate_percent[i] > 1 - stretch_rate){

            maxmum_new = minmum + (maxmum - minmum)/ histgram_size * i;
            get_maxmum_new = true;
        }
    }

    if(!get_maxmum_new || !get_minmum_new){
        std::cout<<"calculate new minmax failed"<<std::endl;
        return -4;
    }
    if(abs(maxmum_new - minmum_new)<0.00001){
        std::cout<<"mistake: maxmum_new is equal to minmum"<<std::endl;
        return -5;
    }
    std::cout<<"get_stretched_minmax, spend time: "<<core_spend_time(start)<<std::endl;

    unsigned char* dst_data = new unsigned char[size_t(width)*size_t(height)];
    for(size_t i=0; i<size_t(width)*size_t(height); i++)
    {
        float float_value = data[i];
        float_value = (float_value > float(maxmum_new) ? float(maxmum_new) : float_value);
        float_value = (float_value < float(minmum_new) ? float(minmum_new) : float_value);
        /// 如果考虑到nan值，可以将正常值区间设置为1~255, nan值为0
        int byte_value = int(255. * (double(float_value) - minmum_new) / (maxmum_new - minmum_new));
        dst_data[i] = static_cast<unsigned char>(byte_value);
    }

    GDALDriver* p_driver_bmp = GetGDALDriverManager()->GetDriverByName("BMP");
    GDALDataset* p_dst_dataset = p_driver_bmp->Create(dst_imgpath,width,height,1,GDT_Byte,nullptr);

    GDALRasterBand* p_dst_rasterband = p_dst_dataset->GetRasterBand(1);

    cpl_err = p_dst_rasterband->RasterIO(GF_Write,0,0,width,height,dst_data,width,height,GDT_Byte,0,0);
    if(cpl_err > 1){
        std::cout<<"rasterio.write failed"<<std::endl;
        return -6;
    }

    std::cout<<"converted : "<<core_spend_time(start)<<std::endl;
  

    delete [] data;
    GDALClose(p_src_dataset);
    delete [] dst_data;
    GDALClose(p_dst_dataset);
    
    return 1;

}
```
