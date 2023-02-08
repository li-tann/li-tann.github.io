# 二进制float读取

二进制float读取

``` C++
bool slcRead(const char *src,float *fReal, float *fImag)
{
    ifstream inFile(src, ifstream::binary); //二进制读方式打开
    if (!inFile) {
        printf("ERROR: File open failed...\nFilepath is %s",string(src));
        return false;
    }
    bool bReal = true;
    int num = 0;
    unsigned int value2;
    while (inFile.read((char*)&value2, 4)) { //一直读到文件结束
        //高低位字节变换
        unsigned int idata1, idata2, idata3, idata4;
        idata1 = 255 & (value2 >> 24);
        idata2 = 255 & (value2 >> 16);
        idata3 = 255 & (value2 >> 8);
        idata4 = 255 & value2;
        char str[9];
        sprintf(str, "%02x%02x%02x%02x", idata4, idata3, idata2, idata1);
        str[8] = 0;
        float a;
        sscanf(str, "%x", &a);
        //分别存储到fReal和fImag中
        if (bReal) {
            fReal[num] = a;
            bReal = false;
            //printf("%d:real %f,\t", num2, a);
        }
        else {
            fImag[num] = a;
            bReal = true;
            num++;
            //printf("imag %f\n", a);
        }
    }
    return true;
}
```
