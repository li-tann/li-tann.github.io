---
custom_edit_url: null
---

# LIST

list命令共包含 Reading, Search, Modification, Ordering四部分：

- Reading: [`LENGTH`](#length), `GET`, `JOIN`, `SUBLIST`;
- Search: `FIND`;
- Modification: `APPEND`, `FILTER`, `INSERT`, `POP_BACK`, `POP_FRONT`, `PREPEND`, `REMOVE_ITEM`, `REMOVE_AT`, `REMOVE_DUPLICATES`, `TRANSFORM`;
- [Ordering](#ordering): [`REVERSE`](#reverse), [`SORT`](#sort)

参考[list-CMake Documentation](https://cmake.org/cmake/help/latest/command/list.html), [CMake 中的list操作](https://blog.csdn.net/yjjy0921/article/details/50378567)。

## Reading

### LENGTH

```cmake
# 返回list的长度
list(LENGTH <list> <output variable>)
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist xxx yyy zzz aaa bbb ccc)
MESSAGE("mylist: ${mylist}")
list(LENGTH mylist ll)
MESSAGE("mylist: ${ll}")
```

OUTPUT:
mylist: xxx;yyy;zzz;aaa;bbb;ccc
mylist: 6

### GET

```cmake
# 返回列表<list>指定位置<element index>的值<output variable>
list(GET <list> <element index> [<element index> ...] <output variable>)
```

### JOIN

```cmake
# New in version 3.12.
# 使用连接符<glue>连接列表<list>中所有元素，最终返回一个字符串<output variable>
list(JOIN <list> <glue> <output variable>)
```

### SUBLIST

```cmake
# 获取列表<list>中从<beigin>处起，长度为<length>的元素组
list(SUBLIST <list> <begin> <length> <output variable>)
```

## Search

### FIND

```cmake
# 在列表<list>中搜索值<value>，如果找到与<value>相同的元素则返回其对应的索引<output variable>，如果未发现则返回-1
list(FIND <list> <value> <output variable>)
```

## Modification

### APPEND

```cmake
# 在<list>中（尾部）添加元素<element>，若<list>不存在，则视其为空表，并将该元素添加到空表中
list(APPEND <list> [<element> ...])
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist aaa bbb ccc)
MESSAGE("mylist: ${mylist}")
list(APPEND mylist xxx yyy zzz)
MESSAGE("mylist: ${mylist}")
set(mylist2 111 222 333)
MESSAGE("mylist2: ${mylist2}")
list(APPEND mylist ${mylist2})
MESSAGE("mylist: ${mylist}")
```

OUTPUT:
mylist: aaa;bbb;ccc
mylist: aaa;bbb;ccc;xxx;yyy;zzz
mylist2: 111;222;333
mylist: aaa;bbb;ccc;xxx;yyy;zzz;111;222;333

### FILTER

```cmake
# New in version 3.6.
# 包括或删除列表<list>中符合该模式的项目。在REGEX模式下，项目将与给定的正则表达式匹配。
list(FILTER <list> <INCLUDE|EXCLUDE> REGEX <regular_expression>)
```

### INSERT

```cmake
# 在列表<list>的指定索引<element_index>处插入元素<element>
# 有效的索引是[0,N](包括N，N是列表的长：list(LENGTH <LIST> N))
# 如果<list>不存在，将被视为空表将元素插入
list(INSERT <list> <element_index> <element> [<element> ...])
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist aaa)
list(APPEND mylist bbb ccc)
MESSAGE("${mylist}")
#insert with index
list(INSERT mylist 2 xxx)
MESSAGE("${mylist}")
```

OUTPUT:
aaa;bbb;ccc
aaa;bbb;xxx;ccc

### POP_BACK

```cmake
# New in version 3.15
# 将列表中最后出现的变量<out-var>（<out-var-2>, <out-var-3>..）删除
# 如果没有提供<out-var>，则删除最后一个元素？（If no variable name is given, removes exactly one element）
list(POP_BACK <list> [<out-var>...])
```

### POP_FRONT

```cmake
# New in version 3.15
# 将列表中首次出现的变量<out-var>（<out-var-2>, <out-var-3>..）删除
# 如果没有提供<out-var>，则删除第一个元素？
list(POP_FRONT <list> [<out-var>...])
```

### PREPEND

```cmake
# New in version 3.15
# 将元素插入到列表<list>的最前方
# 应该可以理解为 list(INSERT <list> 0 [<element> ...])
list(PREPEND <list> [<element> ...])
```

### REMOVE_ITEM

```cmake
# 从列表<list>中删除指定值<value>对应的的元素
list(REMOVE_ITEM <list> <value> [<value> ...])
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist aaa)
list(APPEND mylist bbb ccc)
MESSAGE("${mylist}")
#remove item from list
list(REMOVE_ITEM mylist ccc)
MESSAGE("${mylist}")
```

OUTPUT:
aaa;bbb;ccc
aaa;bbb

### REMOVE_AT

```cmake
# 从列表<list>中删除索引<index>指定位置的元素
list(REMOVE_AT <list> <index> [<index> ...])
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist aaa)
list(APPEND mylist bbb ccc)
MESSAGE("${mylist}")
#remove item from list
list(REMOVE_ITEM mylist 2)
MESSAGE("${mylist}")
```

OUTPUT:
aaa;bbb;ccc
aaa;bbb

### REMOVE_DUPLICATES

```cmake
# 删除列表<list>中重复的元素，第一次出现的元素会被保留
list(REMOVE_DUPLICATES <list>)
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist aaa)
list(APPEND mylist bbb ccc ccc bbb aaa)
MESSAGE("${mylist}")
#REMOVE_DUPLICATES
list(REMOVE_DUPLICATES mylist)
MESSAGE("${mylist}")
```

OUTPUT:
aaa;bbb;ccc;ccc;bbb;aaa
aaa;bbb;ccc

### TRANSFORM？

```cmake
# New in version 3.12
# Transforms the list by applying an action to all or, by specifying a <SELECTOR>, to the selected elements of the list, storing the result in-place or in the specified output variable.
list(TRANSFORM <list> <ACTION> [<SELECTOR>]
                      [OUTPUT_VARIABLE <output variable>])
```

## Ordering

### REVERSE

```cmake
# 列表<list>反转
list(REVERSE <list>)
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist aaa bbb ccc)
MESSAGE("mylist: ${mylist}")
list(REVERSE mylist)
MESSAGE("mylist: ${mylist}")
```

OUTPUT:
mylist: aaa;bbb;ccc
mylist: ccc;bbb;aaa

### SORT

```cmake
# 按字母顺序为排序
list(SORT )
```

```cmake
cmake_minimum_required(VERSION 2.8)
set(mylist xxx yyy zzz aaa bbb ccc)
MESSAGE("mylist: ${mylist}")
list(SORT mylist)
MESSAGE("mylist: ${mylist}")
```

OUTPUT:
mylist: xxx;yyy;zzz;aaa;bbb;ccc
mylist: aaa;bbb;ccc;xxx;yyy;zzz
