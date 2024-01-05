---
title: utils
custom_edit_url: null
---

## 遍历搜索关键字

在指定地址内，搜索关键字

```python
import os

def search_files(path, keyword):
    for root, dirs, files in os.walk(path):
        for name in files:
            file_path = os.path.join(root, name)
            try:
                with open(file_path, encoding='utf-8') as f:
                    if keyword in f.read():
                        print(file_path + " has keyword")
            except:
                print("open failed:" + file_path)
                pass

# 从文件夹中搜索文件内内部含有‘datum_shift’字段的文件
search_files("./GAMMA_SOFTWARE-20100103", 'datum_shift')
```

## 正则筛选文件名

```python
import os
import re

def filter_files_baseon_regex(root, regex):
    filterd_fileapths=[]
    rgx = re.compile(regex)
    for root, dirs, files in os.walk(root):
        for name in files:
            file_path = os.path.join(root, name)
            match_obj=re.findall(rgx,name)
            if match_obj:
                filterd_fileapths.append(name)
    return filterd_fileapths

# 从很多*.shp, *.shx, *.prj, *.dbf文件中提取所有的*.shp文件
f = filter_files_baseon_regex("./shp/",".*shp$")
```

## 获取计算机名

```python
import ctypes

def getComputerName():
    pcName = ctypes.c_char_p(''.encode('utf-8'))
    pcSize = 16
    pcName = ctypes.cast(pcName, ctypes.c_char_p)
    try:
        ctypes.windll.kernel32.GetComputerNameA(pcName, ctypes.byref(ctypes.c_int(pcSize)))
    except Exception:
        print("Sth wrong in getname!")
    print(pcName.value.decode('utf-8'))
    return pcName.value.decode('utf-8')
```
