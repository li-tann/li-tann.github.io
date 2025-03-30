---
title: LaTeX
sidebar_position: 98
custom_edit_url: null
last_update:
    author: li-tann
tags: [LaTeX]
---

# LaTeX 公式速查

## 求和符合

$\sum{i}$：`\sum{i}`，或$\sum_{i=0}^{N}{i}$：`\sum_{i=0}^{N}{i}`

当独立一行显示时效果如下，

$$
\sum_{i=0}^{N}{i}
$$

## 向量

`\mathbf{}` 和 `\boldsymbol{}`都可以使用粗体表示向量, 区别是 `\mathbf{}`得到的粗体字母不是斜体的。

`\mathbf{R_S}`

$$
\mathbf{R_S}
$$

`\boldsymbol{R_S}`

$$
\boldsymbol{R_S}
$$

`\vec{}`则是使用箭头表示向量，

`\vec{R_S}`

$$
\vec{R_S}
$$

但通常只适用于单字母(如：$\vec{a}$). 如果想使用更长的箭头，应使用`\overrightarrow{}`或`\overrightharpoon{}`

`\overrightarrow{R_S}`

$$
\overrightarrow{R_S}
$$

`\overrightharpoon{R_S}`

$$
\overrightharpoon{R_S}
$$

模长使用`\vert ... \vert`或`\Vert ... \Vert`表示

vert:

$$
\vert \overrightarrow{R_S} \vert
$$

Vert:

$$
\Vert \overrightarrow{R_S} \Vert
$$

## 公式组合

### matrix

在`\begin{matrix}`和`\end{matrix}`之间输入变量，使用`&`作为同行之间的间隔，使用`\\`换列
$$
\begin{matrix}
    a& b& c\\
    3a& 2b& 2c
\end{matrix}
$$

## 宏定义

通过自定义命令，可以简化公式书写流程

`\def`可以自定义常量、函数

$$
\def\rt{ \overrightarrow{R_{T}} }
\def\arrow#1#2{\overrightarrow{#1_{#2}}}
\begin{align}
{R_j}^2 =& (\arrow{R}{S} - \rt)^2\\
f_d =& \frac{\lambda}{2} \frac{(\arrow{R}{S} - \arrow{R}{T})\cdot \arrow{V}{S}}{\Vert {\arrow{R}{S} - \arrow{R}{T}} \Vert} \\
\end{align}
$$

以RD模型为例，使用`\def`简化后的代码如下

```latex
$$
\def\rt{ \overrightarrow{R_{T}} }
\def\arrow#1#2{\overrightarrow{#1_{#2}}}
\begin{align}
{R_j}^2 =& (\arrow{R}{S} - \arrow{R}{T})^2\\
f_d =& \frac{\lambda}{2} \frac{(\arrow{R}{S} - \rt)\cdot \arrow{V}{S}}{\Vert {\arrow{R}{S} - \rt} \Vert} \\
\end{align}
$$
```

与之相似的还有`\gdef`, `\edef`, 和`\xdef`

`\gdef`：与 `\def` 几乎完全相同，唯一的区别是 `\gdef` 是全局的，不受分组{}的影响。

`\edef`：与 `\def` 几乎完全相同，唯一的区别是 `\edef` 的定义中如果嵌套了命令，会首先展开命令， 然后再定义新命令。

`\xdef`：相当于 `\gdef` 加 `\edef`，全局的展开定义。

## 希腊字母

| 大写       | 小写       |拼写      | 发音       |  | 大写     | 小写       |拼写       | 发音        |
| --------- | ---------- | -------- | --------- | --- | ----- | ---------- | -------- | ----------- |
| $\Alpha$  | $\alpha$   | \alpha   | a:lf      | | $\Beta$   | $\beta$    | \beta    | bet         |
| $\Gamma$  | $\gamma$   | \gamma   | ga:m      | | $\Delta$  | $\delta$   | \delta   | delt        |
| $\Epsilon$| $\epsilon$ | \epsilon | ep\`silon | | $\Zeta$   | $\zeta$    | \zeta    | zat         |
| $\Eta$    | $\eta$     | \eta     | eit       | | $\Theta$  | $\theta$   | \theta   | θit         |
| $\Iota$   | $\iota$    | \iota    | aiot      | | $\Kappa$  | $\kappa$   | \kappa   | kap         |
| $\Lambda$ | $\lambda$  | \lambda  | lambd     | | $\Mu$     | $\mu$      | \mu      | mju         |
| $\Nu$     | $\nu$      | \nu      | nju       | | $\Xi$     | $\xi$      | \xi      | ksi         |
| $\Omicron$| $\omicron$ | \omicron | omik\`ron | | $\Pi$     | $\pi$      | \pi      | pai         |
| $\Rho$    | $\rho$     | \rho     | rou       | | $\Sigma$  | $\sigma$   | \sigma   | \`sigma     |
| $\Tau$    | $\tau$     | \tau     | tau       | | $\Upsilon$| $\upsilon$ | \upsilon | jup\`silon  |
| $\Phi$    | $\phi$     | \phi     | fai       | | $\Chi$    | $\chi$     | \chi     | phai        |
| $\Psi$    | $\psi$     | \psi     | psai      | | $\Omega$  | $\omega$   | \omega   | o\`miga     |

:::tip
大写时首字母应为大写
:::
