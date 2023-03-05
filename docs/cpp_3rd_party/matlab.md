# matlab

matlab与c++混合编程

## .mat读取

### 环境设置

1. VC++目录->包含目录 添加: \
    MATLAB\R2010b\extern\include \
    MATLAB\R2010b\extern\include\win64 \
    ->库目录 添加： \
    MATLAB\R2010b\extern\lib\win64\microsoft \
    MATLAB\R2010b\extern\lib\win32\microsoft
&nbsp;
2. C/C++->常规->附加包含目录 添加: \
    MATLAB\R2010b\extern\include \
    MATLAB\R2010b\extern\include\win64
&nbsp;
3. 链接器->输入->附加依赖库 添加: \
    libmat.lib \
    libmx.lib \
    libmex.lib \
    libeng.lib \
    由于所安装的matlab为64位，要调用其函数，需要将工程转换为X64
&nbsp;
4. 顶菜单->生成->配置管理器->平台：X64
&nbsp;
5. 计算机环境变量->path 添加： \
E:\DevTools\MATLAB\R2010b\extern\lib\win64\microsoft; \
E:\DevTools\MATLAB\R2010b\bin\win64;  

### mat读取代码

```C++
MATFile *pmatFile = NULL;
mxArray *pMxArray = NULL;
const char **dir;//元素名列表
int  ndir;//mat文件中的元素(矩阵、元胞)个数
pmatFile = matOpen("D:\\ICESat-2\\ZY303\\ATL03_20200906005252_ph_rmOutlier.mat", "r");
pMxArray = matGetVariable(pmatFile, "initA");

double *dst_rmOutlier;

dir = (const char **)matGetDir(pmatFile, &ndir);
pMxArray = matGetVariable(pmatFile, "dst_rmOutlier");

dst_rmOutlier = (double*)mxGetData(pMxArray);//默认为逐列表示 dst_rmOutlier(i,j)=dst_rmOutlier[i+j*M]
int M = mxGetM(pMxArray);//行
int N = mxGetN(pMxArray);//列
```

注：读取的矩阵是以列形式存储，矩阵的第i行第j列元素表示为
`array(i,j)=array[i+M*j]`
