---
sidebar_position: 2
custom_edit_url: null
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

## 干涉相位成分

$$
\phi = \phi_{flat} + \phi_{topo} + \phi_{defo} + \phi_{atm} + \phi_{noi}
$$

其中, $\phi_{flat}$是平地相位, $\phi_{topo}$是地形相位, $\phi_{defo}$是形变相位, $\phi_{atm}$是大气延迟相位, $\phi_{noi}$是随机噪声相位。

### 平地相位

$\phi_{flat}$平地相位(参考面相位), 是由参考椭球面引起的系统相位, 即平地情况下, 干涉图也会出现密集的条纹。

<!-- [缺个图](pics/default.png) -->

(缺个图)

将主星位置S1, 辅星位置S2, 与平地点P组成三角形, 根据余弦定理,

$$
\begin{aligned}
R_2 &= \sqrt{R_1^2+B^2-2BR_1\cos(\alpha+90\degree-\theta)} \\
&=\sqrt{R_1^2+B^2-2BR_1\sin(\theta-\alpha)} \\
& \approx \sqrt{R_1^2-2BR_1\sin(\theta-\alpha)+B^2\sin^2(\theta-\alpha)} \\
& \approx R_1 - B\sin(\theta-\alpha)
\end{aligned}
$$

可以得到P点的干涉相位,

$$
\begin{aligned}
\phi_P &= -\frac{4\pi}{\lambda}(R_1-R_2) \\
&= -\frac{4\pi}{\lambda} B\sin(\theta-\alpha) \\
&= -\frac{4\pi}{\lambda} B_{\parallel}
\end{aligned}
$$

根据公式可知, 平行基线 $B_{\parallel}$越短, 干涉条纹越宽, 

## 滤波

### 方位向滤波

### 距离向滤波
