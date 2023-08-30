---
sidebar_position: 2
---

# 主辅影像干涉

影像干涉公式推导

## 复数影像的两种表现形式

复数影像的数字存储形式

$$a+bi$$

复数影像的强度相位表现形式

$$u=\lvert u\rvert e^{j\phi}$$

其中， $\lvert u\rvert$为强度, $\phi$为相位。

两种表达方式的相互关系为：

$$
\lvert u\rvert={u.real}^2+{u.imag}^2=a^2+b^2
$$

$$
\phi=\arctan\frac{u.imag}{u.real}=\arctan\frac{b}{a}
$$

## 两种表现形式的干涉计算

$$
u_1=\lvert u_1\rvert e^{j\phi_1}=a+bi
$$

$$
u_2=\lvert u_2\rvert e^{j\phi_2}=c+di
$$

### 强度相位表现形式

$$
\begin{aligned}
   u_{int} &=u_1\cdot u_2^* \\
&=\lvert u_1\rvert e^{j\phi_1}\cdot \lvert u_2\rvert e^{-j\phi_2} \\
&= \lvert u_1\rvert \lvert u_2\rvert e^{j(\phi_1-\phi_2)} \\
&= \lvert u_1\rvert \lvert u_2\rvert e^{-j(\phi_2-\phi_1)}
\end{aligned}
$$

注，*表示共轭

进一步计算，可得：

强度

$$
\begin{aligned}
\lvert u_1\rvert \lvert u_2\rvert&=(a^2+b^2)(c^2+d^2) \\
&=a^2c^2+b^2c^2+a^2d^2+b^2d^2
\end{aligned}
$$

相位

$$
\begin{aligned}
\phi_1-\phi_2&=\arctan\frac{b}{a}-\arctan\frac{d}{c}+c\pi \\
&=\arctan\frac{\frac{b}{a}-\frac{d}{c}}{1+\frac{bd}{ac}}+c\pi \\
&=\arctan\frac{bc-ad}{ac+bd}+c\pi
\end{aligned}
$$

其中，使用了反正切函数（arctan）相加定律

$$\arctan\alpha\pm\arctan\beta=\arctan\frac{\alpha\pm\beta}{1\mp\alpha\beta}+c\pi$$

### 数字存储形式

$$
\begin{aligned}
u_{int} &=(a+bi){(c+di)}^* \\
&=ac+bd+(bc-ad)i
\end{aligned}
$$

强度

$$
\begin{aligned}
\lvert u_{int}\rvert&={(ac+bd)}^2{(bc-ad)}^2 \\
&=a^2c^2+b^2d^2+2abcd+b^2c^2+a^2d^2-2abcd \\
&=a^2c^2+b^2d^2+b^2c^2+a^2d^2 \\
&=\lvert u_1\rvert \lvert u_2\rvert
\end{aligned}
$$

相位

$$
\begin{aligned}
\phi_{int}&=\arctan\frac{bc-ad}{ac+bd} \\
&=\phi_1-\phi_2
\end{aligned}
$$

## 基线粗估计

基线粗估计是使用主辅影像的轨道信息，计算出某一时刻在垂直于主星航向的平面内，主星到辅星的空间向量。

粗略的基线估计方法，通过迭代思维，搜索满足“基线向量垂直于主星速度矢量”的基本条件的辅星位置矢量，得到基线信息。

迭代的收敛条件是：在位于垂直于主星航向的平面两侧的辅星的位置矢量中选取两点与主星速度矢量计算向量积，必然一个大于0，一个小于0。通过二分法逐步缩小搜索范围，直到向量积等于0为止。
