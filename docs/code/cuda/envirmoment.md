---
custom_edit_url: null
sidebar_position: 1
last_update:
    author: li-tann
tags: [Cpp, CUDA]
---

# 环境配置

## No CUDA toolset found

windows系统下，这种问题常发生在先安装CUDA环境后安装Visual Studio的情况。

需要手动的将`{$env:CUDA_PATH}/extras/visual_studio_integration/MSBildExtensions`文件夹内的`CUDA_xx.x.props`, `CUDA_xx.x.targets`, `CUDA_xx.x.xml`, `Nvda.Build.CudaTasks.vxx.x.dll`拷贝至VS的`./BuildCustomizations`目录下，即可。

由于不同版本的VS中该文件目录不同，不再提供固定路径，可搜索该文件名称即可。

```powershell
# tree {$env:CUDA_PATH}/extras/visual_studio_integration/MSBildExtensions /f
C:\PROGRAM FILES\NVIDIA GPU COMPUTING TOOLKIT\CUDA\V11.6\EXTRAS\VISUAL_STUDIO_INTEGRATION\MSBUILDEXTENSIONS
    CUDA 11.6.props
    CUDA 11.6.targets
    CUDA 11.6.xml
    Nvda.Build.CudaTasks.v11.6.dll
```
