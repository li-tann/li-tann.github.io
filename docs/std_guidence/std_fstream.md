# fstream

c++ 输入输出流的格式设置，二进制文件的读取

## ofstream 写文档

```C++
#include<fstream>
ofstream temp(Filepath.txt);
temp<<………;
temp.close();
```

### 精度设置

```C++
std::ofstream(const char* filepath);
// 不适用科学计数法表示
ofs<<std::fixed 

// 有效数字位数
ofs.precision(int num);
// 当输出一行数字的精度不同时, 每次修改精度前单独设置一次

ofs<<num<<"\t";
ofs.precision(5);
ofs<<iter.incidence<<"\t";
ofs.precision(2);
ofs<<iter.row<<"\t"<<iter.col<<"\t";
ofs.precision(5);
ofs<<iter.point.x<<"\t"<<iter.point.y<<"\t"<<iter.point.z<<"\n";

// ...

ofs.close();

```

### 占位符 & 输出位置

```C++
ofs<<std::right;
    ofs<<std::setw(4)<<1<<std::setw(4)<<10<<std::setw(4)<<100<<std::endl;
    ofs.close();
```

输出结果格式如下：

> “___1__10_100”(将空格替换为下划线方便查看间距)

### 输出位置



## ifstream 读文档

```c++
ifstream ifs;
ifs.open(txtsrc);
if (!ifs.is_open())
{
std::cout << "文件打开失败" << endl;
system("pasue");
exit(0);
}
 
string str;
string Separator = string(",");
while (getline(ifs, str))
{
    vector<string> strVec;
    SplitString(str, strVec, Separator);
    ComparisonData x0;
    x0.jRan_real = atoi(strVec[0].c_str());
    x0.iAzi_real = atoi(strVec[1].c_str());
    x0.jRan_sim = atoi(strVec[2].c_str());
    x0.iAzi_sim = atoi(strVec[3].c_str());
 
    PointsCompareData.push_back(x0);
}
```

### 二进制文件读取及跳字节

场景：2022.3.17 其他软件无法正常显示.dat

```C++
std::ifstream ifs("filepath",ifsteam::binary);
if(!ifs){
    printf("ifs read error..\n");
    return -1
}
double value;
while(ifs.read((char*)value,sizeof(double)/*8*/))
{
    //如果value异常 （error只是一个假想的函数）
    if(error(value)){
        //ifs指针从当前位置（ios::cur）向前跳n-1的字节，
        ifs.seekg(1-sizeof(double),ios::cur);
        
        continue;
    }
}
```

`std::ifstream ifs("filepath",ifsteam::binary)`，用二进制方式读取文件。

`ifs.read(char_type* ,streamsize )`，每次读取`streamsize`长度的字节数，并存储到指定位置(`char_type*`)。

seekg:

`ifs.seekg(off_type,ios_base::seekDir)` ifs的当前指针移动到`seekDir`处并偏移`off_type`字节。

ios_base::seekDir:
>`ios::beg` 表示输入流的开始位置 \
`ios::cur` 表示输入流的当前位置 \
`ios::end` 表示输入流的结束位置
