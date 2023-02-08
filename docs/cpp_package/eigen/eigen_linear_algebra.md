# 线性方程求解

Eigen线性方程求解

## 线性最小二乘

解决密集矩阵的线性最小二乘问题

 $$Ax=b$$

 Eigen文档中提供了三种方法，分别是SVD分解，QR分解和正规方程三种方式。其中，SVD分解通常是最准确但也是最慢的，正规方程最快但最不准确，QR介于两者之间。

### SVD分解 (SVD decomposition)

``` C++
#include <iostream>
#include <Eigen/Dense>
 
using namespace std;
using namespace Eigen;
 
int main()
{
   MatrixXf A = MatrixXf::Random(3, 2);
   cout << "Here is the matrix A:\n" << A << endl;
   VectorXf b = VectorXf::Random(3);
   cout << "Here is the right hand side b:\n" << b << endl;
   cout << "The least-squares solution is:\n"
        << A.bdcSvd(ComputeThinU | ComputeThinV).solve(b) << endl;
}

//output:
Here is the matrix A:
  0.68  0.597
-0.211  0.823
 0.566 -0.605
Here is the right hand side b:
 -0.33
 0.536
-0.444
The least-squares solution is:
-0.67
0.314
```

### QR分解 (QR decomposition)

 **HouseholderQR** (no pivoting, fast but unstable if your matrix is not rull rank), **ColPivHouseholderQR** (column pivoting, thus a bit slower but more stable) and **FullPivHouseholderQR** (full pivoting, so slowest and slightly more stable than ColPivHouseholderQR).

```C++
MatrixXf A = MatrixXf::Random(3, 2);
VectorXf b = VectorXf::Random(3);
cout << "The solution using the QR decomposition is:\n"
     << A.colPivHouseholderQr().solve(b) << endl;
```

### 正规方程 (normal equations)

$$
\begin{aligned}
   & Ax = b \\
\Rightarrow & A^TAx=A^Tb \\
\Rightarrow & x=(A^TA)^{-1}A^Tb \\
\end{aligned}
$$

```C++
MatrixXf A = MatrixXf::Random(3, 2);
VectorXf b = VectorXf::Random(3);
cout << "The solution using normal equations is:\n"
     << (A.transpose() * A).ldlt().solve(A.transpose() * b) << endl;
```
