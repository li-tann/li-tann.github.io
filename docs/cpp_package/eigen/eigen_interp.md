# Eigen的矩阵插值

Eigen的矩阵插值

## 原理

参考[iamge_resampling](../../remote_sensing/image_processing/img_resampling.md)

## 代码

```C++
//.h
/** brief:  从eigen矩阵中提取矩阵并插值到指定大小(暂时仅支持MatrixXcf格式数据)
   paras:
   src: 输入矩阵 MatrixXcf
   &dst: 输出矩阵 MatrixXcf
   srow,scol: 提取矩阵的左上角角点坐标
   rows,cols: 提取矩阵的尺寸
   re_cols,re_rows: dst矩阵（插值后矩阵）的尺寸
   flag: 插值方式，1_双线性插值; 2_三次卷积插值
   output:
   bool
  */
bool eigen_getblock_and_resampling(Eigen::MatrixXcf src, Eigen::MatrixXcf& dst, int srow, int scol, int rows, int cols, int re_rows, int re_cols, int flag);

/* brief: 双线性内插
  paras:
  src:只能输入2*2的MatrixXcf矩阵
  d_row,d_col:∈[0,1]
 output:
 输出complex<float>格式的插值点数据
*/
std::complex<float> eigen_interp_bilinear(Eigen::MatrixXcf src, float d_row, float d_col);

/* brief: 三次卷积内插
  paras:
  src:只能输入4*4的MatrixXcf矩阵
  d_row,d_col:∈[0,1]
 output:
 输出complex<float>格式的插值点数据
*/
std::complex<float> eigen_interp_cubicConvolution(Eigen::MatrixXcf src, float d_row, float d_col);

/* brief: 三次卷积内插权重公式
  paras:
  delta:float格式的任意值(但仅0~2权重不为0)
 output:
 输出float格式的权重数
*/
float cubicConvolution_weiget(float delta);

//.cpp
bool eigen_getblock_and_resampling(Eigen::MatrixXcf src, Eigen::MatrixXcf& dst, int srow, int scol, int rows, int cols, int re_rows, int re_cols, int flag)
{
    dst.resize(re_rows, re_cols);
    switch (flag)
    {
    case 1: {
        //双线性内插
        for (int dst_i = 0; dst_i < re_rows; dst_i++)
        {
            int src_i = srow + double(dst_i) / re_rows * rows;
            for (int dst_j = 0; dst_j < re_cols; dst_j++)
            {
                int src_j = scol + double(dst_j) / re_cols * cols;
                dst(dst_i, dst_j) = eigen_interp_bilinear(src.block(int(src_i), int(src_j), 2, 2), src_i - int(src_i), src_j - int(src_j));                
            }
        }
    }
        break;
    case 2:{
        //三次卷积插值
        for (int dst_i = 0; dst_i < re_rows; dst_i++)
        {
            int src_i = srow + double(dst_i) / re_rows * rows;
            for (int dst_j = 0; dst_j < re_cols; dst_j++)
            {
                //如果是边界点，那么使用线性插值代替
                int src_j = scol + double(dst_j) / re_cols * cols;
                if (src_i<1 || src_j < 1 || src_i>=src.rows() - 2 || src_j>=src.cols() - 2){
                    dst(dst_i, dst_j) = eigen_interp_bilinear(src.block(int(src_i), int(src_j), 2, 2), src_i - int(src_i), src_j - int(src_j));
                    continue;
                }
                //三次卷积插值
                dst(dst_i, dst_j) = eigen_interp_cubicConvolution(src.block(int(src_i) - 1, int(src_j) - 1, 4, 4), src_i - int(src_i), src_j - int(src_j));

            }
        }
    }
        break;
    default:
        return false;
        break;
    }
    
    return false;
}


std::complex<float> eigen_interp_bilinear(Eigen::MatrixXcf src, float d_row, float d_col)
{
    std::complex<float> dst(NAN, NAN);
    //异常退出
    if (src.cols() != 2 || src.rows() != 2)
        return dst;
    if (d_row < 0 || d_row>1 || d_col < 0 || d_col>1)
        return dst;
    ////特殊值（四角点）
    //if (d_row == int(d_row) && d_col==int(d_col))
    //    return src(d_row, d_col);
    ////边界值（无法进行双线性内插的点，视为一维数据进行内插）
    //if (d_row == int(d_row))
    //{
    //    float real, imag;
    //    real = (src(int(d_row), 1).real() - src(int(d_row), 0).real()) * d_col + src(int(d_row), 0).real();
    //    imag = (src(int(d_row), 1).imag() - src(int(d_row), 0).imag()) * d_col + src(int(d_row), 0).imag();
    //    dst.real(real);
    //    dst.imag(imag);
    //    return dst;
    //}
    //if (d_col == int(d_col))
    //{
    //    float real, imag;
    //    real = (src(1, int(d_col)).real() - src(0, int(d_col)).real()) * d_col + src(0, int(d_col)).real();
    //    imag = (src(1, int(d_col)).imag() - src(0, int(d_col)).imag()) * d_col + src(0, int(d_col)).imag();
    //    dst.real(real);
    //    dst.imag(imag);
    //    return dst;
    //}

    //双线性内插
    Eigen::MatrixXf A(1, 2);
    Eigen::MatrixXf C(2, 1);

    A << 1 - d_row, d_row;
    C << 1 - d_col, d_col;
    Eigen::MatrixXcf dst_mat(1, 1);
    dst_mat.real() << A * src.real() * C;
    dst_mat.imag() << A * src.imag() * C;

    //delete &A, &C;
    
    return dst_mat(1, 1);
}

std::complex<float> eigen_interp_cubicConvolution(Eigen::MatrixXcf src, float d_row, float d_col)
{
    std::complex<float> dst(NAN, NAN);
    //异常退出
    if (src.cols() != 4 || src.rows() != 4)
        return dst;
    if (d_row < 0 || d_row>1 || d_col < 0 || d_col>1)
        return dst;

    //三次卷积插值
    Eigen::MatrixXf A(1, 4);
    Eigen::MatrixXf C(4, 1);
    A << cubicConvolution_weiget(1 + d_row),
        cubicConvolution_weiget(d_row),
        cubicConvolution_weiget(1 - d_row),
        cubicConvolution_weiget(2 - d_row);
    
    C << cubicConvolution_weiget(1 + d_col),
        cubicConvolution_weiget(d_col),
        cubicConvolution_weiget(1 - d_col),
        cubicConvolution_weiget(2 - d_col);

    Eigen::MatrixXcf dst_mat(1, 1);
    dst_mat.real() << A * src.real() * C;
    dst_mat.imag() << A * src.imag() * C;


    return dst_mat(1, 1);
}

inline float cubicConvolution_weiget(float delta)
{
    if (abs(delta) >= 2) {
        return 0;
    }
    else if (abs(delta) >= 1) {
        return 4 - 8 * abs(delta) + 5*pow(abs(delta), 2) - pow(abs(delta), 3);
    }
    else{
        return 1 - 2 * pow(abs(delta), 2) + pow(abs(delta), 3);
    }
}
```
