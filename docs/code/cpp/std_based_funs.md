---
sidebar_position: 1
---

# Std based Funs

## 读取二进制float数据

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

## 根据指定标识符分割字符串

```cpp
void strSplit_ver2(std::string input, std::vector<std::string>& output, std::string split, bool clearVector = true)
{
    if(clearVector)
        output.clear();
    std::string::size_type pos1, pos2;
    pos1 = input.find_first_not_of(split);
    pos2 = input.find(split,pos1);

    if (pos1 == std::string::npos) {
        return;
    }
    if (pos2 == std::string::npos) {
        output.push_back(input.substr(pos1));
        return;
    }
    output.push_back(input.substr(pos1, pos2 - pos1));
    strSplit_ver2(input.substr(pos2 + 1), output, split,false);
    
}
```

## $2^n$检测方法

```cpp
bool check_2n(uint x)
{
    if(x == 0)
        return false;
    int y = x&(x-1);
    if(y==0)
        return true;
    return false;
}
```

原理:

$$
\begin{matrix}
    2^4&(001000) \\ &\& \\ 2^4-1&(000111)
\end{matrix}
\rArr
0(000000)
$$

## 计算数组长度

动态数组:

```cpp
size_t x = 20;
double * arr = new double [x];
std::cout<<_msize(arr)/sizeof(*arr)<<std::endl;
// cmd: 20
```

静态数组:

```cpp
double arr[15];
std::cout<<sizeof(arr)/sizeof(*arr)<<std::endl;
// cmd: 15
```

检测数组为动态或静态的方法:

如果使用计算动态数组长度的方式计算静态数组会导致异常报错（_msize问题），而用计算静态数组长度的方式计算动态数组则会返回0（sizeof(arr_a) < sizeof(*arr_a), 返回整数0）.
