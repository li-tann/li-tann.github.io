# python小工具

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


search_files("D:/OneDrive/CODE/GAMMA Codes/GAMMA_SOFTWARE-20100103", 'datum_shift')
```
