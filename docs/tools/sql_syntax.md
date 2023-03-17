# SQL

## SQL基本语法

### SELECT

从指定表中选取指定的列，作为结果显示。

```sql
SELECT column_name1, column_name2 FROM table_name;
```

`column_name1`,`column_name2`..., 要显示列的字段名称，可以为多个字段，也可以使用`*`指代所有字段。

`tale_name`, 要查询的表名称。

### SELECT DISTINCT

```sql
SELECT DISTINCE column_name1, column_name2 FROM table_name;
```

用法与SELECT相同, 但不会重复显示制定列中重复的值。

### WHERE

附加条件，WHERE用于提取满足条件的信息。

```sql
SELECT column_name1, column_name2 FROM table_name WHERE condition;
```

`condition`, 判断条件, 例如: `column_name1=100`。

判断类型可以分为文本字段和数值类型。

文本字段的通常需要使用单引号引用`column_name2='lihua'`,但大部分数据库也支持双引号；

数值类型则不需要单双引号。

WHERE的运算符:

- `=`, `<>`, 等于、不等于(部分SQL版本是`!=`)
- `>`, `<`, `>=`, `<=`, 大于、小于、大于等于、小于等于
- `BETWEEN`, 在...范围内
- `IN`, 指定针对某个列的多个可能值(?)
- `LIKE`, 搜索某种模式(?)
- `()`>`not`>`and`>`or`, 逻辑运算的优先级

举例:

```sql
Select * from tab where val between 1500 and 3000;
```

查询tab表中，val值在1500~3000范围内的数据。

```sql
Select * from tab where val in (1500,2000,2500);
```

查询tab表中，val值等于1500, 2500, 3000的数据。

### ORDER BY

对结果集进行排序

```sql
SELECT column_name1, column_name2 FROM table_name ORDER BY column_name1 ASC;
```

显示tab表中的column_name1, column_name2两列, 并且按照column_name1升序排列。如果降序则是`DESC`, 可以选择多列排序

### INSERT INTO

向表中插入新记录。

insert into 有两种用法,

```sql
INSERT INTO table_name VALUES (value1,value2,value3,...);
```

或,

```sql
INSERT INTO table_name(column_name1,column_name2,column_name3,...) VALUES (value1,value2,value3,...);
```

### UPDATE

更新表中的记录。

```sql
UPDATE table_name
SET column_name1 = value1, column_name2 = value2, ...
WHERE condition;
```

将表tab内满足condition的字段的column_name1对应的值修改为value1, column_name2对应的值修改为value2...

注意, 如果WHERE筛选的条件不唯一, 或未使用WHERE筛选数据, 会修改表中所有数据。

### DELETE

```sql
DELETE FROM table_name
WHERE condition;
```

从表格tab中将所有满足条件condition的数据删除。

与`UPDATE`类似, 如果没有使用WHERE, `DELETE FROM table_name`, 会删除表中所有数据。
