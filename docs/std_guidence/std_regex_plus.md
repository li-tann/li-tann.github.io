# $2^n$检测方法

$2^n$检测方法

- [$2^n$检测方法](#2n检测方法)
  - [code](#code)
  - [原理](#原理)

<!-- /code_chunk_output -->

## code

```C++
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

## 原理

$$
\begin{matrix}
    2^4&(001000) \\ &\& \\ 2^4-1&(000111)
\end{matrix}
\rArr
0(000000)
$$
