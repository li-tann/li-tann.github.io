---
custom_edit_url: null
sidebar_position: 3
last_update:
    author: li-tann
tags: [Cpp, CUDA]
---

# 线程机制

处理循环事件时，与CPU代码的`for(int i=0; i<N; i++){}`不同, GPU代码时使用线程值代替`i`

```cpp
for(int i=0; i<1000; i++){
    printf("idx:%d\n",i);
}
```

```cuda
/// idx有很多种计算方式, 不比刻意学习这一种
int idx = blockIdx.x * blockDim.x * blockDim.y + threadIdx.y * blockDim.y + threadIdx.x;
printf("idx:%d\n",idx);
```

TODO: grid --> block --> thread
