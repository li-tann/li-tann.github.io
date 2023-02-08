# for循环进度条

for循环进度条

```C++
void processBar_ForFunction(const char* name,int i,int sum)
{
  if (i % (sum/100) == 0)
  {
    cout <<"\r"<<name<< "Process:";
    int tempNum = 100.0*i / sum;
    do
    {
      cout << ">";
      tempNum = tempNum - 2;
    }while (tempNum >= 0);
    cout << " " << int(100.0 * i / sum)+1 << "%";
  }
}
```
