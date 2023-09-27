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

## 方位向滤波

## 距离向滤波
