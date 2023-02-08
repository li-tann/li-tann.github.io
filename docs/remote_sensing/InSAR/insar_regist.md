---
sidebar_position: 1
---

# 主辅影像配准

配准算法

## 相关系数法

相关系数法是图像配准的基本方法，常用于模板或模式的匹配(?)，是很多配准算法的基础。在某些匹配参数位置的情况下，相关函数法能够给出图像之间总体配准结果，从而为其他高精度的配准方法提供基准点。对于干涉SAR图像的配准，相关可以在复数域进行，也可以仅仅利用幅度信息进行配准。

**对于相干斑噪声比较严重的SAR图像，幅度相关要好于复数据相关。**

### 幅度互相关

$$
R(u',v')=\frac{\displaystyle\sum_i\sum_jM_1(i,j)M_2(i+u',j+v')}{\sqrt{\displaystyle\sum_i\sum_jM_1^2(i,j)}*\sqrt{\displaystyle\sum_i\sum_jM_2^2(i+u',j+v')}}
$$

式中， $M_1(i,j)$和 $M_2(i,j)$分别是两景影像的幅度信息， $u'$和 $v'$分别为距离向和方位向的偏移量，相关系数最大处 $R(u',v')$的 $u'$和 $v'$值即为配准的结果。

### 复数相关

$$
R(u',v')=\displaystyle\sum_i\sum_jS_1(i,j)*S_2^*(i+u',j+v')
$$

式中， $S_1(i,j)$和 $S_2(i,j)$分别是两景影像的复数信息， $S_2^*(i,j)$为原影像的共轭矩阵， $u'$和 $v'$分别为距离向和方位向的偏移量，相关系数最大处 $R(u',v')$的 $u'$和 $v'$值即为配准的结果。

使用FFT加速计算过程

使用FFT变换将 $S_1(i,j)$和 $S_2(i,j)$变换到频域，得到 $S_1(m,n)$和 $S_2(m,n)$，在频域中有：

$$
FFT(R)=S_1(m,n)*S_2^{*}(m,n)
$$

对上式进行二维逆FFT变换即为 $S_1(i,j)$和 $S_2(i,j)$的互相关函数，其最大值对应的位置为配准的偏移量。

## 数据求解

### 偏移量模型

一般使用二次多项式拟合偏移量，构建主影像坐标与偏移量（辅影像）之间的映射关系。

$$
\begin{matrix}
  \Delta r = a_0 + a_1 * r_m + a_2 * c_m + a_3 * r_m * c_m + a_4 * r_m^2 + a_5* c_m^2 \\
  \Delta c = b_0 + b_1 * r_m + b_2 * c_m + b_3 * r_m * c_m + b_4 * r_m^2 + b_5* c_m^2
\end{matrix}
$$

式中， $a_i$、 $b_i$是多项式拟合系数， $r_m$、$c_m$是主影像行列坐标， $\Delta r$和$\Delta c$是该坐标对应的行列偏移量（或辅影像坐标）。

根据获得的多个坐标对和对应的行列偏移量，采用最小二乘法解算偏移量模型。

## code

```c++
///  前提: 已完成配准, 获取主影像坐标与对应的偏移量信息
///  indep_master_point 主影像坐标
///  dep_offset         影像偏移量(辅影像坐标 - 主影像坐标)
///  rc: 自定义类, 表示行列号, 包含rc.row, rc.col和其他运算符
bool registration_polynomials_::calculate_cofficient(std::vector<rc> indep_master_point, std::vector<rc> dep_offset, rc& rmse)
{
    int min_rows = indep_master_point.size() > dep_offset.size() ? dep_offset.size() : indep_master_point.size();
    if (min_rows < 6) {
        return false;
    }
    Eigen::MatrixXd mat_A = Eigen::MatrixXd::Zero(min_rows, 6);
    Eigen::MatrixXd mat_b = Eigen::MatrixXd::Zero(min_rows, 2);

    /// 定义矩阵
    /// Ax = b
    for (int i = 0; i < min_rows; i++)
    {
        mat_A.block(i, 0, 1, 6) <<
            1,
            indep_master_point[i].row,
            indep_master_point[i].col,
            pow(indep_master_point[i].row, 2),
            pow(indep_master_point[i].col, 2),
            indep_master_point[i].row* indep_master_point[i].col;

        mat_b.block(i, 0, 1, 2) << 
            dep_offset[i].row,
            dep_offset[i].col;
    }

    /// QR
    Eigen::MatrixXd mat_x = mat_A.fullPivHouseholderQr().solve(mat_b);
    
    /// the different between the following two lines code lies in the different method of inverse (another is ldlt).
    //Eigen::MatrixXd mat_x = (mat_A.transpose() * mat_A).inverse() * mat_A.transpose() * mat_b;
    //Eigen::MatrixXd mat_x_ = (mat_A.transpose() * mat_A).ldlt().solve(mat_A.transpose() * mat_b);
    if (mat_x.cols() != 2 || mat_x.rows() != 6)
        return false;

    for (int i = 0; i < 5; i++){
        cofficient_azi[i] = mat_x(i, 0);
        cofficient_rg[i] = mat_x(i, 1);
    }

    /// RMSE
    double rmse_azi{ 0 }, rmse_rg{ 0 };
    for (int i = 0; i < min_rows; i++) {
        rc offset = get_offset(indep_master_point[i]) - dep_offset[i];
        rmse_azi += offset.row;
        rmse_rg += offset.col;
    }
    rmse_azi /= min_rows;
    rmse_rg /= min_rows;

    rmse = rc(rmse_azi, rmse_rg);

    return true; //配准完成
}
```
