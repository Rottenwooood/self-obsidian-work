查看内置函数：dir(__builtins__)

![image-20240816105925778](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240816105925778.png)

优先级

（）

**乘方

*/

+-

| [ : ] | 截取字符串中的一部分，遵循**左闭右开**原则，str[0:2] 是不包含第 3 个字符的。 | a[1:4] 输出结果 **ell** |
| ----- | ------------------------------------------------------------ | ----------------------- |
|       |                                                              |                         |

input（）函数默认返回str

### 注释

* \# 这是一个注释

* '''

单引号注释

'''

 """

双引号注释

"""

### 六大数据类型

- Number（数字）

  ​	*int、float、bool、complex*

  ​	*bool 是 int 的子类，True 和 False 可以和数字相加，* **True==1、False==0** *会返回* **True***，但可以通过* **is** *来判断类型。*

- String（字符串）

- bool（布尔类型）

- List（列表）

- Tuple（元组）

- Set（集合）

- Dictionary（字典）

- bytes(字节数组类型)

### 列表list

```
list2 = [1, 2, 3, 4, 5 ]
```



### 元组tuple



```
tup2 = (1, 2, 3, 4, 5 )
```

所以，tuple所谓的"不变"是说，tuple的每个元素，指向永远不变。即指向'a'，就不能改成指向'b'，指向一个list，就不能改成指向其他对象，但指向的这个list本身是可变的！理解了"指向不变"后，要创建一个内容也不变的tuple怎么做？那就必须保证tuple的每一个元素本身也不能变。

当元素是可变对象时。对象内部属性是可以修改的！tuple的不可变限制只是在一个纬度上：元素的类型。实现理解，tuple的元素所保存的内容（数值或内存地址）是不允许修改的，但地址映射的对象自身是可以修改的。

### 字典dict

```
d = {key1 : value1, key2 : value2, key3 : value3 }
```

1）不允许同一个键出现两次。创建时如果同一个键被赋值两次，后一个值会被记住

2）键必须不可变，所以可以用数字，字符串或元组充当，而用列表就不行

### 集合set

是一个**无序**的**不重复**元素序列。

集合中的元素不会重复，并且可以进行交集、并集、差集等常见的集合操作。

可以使用大括号 **{ }** 创建集合，元素之间用逗号 **,** 分隔， 或者也可以使用 **set()** 函数创建集合。

```
parame = {value01,value02,...}
或者
set(value)
```

创建一个空集合必须用 **set()** 而不是 **{ }**，因为 **{ }** 是用来创建一个空字典。

#### 1、添加元素

```
s.add( x )
```

```
s.update( x )
```

x 可以有多个，用逗号分开。

#### 2、移除元素

```
s.remove( x )#如果元素不存在，会发生错误
```

```
s.discard( x )#如果元素不存在，不会发生错误
```

```
s.pop()#随机删除集合中的一个元素
```

### 条件

#### if

```
if condition_1:
    statement_block_1
elif condition_2:
    statement_block_2
else:
    statement_block_3
```

#### match...case

```
match expression:
    case pattern1:
        # 处理pattern1的逻辑
    case pattern2 if condition:
        # 处理pattern2并且满足condition的逻辑
    case _:
        # 处理其他情况的逻辑
```

### 循环

#### while

```
while <expr>:
    <statement(s)>
或
while <expr>: <statement(s)>
```



#### while+else

```
while <expr>:
    <statement(s)>
else:
    <additional_statement(s)>
```

expr 条件语句为 true 则执行 statement(s) 语句块，如果为 false，则执行 additional_statement(s)。

#### for 

```
for <variable> in <sequence>:    <statements> else:    <statements>
```

#### break和continue

<img src="https://static.jyshare.com/images/mix/python-while.webp" alt="img" style="zoom:30%;" />

#### pass 语句

Python pass是空语句，是为了保持程序结构的完整性。

pass 不做任何事情，一般用做占位语句

```
>>>while True:
...     pass  # 等待键盘中断 (Ctrl+C)
```

```
>>>class MyEmptyClass:
...     pass
```



#### range()函数

[range() 函数](https://www.runoob.com/python/python-func-range.html)返回的是列表。

```
ange(stop)
range(start, stop[, step])
```

- start: 计数从 start 开始。默认是从 0 开始。例如 range(5) 等价于 **range(0， 5)**

- stop: 计数到 stop 结束，但不包括 stop。例如：range(0， 5) 是 [0, 1, 2, 3, 4] 没有 5

- step：步长，默认为 **1**。例如：range(0， 5) 等价于 range(0, 5, 1)

  ```
  for number in range(1, 6):
     print(number)
  ```

### 复合赋值

```
n = 10
a, b = 0, 1
for i in range(n):
	print(b)
	a, b = b, a + b
```

### 推导式

- 列表(list)推导式

  ```
  [表达式 for 变量 in 列表] 
  [表达式 for 变量 in 列表 if 条件]
  ```

  

- 字典(dict)推导式

  ```
  { key_expr: value_expr for value in collection }
  { key_expr: value_expr for value in collection if condition }
  ```

- 集合(set)推导式

  ```
  { expression for item in Sequence }
  { expression for item in Sequence if conditional }
  ```

- 元组(tuple)推导式

  元组推导式返回的结果是一个生成器对象。

```
(expression for item in Sequence )

(expression for item in Sequence if conditional )
```

```
\>>> a = (x **for** x **in** range(1,10))
\>>> a
<generator object <genexpr> at 0x7faf6ee20a50> # 返回的是生成器对象

\>>> tuple(a)    # 使用 tuple() 函数，可以直接将生成器对象转换成元组
(1, 2, 3, 4, 5, 6, 7, 8, 9)
```

### 参数传递

在 python 中，类型属于对象，对象有不同类型的区分，变量是没有类型的：

```
a=[1,2,3]

a="Runoob"
```

以上代码中，**[1,2,3]** 是 List 类型，**"Runoob"** 是 String 类型，而变量 a 是没有类型，她仅仅是一个对象的引用（一个指针），可以是指向 List 类型对象，也可以是指向 String 类型对象。

### 可更改(mutable)与不可更改(immutable)对象

在 python 中，strings, tuples, 和 numbers 是不可更改的对象，而 list,dict 等则是可以修改的对象。

- **不可变类型：**变量赋值 **a=5** 后再赋值 **a=10**，这里实际是新生成一个 int 值对象 10，再让 a 指向它，而 5 被丢弃，不是改变 a 的值，相当于新生成了 a。
- **可变类型：**变量赋值 **la=[1,2,3,4]** 后再赋值 **la[2]=5** 则是将 list la 的第三个元素值更改，本身la没有动，只是其内部的一部分值被修改了。

python 函数的参数传递：

- **不可变类型：**类似 C++ 的值传递，如整数、字符串、元组。如 fun(a)，传递的只是 a 的值，没有影响 a 对象本身。如果在 fun(a) 内部修改 a 的值，则是新生成一个 a 的对象。
- **可变类型：**类似 C++ 的引用传递，如 列表，字典。如 fun(la)，则是将 la 真正的传过去，修改后 fun 外部的 la 也会受影响

python 中一切都是对象，严格意义我们不能说值传递还是引用传递，我们应该说传不可变对象和传可变对象。

#### 传不可变对象

```
def change(a):
    print(id(a))   # 指向的是同一个对象
    a=10
    print(id(a))   # 一个新对象
 
a=1
print(id(a))
change(a)
print(id(a))
```

结果

```
140710541461944
140710541461944
140710541462232
140710541461944
```

#### 传可变对象

```
def changeme( mylist ):
   "修改传入的列表"
   mylist.append([1,2,3,4])
   print ("函数内取值: ", mylist)
   return
 
# 调用changeme函数
mylist = [10,20,30]
changeme( mylist )
print ("函数外取值: ", mylist)
```

结果

```
函数内取值:  [10, 20, 30, [1, 2, 3, 4]]
函数外取值:  [10, 20, 30, [1, 2, 3, 4]]
```

### 参数

- 必需参数
- 关键字参数
- 默认参数
- 不定长参数

#### 必需参数

必需参数须以正确的顺序传入函数。调用时的数量必须和声明时的一样。

#### 关键字参数

关键字参数和函数调用关系紧密，函数调用使用关键字参数来确定传入的参数值。

**使用关键字参数允许函数调用时参数的顺序与声明时不一致**，因为 Python 解释器能够用参数名匹配参数值。

```
#可写函数说明
def printinfo( name, age ):
   "打印任何传入的字符串"
   print ("名字: ", name)
   print ("年龄: ", age)
   return
 
#调用printinfo函数
printinfo( age=50, name="runoob" )
```

#### 默认参数

调用函数时，如果没有传递参数，则会使用默认参数。

#### 不定长参数

你可能需要**一个函数能处理比当初声明时更多的参数**。这些参数叫做不定长参数，和上述 2 种参数不同，**声明时不会命名**。基本语法如下：

```
def functionname([formal_args,] *var_args_tuple ):
   "函数_文档字符串"
   function_suite
   return [expression]
```

**加了星号 * 的参数会以元组(tuple)的形式导入，存放所有未命名的变量参数。**

```
# 可写函数说明
def printinfo( arg1, *vartuple ):
   "打印任何传入的参数"
   print ("输出: ")
   print (arg1)
   print (vartuple)
 
# 调用printinfo 函数
printinfo( 70, 60, 50 )
```

如果在函数调用时没有指定参数，它就是一个空元组。我们也可以不向函数传递未命名的变量。

```
# 可写函数说明
def printinfo( arg1, *vartuple ):
   "打印任何传入的参数"
   print ("输出: ")
   print (arg1)
   for var in vartuple:
      print (var)
   return
 
# 调用printinfo 函数
printinfo( 10 )
printinfo( 70, 60, 50 )
```

加了两个星号 ***\*** 的参数会以字典的形式导入。

```
# 可写函数说明
def printinfo( arg1, **vardict ):
   "打印任何传入的参数"
   print ("输出: ")
   print (arg1)
   print (vardict)
 
# 调用printinfo 函数
printinfo(1, a=2,b=3)
```

```
输出: 
1
{'a': 2, 'b': 3}
```

如果单独出现星号 *****，则星号 ***** 后的参数必须用关键字传入：

```
>>> def f(a,b,*,c):
...     return a+b+c
... 
>>> f(1,2,3)   # 报错
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: f() takes 2 positional arguments but 3 were given
>>> f(1,2,c=3) # 正常
6
>>>
```



### 匿名函数

- lambda 函数拥有自己的命名空间，且不能访问自己参数列表之外或全局命名空间里的参数。

```
lambda [arg1 [,arg2,.....argn]]:expression
```

例：

```
sum = lambda arg1, arg2: arg1 + arg2
```

将匿名函数封装在一个函数内，这样可以使用同样的代码来创建多个匿名函数。

```
def myfunc(n):
  return lambda a : a * n
 
mydoubler = myfunc(2)
mytripler = myfunc(3)
 
print(mydoubler(11))
print(mytripler(11))
```

### 强制位置参数

Python3.8 新增了一个函数形参语法 / 用来指明函数形参必须使用指定位置参数，不能使用关键字参数的形式。

在以下的例子中，形参 a 和 b 必须使用指定位置参数，c 或 d 可以是位置形参或关键字形参，而 e 和 f 要求为关键字形参:

```
def f(a, b, /, c, d, *, e, f):
    print(a, b, c, d, e, f)
```

### 装饰器

**装饰器的应用场景：**

- **日志记录**: 装饰器可用于记录函数的调用信息、参数和返回值。
- **性能分析**: 可以使用装饰器来测量函数的执行时间。
- **权限控制**: 装饰器可用于限制对某些函数的访问权限。
- **缓存**: 装饰器可用于实现函数结果的缓存，以提高性能。

Python 装饰允许在不修改原有函数代码的基础上，动态地增加或修改函数的功能，装饰器本质上是一个接收函数作为输入并返回一个新的包装过后的函数的对象。

```
def decorator_function(original_function):
	def wrapper(*args, **kwargs):
    	\# 这里是在调用原始函数前添加的新功能
    	before_call_code()
    
    	result = original_function(*args, **kwargs)
    
    	\# 这里是在调用原始函数后添加的新功能
    	after_call_code()
    
    	return result
	return wrapper

\# 使用装饰器
@decorator_function
def target_function(arg1, arg2):
    pass # 原始函数的实现
```

**解析：**decorator 是一个装饰器函数，它接受一个函数 func 作为参数，并返回一个内部函数 wrapper，在 wrapper 函数内部，你可以执行一些额外的操作，然后调用原始函数 func，并返回其结果。

- `decorator_function` 是装饰器，它接收一个函数 `original_function` 作为参数。
- `wrapper` 是内部函数，它是实际会被调用的新函数，它包裹了原始函数的调用，并在其前后增加了额外的行为。
- 当我们使用 `@decorator_function` 前缀在 `target_function` 定义前，Python会自动将 `target_function` 作为参数传递给 `decorator_function`，然后将返回的 `wrapper` 函数替换掉原来的 `target_function`。

#### 使用装饰器

装饰器通过 **@** 符号应用在函数定义之前，例如：

```
@time_logger
def target_function():
    pass
```

等同于：

```
def target_function():
    pass
target_function = time_logger(target_function)
```

这会将 target_function 函数传递给 decorator 装饰器，并将返回的函数重新赋值给 target_function。从而，每次调用 target_function 时，实际上是调用了经过装饰器处理后的函数。

通过装饰器，开发者可以在保持代码整洁的同时，灵活且高效地扩展程序的功能。

#### 带参数的装饰器

装饰器函数也可以接受参数，例如：

```
def repeat(n):
	def decorator(func):
    	def wrapper(*args, **kwargs):
      		for _ in range(n):
        		result = func(*args, **kwargs)
      		return result
    	return wrapper
  	return decorator

@repeat(3)
def greet(name):
	print(f"Hello, {name}!")

greet("Alice")
```

以上代码中 repeat 函数是一个带参数的装饰器，它接受一个整数参数 n，然后返回一个装饰器函数。该装饰器函数内部定义了 wrapper 函数，在调用原始函数之前重复执行 n 次。因此，greet 函数在被 @repeat(3) 装饰后，会打印三次问候语。

#### 类装饰器

除了函数装饰器，Python 还支持类装饰器。类装饰器是包含 **__call__** 方法的类，它接受一个函数作为参数，并返回一个新的函数。



```
class DecoratorClass:
	def __init__(self, func):
    	self.func = func
  
	def __call__(self, *args, **kwargs):
    \# 在调用原始函数之前/之后执行的代码
    	result = self.func(*args, **kwargs)
    \# 在调用原始函数之后执行的代码
    	return result

@DecoratorClass
def my_function():
	pass
```

### 字典中遍历

```
>>> questions = ['name', 'quest', 'favorite color']
>>> answers = ['lancelot', 'the holy grail', 'blue']
>>> for q, a in zip(questions, answers):
...     print('What is your {0}?  It is {1}.'.format(q, a))
...
What is your name?  It is lancelot.
What is your quest?  It is the holy grail.
What is your favorite color?  It is blue.
```

### 输入和输出

表达式语句和 print() 函数，文件对象的 write() 方法

输出的形式更加多样， str.format() 函数来格式化输出值。

输出的值转成字符串，使用 repr() 或 str() 函数来实现。

- **str()：** 函数返回一个用户易读的表达形式。
- **repr()：** 产生一个解释器易读的表达形式。

 字符串对象

* rjust()：将字符串靠右, 并在左边填充空格

* zfill(n)：在数字的左边填充 n个0

* format()

```
>>> print('{}网址： "{}!"'.format('菜鸟教程', 'www.runoob.com'))
菜鸟教程网址： "www.runoob.com!"
```

括号及其里面的字符 (称作格式化字段) 将会被 format() 中的参数替换。

在括号中的数字用于指向传入对象在 format() 中的位置，如下所示：

```
>>> print('{0} 和 {1}'.format('Google', 'Runoob'))
Google 和 Runoob
>>> print('{1} 和 {0}'.format('Google', 'Runoob'))
Runoob 和 Google
```

如果在 format() 中使用了关键字参数, 那么它们的值会指向使用该名字的参数。

```
>>> print('{name}网址： {site}'.format(name='菜鸟教程', site='www.runoob.com'))
菜鸟教程网址： www.runoob.com
```

位置及关键字参数可以任意的结合:

```
>>> print('站点列表 {0}, {1}, 和 {other}。'.format('Google', 'Runoob', other='Taobao'))
站点列表 Google, Runoob, 和 Taobao。
```

