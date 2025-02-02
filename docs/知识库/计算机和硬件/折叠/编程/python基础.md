### 多种语言对比

非常难学的C语言，非常流行的Java语言，适合初学者的Basic语言，适合网页编程的JavaScript语言等等。

用Python可以做什么？可以做日常任务，比如自动备份你的MP3；可以做网站，很多著名的网站包括YouTube就是Python写的；可以做网络游戏的后台，很多在线游戏的后台都是Python开发的。总之就是能干很多很多事啦。

Python当然也有不能干的事情，比如写操作系统，这个只能用C语言写；写手机应用，只能用Swift/Objective-C（针对iPhone）和Java（针对Android）；写3D游戏，最好用C或C++。

如，完成同一个任务，C语言要写1000行代码，Java只需要写100行，而Python可能只要20行。

所以Python是一种相当高级的语言。

你也许会问，代码少还不好？代码少的代价是运行速度慢，C程序运行1秒钟，Java程序可能需要2秒，而Python程序可能就需要10秒。

那是不是越低级的程序越难学，越高级的程序越简单？表面上来说，是的，但是，在非常高的抽象计算中，高级的Python程序设计也是非常难学的，所以，高级程序语言不等于简单。

### 缺点

Python有哪些缺点呢？

第一个缺点就是**运行速度慢**，和C程序相比非常慢，因为Python是解释型语言，你的代码在执行时会一行一行地翻译成CPU能理解的机器码，这个翻译过程非常耗时，所以很慢。而C程序是运行前直接编译成CPU能执行的机器码，所以非常快。

但是大量的应用程序不需要这么快的运行速度，因为用户根本感觉不出来。例如开发一个下载MP3的网络应用程序，C程序的运行时间需要0.001秒，而Python程序的运行时间需要0.1秒，慢了100倍，但由于网络更慢，需要等待1秒，你想，用户能感觉到1.001秒和1.1秒的区别吗？这就好比F1赛车和普通的出租车在北京三环路上行驶的道理一样，虽然F1赛车理论时速高达400公里，但由于三环路堵车的时速只有20公里，因此，作为乘客，你感觉的时速永远是20公里。

第二个缺点就是代码不能加密。如果要发布你的Python程序，实际上就是发布源代码，这一点跟C语言不同，C语言不用发布源代码，只需要把编译后的机器码（也就是你在Windows上常见的xxx.exe文件）发布出去。要从机器码反推出C代码是不可能的，所以，凡是编译型的语言，都没有这个问题，而解释型的语言，则必须把源码发布出去。

这个缺点仅限于你要编写的软件需要卖给别人挣钱的时候。好消息是目前的互联网时代，靠卖软件授权的商业模式越来越少了，靠网站和移动应用卖服务的模式越来越多了，后一种模式不需要把源码给别人。

再说了，现在如火如荼的开源运动和互联网自由开放的精神是一致的，互联网上有无数非常优秀的像Linux一样的开源代码，我们千万不要高估自己写的代码真的有非常大的“商业价值”。那些大公司的代码不愿意开放的更重要的原因是代码写得太烂了，一旦开源，就没人敢用他们的产品了。

### 优点

Python是跨平台的，它可以运行在Windows、Mac和各种Linux/Unix系统上。在Windows上写Python程序，放到Linux上也是能够运行的。

Python就为我们提供了非常完善的基础代码库，覆盖了网络、文件、GUI、数据库、文本等大量内容，被形象地称作“内置电池（batteries included）”。用Python开发，许多功能不必从零编写，直接使用现成的即可。

除了内置的库外，Python还有大量的第三方库，也就是别人开发的，供你直接使用的东西。当然，如果你开发的代码通过很好的封装，也可以作为第三方库给别人使用。

许多大型网站就是用Python开发的，例如YouTube、Instagram，还有国内的豆瓣。很多大公司，包括Google、Yahoo等，甚至NASA都大量地使用Python。

龟叔给Python的定位是“优雅”、“明确”、“简单”，所以Python程序看上去总是简单易懂，初学者学Python，不但入门容易，而且将来深入下去，可以编写那些非常非常复杂的程序。

### 使用

学会如何把Python安装到计算机中，并且熟练打开和退出Python交互式环境；

在Windows上运行Python时，请先启动命令行，然后运行`python`；

在Mac和Linux上运行Python时，请打开终端，然后运行`python3`。

### python解释器

当我们编写Python代码时，我们得到的是一个包含Python代码的以`.py`为扩展名的文本文件。要运行代码，就需要Python解释器去执行`.py`文件。

由于整个Python语言从规范到解释器都是开源的，所以理论上，只要水平够高，任何人都可以编写Python解释器来执行Python代码（当然难度很大）。事实上，确实存在多种Python解释器。

#### CPython

当我们从[Python官方网站](https://www.python.org/)下载并安装好Python 3.x后，我们就直接获得了一个官方版本的解释器：CPython。这个解释器是用C语言开发的，所以叫CPython。在命令行下运行`python`就是启动CPython解释器。

CPython是使用最广的Python解释器。教程的所有代码也都在CPython下执行。

#### IPython

IPython是基于CPython之上的一个交互式解释器，也就是说，IPython只是在交互方式上有所增强，但是执行Python代码的功能和CPython是完全一样的。

CPython用`>>>`作为提示符，而IPython用`In [序号]:`作为提示符。

#### PyPy

PyPy是另一个Python解释器，它的目标是执行速度。PyPy采用[JIT技术](http://en.wikipedia.org/wiki/Just-in-time_compilation)，对Python代码进行动态编译（注意不是解释），所以可以显著提高Python代码的执行速度。

绝大部分Python代码都可以在PyPy下运行，但是PyPy和CPython有一些是不同的，这就导致相同的Python代码在两种解释器下执行可能会有不同的结果。如果你的代码要放到PyPy下执行，就需要了解[PyPy和CPython的不同点](http://pypy.readthedocs.org/en/latest/cpython_differences.html)。

#### Jython

Jython是运行在Java平台上的Python解释器，可以直接把Python代码编译成Java字节码执行。

#### IronPython

IronPython和Jython类似，只不过IronPython是运行在微软.Net平台上的Python解释器，可以直接把Python代码编译成.Net的字节码。

#### 小结

Python的解释器很多，但使用最广泛的还是CPython。如果要和Java或.Net平台交互，最好的办法不是用Jython或IronPython，而是通过网络调用来交互，确保各程序之间的独立性。

本教程的所有代码只确保在CPython 3.x版本下运行。请务必在本地安装CPython（也就是从Python官方网站下载的安装程序）。

### 命令行模式和Python交互模式

#### 命令行模式

在Windows开始菜单选择“命令提示符”，就进入到命令行模式，它的提示符类似`C:\>`：

#### Python交互模式

在命令行模式下敲命令`python`，就看到类似如下的一堆文本输出，然后就进入到Python交互模式，它的提示符是`>>>`。

在Python交互模式下输入`exit()`并回车，就退出了Python交互模式，并回到命令行模式



命令行模式下执行`python hello.py`运行一个`.py`文件。

在Windows下，如果要切换到其他盘符，例如切换到`D:`盘，需要输入`D:`

用`cd`命令切换到`work`目录

### 直接运行py文件

有同学问，能不能像.exe文件那样直接运行`.py`文件呢？在Windows上是不行的，但是，在Mac和Linux上是可以的，方法是在`.py`文件的第一行加上一个特殊的注释：

```python
#!/usr/bin/env python3

print('hello, world')
```

然后，通过命令给`hello.py`以执行权限：

```plain
$ chmod a+x hello.py
```

就可以直接运行`hello.py`了，比如在Mac下运行：

```plain
$ ./hello.py
hello, world
```

### 注释和缩进

以`#`开头的语句是注释，注释是给人看的，可以是任意内容，解释器会忽略掉注释。其他每一行都是一个语句，当语句以冒号`:`结尾时，缩进的语句视为代码块。

缩进有利有弊。好处是强迫你写出格式化的代码，但没有规定缩进是几个空格还是Tab。按照约定俗成的惯例，应该始终坚持使用*4个空格*的缩进。

缩进的另一个好处是强迫你写出缩进较少的代码，你会倾向于把一段很长的代码拆分成若干函数，从而得到缩进较少的代码。

缩进的坏处就是“复制－粘贴”功能失效了，这是最坑爹的地方。当你重构代码时，粘贴过去的代码必须重新检查缩进是否正确。此外，IDE很难像格式化Java代码那样格式化Python代码。

最后，请务必注意，Python程序是*大小写敏感*的，如果写错了大小写，程序会报错。

#### 多行注释

使用三个单引号 ''' 或三个双引号 """

```
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 文件名：test.py


'''
这是多行注释，使用单引号。
这是多行注释，使用单引号。
这是多行注释，使用单引号。
'''

"""
这是多行注释，使用双引号。
这是多行注释，使用双引号。
这是多行注释，使用双引号。
"""
```



### 数据类型和变量

#### 整数

- 任意大小的整数
- 十六进制用`0x`前缀和0-9，a-f表示
- Python允许在数字中间以`_`分隔

#### 浮点数

- 可以用数学写法，如`1.23`，`3.14`，`-9.01`

- 对于很大或很小的浮点数，就必须用科学计数法表示，把10用e替代，1.23x109就是`1.23e9`
- 整数和浮点数在计算机内部存储的方式是不同的，整数运算永远是精确的（除法难道也是精确的？是的！），而浮点数运算则可能会有四舍五入的误差。

#### 字符串

- 以单引号`'`或双引号`"`括起来的任意文本

- 用转义字符`\`来标识`'`和 `"`，如`'I\'m \"OK\"!'`，表示的字符串内容是：`I'm "OK"!`

- 其他转义字符：`\n`表示换行，`\t`表示制表符，字符`\`本身也要转义，所以`\\`表示的字符就是`\

- 用`r''`表示`''`内部的字符串默认不转义，如`print(r'\\\t\\')`

- 用`'''...'''`的格式表示多行内容

  ```
  >>> print('''line1
  ... line2
  ... line3''')
  ```

- 多行字符串`'''...'''`还可以在前面加上`r`使用，请自行测试：

  ```python
  print(r'''hello,\n
  world''')
  ```

#### 布尔值

- 只有`True`、`False`两种值

- 可以用`and`、`or`和`not`运算。
  - `and`运算是与运算，只有所有都为`True`，`and`运算结果才是`True`：
  - `or`运算是或运算，只要其中有一个为`True`，`or`运算结果就是`True`：
  - `not`运算是非运算，它是一个单目运算符，把`True`变成`False`，`False`变成`True`：

#### 空值

- 空值是Python里一个特殊的值，用`None`表示。`None`不能理解为`0`，因为`0`是有意义的，而`None`是一个特殊的空值。

#### 变量

这种变量本身类型不固定的语言称之为*动态语言*，与之对应的是*静态语言*。静态语言在定义变量时必须指定变量类型，如果赋值的时候类型不匹配，就会报错。

和静态语言相比，动态语言更灵活

#### 常量

通常用全部大写的变量名表示常量，但其实Python根本没有任何机制保证它不会被改变

#### 两种除法

- 一种除法是`/`，`/`除法计算结果是浮点数，即使是两个整数恰好整除，结果也是浮点数：

  ```
  >>> 9 / 3
  3.0
  >>> 10 / 3
  3.3333333333333335
  ```

- 还有一种除法是`//`，称为地板除，只取结果的整数部分，两个整数的除法仍然是整数：

  ```plain
  >>> 10 // 3
  3
  ```

- Python还提供一个余数运算，可以得到两个整数相除的余数：

  ```
  >>> 10 % 3
  1
  ```

  #### 小结

  Python支持多种数据类型，在计算机内部，可以把任何数据都看成一个“对象”，而变量就是在程序中用来指向这些数据对象的，对变量赋值就是把数据和变量给关联起来。

  对变量赋值`x = y`是把变量`x`指向真正的对象，该对象是变量`y`所指向的。随后对变量`y`的赋值*不影响*变量`x`的指向。

  注意：Python的整数没有大小限制，而某些语言的整数根据其存储长度是有大小限制的，例如Java对32位整数的范围限制在`-2147483648`-`2147483647`。

  Python的浮点数也没有大小限制，但是超出一定范围就直接表示为`inf`（无限大）。

### *字符编码

我们已经讲过了，字符串也是一种数据类型，但是，字符串比较特殊的是还有一个编码问题。

因为计算机只能处理数字，如果要处理文本，就必须先把文本转换为数字才能处理。最早的计算机在设计时采用8个比特（bit）作为一个字节（byte），所以，一个字节能表示的最大的整数就是255（二进制11111111=十进制255），如果要表示更大的整数，就必须用更多的字节。比如两个字节可以表示的最大整数是`65535`，4个字节可以表示的最大整数是`4294967295`。

由于计算机是美国人发明的，因此，最早只有127个字符被编码到计算机里，也就是大小写英文字母、数字和一些符号，这个编码表被称为`ASCII`编码，比如大写字母`A`的编码是`65`，小写字母`z`的编码是`122`。

但是要处理中文显然一个字节是不够的，至少需要两个字节，而且还不能和ASCII编码冲突，所以，中国制定了`GB2312`编码，用来把中文编进去。

你可以想得到的是，全世界有上百种语言，日本把日文编到`Shift_JIS`里，韩国把韩文编到`Euc-kr`里，各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。

![char-encoding-problem](https://liaoxuefeng.com/books/python/basic/string-encoding/encoding.png)

因此，Unicode字符集应运而生。Unicode把所有语言都统一到一套编码里，这样就不会再有乱码问题了。

Unicode标准也在不断发展，但最常用的是UCS-16编码，用两个字节表示一个字符（如果要用到非常偏僻的字符，就需要4个字节）。现代操作系统和大多数编程语言都直接支持Unicode。

现在，捋一捋ASCII编码和Unicode编码的区别：ASCII编码是1个字节，而Unicode编码通常是2个字节。

字母`A`用ASCII编码是十进制的`65`，二进制的`01000001`；

字符`0`用ASCII编码是十进制的`48`，二进制的`00110000`，注意字符`'0'`和整数`0`是不同的；

汉字`中`已经超出了ASCII编码的范围，用Unicode编码是十进制的`20013`，二进制的`01001110 00101101`。

你可以猜测，如果把ASCII编码的`A`用Unicode编码，只需要在前面补0就可以，因此，`A`的Unicode编码是`00000000 01000001`。

新的问题又出现了：如果统一成Unicode编码，乱码问题从此消失了。但是，如果你写的文本基本上全部是英文的话，用Unicode编码比ASCII编码需要多一倍的存储空间，在存储和传输上就十分不划算。

所以，本着节约的精神，又出现了把Unicode编码转化为“可变长编码”的`UTF-8`编码。UTF-8编码把一个Unicode字符根据不同的数字大小编码成1-6个字节，常用的英文字母被编码成1个字节，汉字通常是3个字节，只有很生僻的字符才会被编码成4-6个字节。如果你要传输的文本包含大量英文字符，用UTF-8编码就能节省空间：

| 字符 | ASCII    | Unicode           | UTF-8                      |
| ---- | -------- | ----------------- | -------------------------- |
| A    | 01000001 | 00000000 01000001 | 01000001                   |
| 中   |          | 01001110 00101101 | 11100100 10111000 10101101 |

从上面的表格还可以发现，UTF-8编码有一个额外的好处，就是ASCII编码实际上可以被看成是UTF-8编码的一部分，所以，大量只支持ASCII编码的历史遗留软件可以在UTF-8编码下继续工作。

搞清楚了ASCII、Unicode和UTF-8的关系，我们就可以总结一下现在计算机系统通用的字符编码工作方式：

在计算机内存中，统一使用Unicode编码，当需要保存到硬盘或者需要传输的时候，就转换为UTF-8编码。

用记事本编辑的时候，从文件读取的UTF-8字符被转换为Unicode字符到内存里，编辑完成后，保存的时候再把Unicode转换为UTF-8保存到文件：

![rw-file-utf-8](https://liaoxuefeng.com/books/python/basic/string-encoding/file.png)

浏览网页的时候，服务器会把动态生成的Unicode内容转换为UTF-8再传输到浏览器：

![web-utf-8](https://liaoxuefeng.com/books/python/basic/string-encoding/webpage.png)

所以你看到很多网页的源码上会有类似`<meta charset="UTF-8" />`的信息，表示该网页正是用的UTF-8编码。

### 字符串

在最新的Python 3版本中，字符串是以Unicode编码的，也就是说，Python的字符串支持多语言，可以包含中文

- `ord()`函数获取字符的整数表示

- `chr()`函数把编码转换为对应的字符

  ```plain
  >>> ord('A')
  65
  >>> ord('中')
  20013
  >>> chr(66)
  'B'
  >>> chr(25991)
  '文'
  ```

- 如果知道字符的整数编码，还可以用十六进制这么写`str`：

  ```
  >>> '\u4e2d\u6587'
  '中文'
  ```

  - 由于Python的字符串类型是`str`，在内存中以Unicode表示，一个字符对应若干个字节。如果要在网络上传输，或者保存到磁盘上，就需要把`str`变为以字节为单位的`bytes`。

  - Python对`bytes`类型的数据用带`b`前缀的单引号或双引号表示：

    ```
    x = b'ABC'
    ```

    要注意区分`'ABC'`和`b'ABC'`，前者是`str`，后者虽然内容显示得和前者一样，但`bytes`的每个字符都只占用一个字节。

  - 以Unicode表示的`str`通过`encode()`方法可以编码为指定的`bytes`

    ```
    >>> 'ABC'.encode('ascii')
    b'ABC'
    >>> '中文'.encode('utf-8')
    b'\xe4\xb8\xad\xe6\x96\x87'
    >>> '中文'.encode('ascii')
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    UnicodeEncodeError: 'ascii' codec can't encode characters in position 0-1: ordinal not in range(128)
    ```

- 在`bytes`中，无法显示为ASCII字符的字节，用`\x##`显示。

- 反过来，如果我们从网络或磁盘上读取了字节流，那么读到的数据就是`bytes`。要把`bytes`变为`str`，就需要用`decode()`方法：

  ```
  >>> b'ABC'.decode('ascii')
  'ABC'
  >>> b'\xe4\xb8\xad\xe6\x96\x87'.decode('utf-8')
  '中文'
  ```

  如果`bytes`中包含无法解码的字节，`decode()`方法会报错：

  ```
  >>> b'\xe4\xb8\xad\xff'.decode('utf-8')
  Traceback (most recent call last):
    ...
  UnicodeDecodeError: 'utf-8' codec can't decode byte 0xff in position 3: invalid start byte
  ```

  如果`bytes`中只有一小部分无效的字节，可以传入`errors='ignore'`忽略错误的字节：

  ```
  >>> b'\xe4\xb8\xad\xff'.decode('utf-8', errors='ignore')
  '中'
  ```

- 要计算`str`包含多少个字符，可以用`len()`函数：

  ```
  >>> len('ABC')
  3
  >>> len('中文')
  2
  ```

  - `len()`函数计算的是`str`的字符数，如果换成`bytes`，`len()`函数就计算字节数：

    ```plain
    >>> len('中文'.encode('utf-8'))
    6
    ```

    1个中文字符经过UTF-8编码后通常会占用3个字节，而1个英文字符只占用1个字节。

    在操作字符串时，我们经常遇到`str`和`bytes`的互相转换。为了避免乱码问题，应当始终坚持使用UTF-8编码对`str`和`bytes`进行转换。

- 当你的源代码中包含中文的时候，在保存源代码时，就需要务必指定保存为UTF-8编码

- 由于Python源代码也是一个文本文件，所以，当你的源代码中包含中文的时候，在保存源代码时，就需要务必指定保存为UTF-8编码。当Python解释器读取源代码时，为了让它按UTF-8编码读取，我们通常在文件开头写上这两行：

  ```
  #!/usr/bin/env python3
  # -*- coding: utf-8 -*-
  
  ```

### 格式化

输出格式化的字符串

- 使用%?实现

  ```plain
  >>> 'Hello, %s' % 'world'
  'Hello, world'
  >>> 'Hi, %s, you have $%d.' % ('Michael', 1000000)
  'Hi, Michael, you have $1000000.'
  ```

- 在字符串内部，`%s`表示用字符串替换，`%d`表示用整数替换，有几个`%?`占位符，后面就跟几个变量或者值，顺序要对应好。如果只有一个`%?`，括号可以省略。
- 通用：`%s`

- | 占位符 | 替换内容     |
  | ------ | ------------ |
  | %d     | 整数         |
  | %f     | 浮点数       |
  | %s     | 字符串       |
  | %x     | 十六进制整数 |

- 格式化整数和浮点数可以指定是否补0和整数与小数的位数

  ```
  print('%2d-%02d' % (3, 1))
  print('%.2f' % 3.1415926)
  ```

- 转义，用%%来表示一个%

#### 整数输出

%o —— oct 八进制
%d —— dec 十进制
%x —— hex 十六进制

#### 浮点数输出

%f ——保留小数点后面六位有效数字
　　%.3f，保留3位小数位
%e ——保留小数点后面六位有效数字，**指数形式输出**
　　%.3e，保留3位小数位，使用科学计数法
%g ——在保证六位有效数字的前提下，使用**小数方式**，否则使用科学计数法
　　%.3g，保留3位有效数字，使用小数或科学计数法

```
>>> print('%f' % 1.11)  # 默认保留6位小数
1.110000
>>> print('%.1f' % 1.11)  # 取1位小数
1.1
>>> print('%e' % 1.11)  # 默认6位小数，用科学计数法
1.110000e+00
>>> print('%.3e' % 1.11)  # 取3位小数，用科学计数法
1.110e+00
>>> print('%g' % 1111.1111)  # 默认6位有效数字
1111.11
>>> print('%.7g' % 1111.1111)  # 取7位有效数字
1111.111
>>> print('%.2g' % 1111.1111)  # 取2位有效数字，自动转换为科学计数法
1.1e+03
```

#### 内置round()

#### 字符串输出

%s
%10s——右对齐，占位符10位
%-10s——左对齐，占位符10位
%.2s——截取2位字符串
%10.2s——10位占位符，截取两位字符串

#### format()

另一种格式化字符串的方法是使用字符串的`format()`方法，它会用传入的参数依次替换字符串内的占位符`{0}`、`{1}`……，不过这种方式写起来比%要麻烦得多：

```plain
>>> 'Hello, {0}, 成绩提升了 {1:.1f}%'.format('小明', 17.125)
'Hello, 小明, 成绩提升了 17.1%'
```

#### f-string

最后一种格式化字符串的方法是使用以`f`开头的字符串，称之为`f-string`，它和普通字符串不同之处在于，字符串如果包含`{xxx}`，就会以对应的变量替换：

```plain
>>> r = 2.5
>>> s = 3.14 * r ** 2
>>> print(f'The area of a circle with radius {r} is {s:.2f}')
The area of a circle with radius 2.5 is 19.62
```

### list

list是一种有序的集合，可以随时添加和删除其中的元素。

- 最后一个元素的索引是`len(classmates) - 1`。

- 如果要取最后一个元素，除了计算索引位置外，还可以用`-1`做索引，直接获取最后一个元素：

- 可以往list中追加元素到末尾：

  ```plain
  >>> classmates.append('Adam')
  ```

- 可以把元素插入到指定的位置，比如索引号为`1`的位置：

  ```plain
  >>> classmates.insert(1, 'Jack')
  ```

- 要删除list末尾的元素，用`pop()`方法：

  ```plain
  >>> classmates.pop()
  'Adam'
  ```

- 要删除指定位置的元素，用`pop(i)`方法，其中`i`是索引位置：

  ```plain
  >>> classmates.pop(1)
  'Jack'
  ```

- 要把某个元素替换成别的元素，可以直接赋值给对应的索引位置：

  ```plain
  >>> classmates[1] = 'Sarah'
  ```

- list里面的元素的数据类型也可以不同

- list元素也可以是另一个list

### tuple

另一种有序列表叫元组：tuple。tuple和list非常类似，但是tuple**一旦初始化就不能修改**

```plain
>>> classmates = ('Michael', 'Bob', 'Tracy')
```

没有append()，insert()这样的方法，因为tuple不可变，所以代码更安全。如果可能，能用tuple代替list就尽量用tuple。

- “可变的”tuple：

  ```
  >>> t = ('a', 'b', ['A', 'B'])
  >>> t[2][0] = 'X'
  >>> t[2][1] = 'Y'
  >>> t
  ('a', 'b', ['X', 'Y'])
  ```

  list本身内容变了但其对list的“指向”没有变

### 条件判断

例子：

```
age = 3
if age >= 18:
    print('your age is', age)
    print('adult')
else:
    print('your age is', age)
    print('teenager')
```

`elif`

```
age = 3
if age >= 18:
    print('adult')
elif age >= 6:
    print('teenager')
else:
    print('kid')
```

简写：

```python
if x:
    print('True')
```

只要`x`是非零数值、非空字符串、非空list等，就判断为`True`，否则为`False`。

input()函数返回的是str类型，不能与数字比较，需要`int()`函数来将其转化为整数类型：

### 模式匹配

使用`match`语句替代`if ... elif ... elif ... else ...`

```python
score = 'B'

match score:
    case 'A':
        print('score is A.')
    case 'B':
        print('score is B.')
    case 'C':
        print('score is C.')
    case _: # _表示匹配到其他任何情况
        print('score is ???.')
```

#### 复杂匹配

`match`语句除了可以匹配简单的单个值外，还可以匹配多个值、匹配一定范围，并且把匹配后的值绑定到变量：

```python
age = 15

match age:
    case x if x < 10:
        print(f'< 10 years old: {x}')
    case 10:
        print('10 years old.')
    case 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18:
        print('11~18 years old.')
    case 19:
        print('19 years old.')
    case _:
        print('not sure.')
```

#### 匹配列表

`match`语句还可以匹配列表

```python
args = ['gcc', 'hello.c', 'world.c']
# args = ['clean']
# args = ['gcc']

match args:
    # 如果仅出现gcc，报错:
    case ['gcc']:
        print('gcc: missing source file(s).')
    # 出现gcc，且至少指定了一个文件:
    case ['gcc', file1, *files]:
        print('gcc compile: ' + file1 + ', ' + ', '.join(files))
    # 仅出现clean:
    case ['clean']:
        print('clean')
    case _:
        print('invalid command.')
```

第一个`case ['gcc']`表示列表仅有`'gcc'`一个字符串，没有指定文件名，报错；

第二个`case ['gcc', file1, *files]`表示列表第一个字符串是`'gcc'`，第二个字符串绑定到变量`file1`，后面的任意个字符串绑定到`*files`（符号`*`的作用将在[函数的参数](https://liaoxuefeng.com/books/python/function/parameter/index.html)中讲解），它实际上表示至少指定一个文件；

第三个`case ['clean']`表示列表仅有`'clean'`一个字符串；

最后一个`case _`表示其他所有情况。

可见，`match`语句的匹配规则非常灵活，可以写出非常简洁的代码。

### 循环

Python的循环有两种，一种是for...in循环，依次把list或tuple中的每个元素迭代出来

```python
names = ['Michael', 'Bob', 'Tracy']
for name in names:
    print(name)
```

执行这段代码，会依次打印`names`的每一个元素

`range()`函数，可以生成一个整数序列，再通过`list()`函数可以转换为list。比如`range(5)`生成的序列是从0开始小于5的整数：

```plain
>>> list(range(5))
[0, 1, 2, 3, 4]
```

第二种循环是while循环，只要条件满足，就不断循环，条件不满足时退出循环。

在循环中，`break`语句可以提前退出循环。

在循环过程中，也可以通过`continue`语句，跳过当前的这次循环，直接开始下一次循环。

有些时候，如果代码写得有问题，会让程序陷入“死循环”，也就是永远循环下去。这时可以用`Ctrl+C`退出程序，或者强制结束Python进程。

```
>>> r = []
>>> n = 3
>>> for i in range(n):
...     r.append(L[i])
... 
>>> r
['Michael', 'Sarah', 'Tracy']
```

### dict

Python内置了字典：dict的支持，dict全称dictionary，在其他语言中也称为map，使用键-值（key-value）存储，具有极快的查找速度。

用Python写一个dict如下：

```plain
>>> d = {'Michael': 95, 'Bob': 75, 'Tracy': 85}
>>> d['Michael']
95
```

- 把数据放入dict的方法，除了初始化时指定外，还可以通过key放入：

  ```plain
  >>> d['Adam'] = 67
  ```

- 一个key只能对应一个value，

- 如果如果访问不存在的key或赋予不存在的key值，dict就会报错

- 要避免key不存在的错误，有两种办法

  - 一是通过`in`判断key是否存在：

  ```plain
  >>> 'Thomas' in d
  False
  ```

  - 二是通过dict提供的`get()`方法，如果key不存在，可以返回`None`，或者自己指定的value：

    ```plain
    >>> d.get('Thomas')
    >>> d.get('Thomas', -1)
    -1
    ```

    注意：返回`None`的时候Python的交互环境不显示结果。

- 要删除一个key，用`pop(key)`方法

  ```
  d.pop('Bob')
  ```

- dict内部存放的顺序和key放入的顺序是没有关系的

#### dict与list的特点

和list比较，dict有以下几个特点：

1. 查找和插入的速度极快，不会随着key的增加而变慢；
2. 需要占用大量的内存，内存浪费多。

而list相反：

1. 查找和插入的时间随着元素的增加而增加；
2. 占用空间小，浪费内存很少。

所以，dict是用空间来换取时间的一种方法。



这是因为dict根据key来计算value的存储位置，如果每次计算相同的key得出的结果不同，那dict内部就完全混乱了。这个通过key计算位置的算法称为哈希算法（Hash）。

要保证hash的正确性，作为key的对象就不能变。在Python中，字符串、整数等都是不可变的，因此，可以放心地作为key。而list是可变的，就不能作为key

### set

set和dict类似，也是**一组key的集合，但不存储value**。由于key不能重复，所以，在set中，**没有重复的key**。

- 要创建一个set，用`{x,y,z,...}`列出每个元素：

  ```plain
  >>> s = {1, 2, 3}
  ```

- 或者提供一个list作为输入集合：

  ```plain
  >>> s = set([1, 2, 3])
  ```

- 重复元素在set中自动被过滤：

  ```plain
  >>> s = {1, 1, 2, 2, 3, 3}
  >>> s
  {1, 2, 3}
  ```

- 通过`add(key)`方法可以添加元素到set中

- 通过`remove(key)`方法可以删除元素：

- set可以看成数学意义上的无序和无重复元素的集合，因此，两个set可以做数学意义上的交集、并集等操作：

  ```plain
  >>> s1 = {1, 2, 3}
  >>> s2 = {2, 3, 4}
  >>> s1 & s2
  {2, 3}
  >>> s1 | s2
  {1, 2, 3, 4}
  ```

#### 再议不可变对象

上面我们讲了，str是不变对象，而list是可变对象。

对于不变对象来说，调用对象自身的任意方法，也不会改变该对象自身的内容。相反，这些方法会创建新的对象并返回，这样，就保证了不可变对象本身永远是不可变的。例如：

```plain
>>> a = 'abc'
>>> b = a.replace('a', 'A')
>>> b
'Abc'
>>> a
'abc'
```

### 函数

#### 内置函数

- 求绝对值的函数`abs`，只有一个参数

- `max()`可以接收任意多个参数，并返回最大的那个

- 数据类型转换函数，如`int()`函数可以把其他数据类型转换为整数，另有`bool()`，`float()`等函数

把函数名赋给一个变量，相当于给这个函数起了一个“别名”

```
>>> a = abs # 变量a指向abs函数
>>> a(-1) # 所以也可以通过a调用abs函数
1
```

因为函数名其实就是指向一个函数对象的引用

#### 定义函数

例：

```
def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x
```

如果你已经把`my_abs()`的函数定义保存为`abstest.py`文件了，那么，可以在该文件的当前目录下启动Python解释器，用`from abstest import my_abs`来导入`my_abs()`函数，注意`abstest`是文件名（不含`.py`扩展名）：

##### 空函数

定义一个什么事也不做的空函数，可以用`pass`语句：

```python
def nop():
    pass
```

`pass`可以用来作为占位符，比如现在还没想好怎么写函数的代码，就可以先放一个`pass`，让代码能运行起来。

`pass`还可以用在其他语句里，比如：

```python
if age >= 18:
    pass
```

缺少了`pass`，代码运行就会有语法错误。

##### 参数检查

- 参数个数不对，Python解释器会自动检查出来，并抛出`TypeError`

- 参数类型不对，Python解释器就无法帮我们检查

  ```plain
  >>> my_abs('A')
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
    File "<stdin>", line 2, in my_abs
  TypeError: unorderable types: str() >= int()
  >>> abs('A')
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  TypeError: bad operand type for abs(): 'str'
  ```

当传入了不恰当的参数时，内置函数`abs`会检查出参数错误，而我们定义的`my_abs`没有参数检查，会导致`if`语句出错，出错信息和`abs`不一样。所以，这个函数定义不够完善。

修改一下`my_abs`的定义，对参数类型做检查，只允许整数和浮点数类型的参数。数据类型检查可以用内置函数`isinstance()`实现：

```
def my_abs(x):
    if not isinstance(x, (int, float)):
        raise TypeError('bad operand type')
    if x >= 0:
        return x
    else:
        return -x
```

添加了参数检查后，如果传入错误的参数类型，函数就可以抛出一个错误：

```
my_abs('A')
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
File "<stdin>", line 3, in my_abs
TypeError: bad operand type
```

##### 返回多个值

```python
import math

def move(x, y, step, angle=0):
    nx = x + step * math.cos(angle)
    ny = y - step * math.sin(angle)
    return nx, ny
```

然后，我们就可以同时获得返回值：

```plain
>>> x, y = move(100, 100, 60, math.pi / 6)
>>> print(x, y)
151.96152422706632 70.0
```

但其实这只是一种假象，Python函数返回的仍然是单一值：

```plain
>>> r = move(100, 100, 60, math.pi / 6)
>>> print(r)
(151.96152422706632, 70.0)
```

其实返回值是一个tuple。在语法上，返回一个tuple可以省略括号，而多个变量可以同时接收一个tuple，按位置赋给对应的值，所以，Python的函数返回多值其实就是返回一个tuple，但写起来更方便。

#### 函数的参数

Python的函数定义非常简单，但灵活度却非常大。除了正常定义的必选参数外，还可以使用**默认参数**、可变参数和**关键字参数**，使得函数定义出来的接口，不但能处理复杂的参数，还可以简化调用者的代码。

##### 默认参数

如默认n为2：

```python
def power(x, n=2):
    s = 1
    while n > 0:
        n = n - 1
        s = s * x
    return s
```

这样，当我们调用`power(5)`时，相当于调用`power(5, 2)`

设置默认参数时，有几点要注意：

- 一是必选参数在前，默认参数在后，否则Python的解释器会报错；

- 二是如何设置默认参数。
  - 当函数有多个参数时，把变化大的参数放前面，变化小的参数放后面。变化小的参数就可以作为默认参数。

默认参数降低了函数调用的难度，而一旦需要更复杂的调用时，又可以传递更多的参数来实现。无论是简单调用还是复杂调用，函数只需要定义一个。

我们可以把年龄和城市设为默认参数：

```python
def enroll(name, gender, age=6, city='Beijing'):
    print('name:', name)
    print('gender:', gender)
    print('age:', age)
    print('city:', city)
```

这样，大多数学生注册时不需要提供年龄和城市，只提供必须的两个参数：

```plain
>>> enroll('Sarah', 'F')
name: Sarah
gender: F
age: 6
city: Beijing
```

只有与默认参数不符的学生才需要提供额外的信息：

```python
enroll('Bob', 'M', 7)
enroll('Adam', 'M', city='Tianjin')
```

可以不按顺序提供部分默认参数。当不按顺序提供部分默认参数时，需要把参数名写上。比如调用`enroll('Adam', 'M', city='Tianjin')`

默认参数有个最大的坑，演示如下：

- 先定义一个函数，传入一个list，添加一个`END`再返回：

  ```python
  def add_end(L=[]):
      L.append('END')
      return L
  ```

  当你正常调用时，结果似乎不错：

  ```plain
  >>> add_end([1, 2, 3])
  [1, 2, 3, 'END']
  >>> add_end(['x', 'y', 'z'])
  ['x', 'y', 'z', 'END']
  ```

  当你使用默认参数调用时，一开始结果也是对的：

  ```plain
  >>> add_end()
  ['END']
  ```

  但是，再次调用`add_end()`时，结果就不对了：

  ```plain
  >>> add_end()
  ['END', 'END']
  >>> add_end()
  ['END', 'END', 'END']
  ```

Python函数在定义的时候，默认参数`L`的值就被计算出来了，即`[]`，因为默认参数`L`也是一个变量，它指向对象`[]`，每次调用该函数，如果改变了`L`的内容，则下次调用时，默认参数的内容就变了，不再是函数定义时的`[]`了。

> 定义默认参数要牢记一点：默认参数必须指向不变对象！

要修改上面的例子，我们可以用`None`这个不变对象来实现：

```python
def add_end(L=None):
    if L is None:
        L = []
    L.append('END')
    return L
```

##### 可变参数

可变参数允许你传入0个或任意个参数，这些可变参数在函数调用时自动组装为一个tuple。

```python
def calc(*numbers):
    sum = 0
    for n in numbers:
        sum = sum + n * n
    return sum
```

调用：

```
>>> calc(1, 2, 3)
14
>>> calc(1, 3, 5, 7)
84
```

传入一个已有的list或者tuple：

```
>>> nums = [1, 2, 3]
>>> calc(*nums)#*nums表示把nums这个list的所有元素作为可变参数传进去。
14
>>> calc(nums[0], nums[1], nums[2])
14
```

##### 关键字参数

关键字参数允许你传入0个或任意个含参数名的参数，这些关键字参数在函数内部自动组装为一个dict。

关键字参数可以扩展函数的功能。

示例：

```python
def person(name, age, **kw):
    print('name:', name, 'age:', age, 'other:', kw)
```

关键字参数`kw`.

在调用该函数时，可以只传入必选参数：

```plain
>>> person('Michael', 30)
name: Michael age: 30 other: {}
```

也可以传入任意个数的关键字参数：

```plain
>>> person('Bob', 35, city='Beijing')
name: Bob age: 35 other: {'city': 'Beijing'}
>>> person('Adam', 45, gender='M', job='Engineer')
name: Adam age: 45 other: {'gender': 'M', 'job': 'Engineer'}
```

- 传入已有的dict作为参数

  ```plain
  >>> extra = {'city': 'Beijing', 'job': 'Engineer'}
  >>> person('Jack', 24, city=extra['city'], job=extra['job'])
  name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}
  ```

  简化写法：

  ```plain
  >>> extra = {'city': 'Beijing', 'job': 'Engineer'}
  >>> person('Jack', 24, **extra)
  name: Jack age: 24 other: {'city': 'Beijing', 'job': 'Engineer'}
  ```

  `**extra`表示把`extra`这个dict的所有key-value用关键字参数传入到函数的`**kw`参数

##### 命名关键字参数

- 函数内检查参数

  ```python
  def person(name, age, **kw):
      if 'city' in kw:
          # 有city参数
          pass
      if 'job' in kw:
          # 有job参数
          pass
      print('name:', name, 'age:', age, 'other:', kw)
  ```

但是调用者仍可以传入不受限制的关键字参数，如果要限制关键字参数的名字，就可以用命名关键字参数，例如，只接收`city`和`job`作为关键字参数。这种方式定义的函数如下：

```python
def person(name, age, *, city, job):
    print(name, age, city, job)
```

命名关键字参数需要一个特殊分隔符`*`，`*`后面的参数被视为命名关键字参数。

- 如果函数定义中已经有了一个可变参数，后面跟着的命名关键字参数就不再需要一个特殊分隔符`*`了：

  ```python
  def person(name, age, *args, city, job):
      print(name, age, args, city, job)
  ```

- 命名关键字参数可以有默认值

  ```python
  def person(name, age, *, city='Beijing', job):
      print(name, age, city, job)
  ```

##### 参数组合

参数定义的顺序必须是：必选参数、默认参数、可变参数、命名关键字参数和关键字参数。

```python
def f1(a, b, c=0, *args, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'args =', args, 'kw =', kw)

def f2(a, b, c=0, *, d, **kw):
    print('a =', a, 'b =', b, 'c =', c, 'd =', d, 'kw =', kw)
```

通过一个tuple和dict，你也可以调用上述函数：

```plain
>>> args = (1, 2, 3, 4)
>>> kw = {'d': 99, 'x': '#'}
>>> f1(*args, **kw)
a = 1 b = 2 c = 3 args = (4,) kw = {'d': 99, 'x': '#'}
>>> args = (1, 2, 3)
>>> kw = {'d': 88, 'x': '#'}
>>> f2(*args, **kw)
a = 1 b = 2 c = 3 d = 88 kw = {'x': '#'}
```

对于任意函数，都可以通过类似`func(*args, **kw)`的形式调用它，无论它的参数是如何定义的。

##### 小结

Python的函数具有非常灵活的参数形态，既可以实现简单的调用，又可以传入非常复杂的参数。

默认参数一定要用不可变对象，如果是可变对象，程序运行时会有逻辑错误！

要注意定义可变参数和关键字参数的语法：

`*args`是可变参数，args接收的是一个tuple；

`**kw`是关键字参数，kw接收的是一个dict。

以及调用函数时如何传入可变参数和关键字参数的语法：

可变参数既可以直接传入：`func(1, 2, 3)`，又可以先组装list或tuple，再通过`*args`传入：`func(*(1, 2, 3))`；

关键字参数既可以直接传入：`func(a=1, b=2)`，又可以先组装dict，再通过`**kw`传入：`func(**{'a': 1, 'b': 2})`。

使用`*args`和`**kw`是Python的习惯写法，当然也可以用其他参数名，但最好使用习惯用法。

命名的关键字参数是为了限制调用者可以传入的参数名，同时可以提供默认值。

定义命名的关键字参数在没有可变参数的情况下不要忘了写分隔符`*`，否则定义的将是位置参数。

### 递归函数

在函数内部，可以调用其他函数。如果一个函数在内部调用自身本身，这个函数就是递归函数。

于是，计算阶乘的函数`fact(n)`用递归的方式写出来就是：

```python
def fact(n):
    if n==1:
        return 1
    return n * fact(n - 1)
```

- 递归函数的优点是**定义简单，逻辑清晰**。理论上，所有的递归函数都可以写成循环的方式，但循环的逻辑不如递归清晰。

- 使用递归函数需要注意防止栈溢出。在计算机中，函数调用是通过**栈**（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。可以试试

- 解决递归调用栈溢出的方法是通过**尾递归**优化，事实上尾递归和循环的效果是一样的，所以，把循环看成是一种特殊的尾递归函数也是可以的。

  尾递归是指，在函数返回的时候，**调用自身本身**，并且，**return语句不能包含表达式**。

  这样，编译器或者解释器就可以把尾递归做优化，使递归本身无论调用多少次，**都只占用一个栈帧，不会出现栈溢出**的情况。

改成尾递归方式，把每一步的乘积传入到递归函数中：

```python
def fact(n):
    return fact_iter(n, 1)

def fact_iter(num, product):
    if num == 1:
        return product
    return fact_iter(num - 1, num * product)
```

可以看到，`return fact_iter(num - 1, num * product)`仅返回递归函数本身，`num - 1`和`num * product`在函数调用前就会被计算，不影响函数调用。

`fact(5)`对应的`fact_iter(5, 1)`的调用如下：

```
=> fact_iter(5, 1)
=> fact_iter(4, 5)
=> fact_iter(3, 20)
=> fact_iter(2, 60)
=> fact_iter(1, 120)
=> 120
```

- 尾递归调用时，如果做了优化，栈不会增长，因此，无论多少次调用也不会导致栈溢出。

  遗憾的是，大多数编程语言没有针对尾递归做优化，Python解释器也没有做优化，所以，即使把上面的`fact(n)`函数改成尾递归方式，也会导致栈溢出。

### 高级特性

#### 切片

```plain
>>> L = ['Michael', 'Sarah', 'Tracy', 'Bob', 'Jack']
```

```plain
>>> L[0:3]
['Michael', 'Sarah', 'Tracy']
```

`L[0:3]`表示，从索引`0`开始取，直到索引`3`为止，但不包括索引`3`。即索引`0`，`1`，`2`，正好是3个元素。

左开右闭区间

- 如果第一个索引是`0`，还可以省略：

  ```plain
  >>> L[:3]
  ['Michael', 'Sarah', 'Tracy']
  ```

- 它同样支持倒数切片，试试：

  ```plain
  >>> L[-2:]
  ['Bob', 'Jack']
  >>> L[-2:-1]
  ['Bob']
  ```

- 切片操作十分有用。我们先创建一个0-99的数列：

  ```plain
  >>> L = list(range(100))
  >>> L
  [0, 1, 2, 3, ..., 99]
  ```

  可以通过切片轻松取出某一段数列。比如前10个数：

  ```plain
  >>> L[:10]
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  ```

  后10个数：

  ```plain
  >>> L[-10:]
  [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
  ```

  前11-20个数：

  ```plain
  >>> L[10:20]
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  ```

  前10个数，每两个取一个：

  ```plain
  >>> L[:10:2]
  [0, 2, 4, 6, 8]
  ```

  所有数，每5个取一个：

  ```plain
  >>> L[::5]
  [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]
  ```

  甚至什么都不写，只写`[:]`就可以原样复制一个list：

  ```plain
  >>> L[:]
  [0, 1, 2, 3, ..., 99]
  ```

- tuple也是一种list，唯一区别是tuple不可变。因此，tuple也可以用切片操作，只是操作的结果仍是tuple：

  ```plain
  >>> (0, 1, 2, 3, 4, 5)[:3]
  (0, 1, 2)
  ```

- 字符串`'xxx'`也可以看成是一种list，每个元素就是一个字符。因此，字符串也可以用切片操作，只是操作结果仍是字符串：

  ```plain
  >>> 'ABCDEFG'[:3]
  'ABC'
  >>> 'ABCDEFG'[::2]
  'ACEG'
  ```

#### 迭代

如果给定一个`list`或`tuple`，我们可以通过`for`循环来遍历这个`list`或`tuple`，这种遍历我们称为迭代（Iteration）

- 对dict的迭代

  ```plain
  >>> d = {'a': 1, 'b': 2, 'c': 3}
  >>> for key in d:
  ...     print(key)
  ...
  a
  c
  b
  ```

  因为`dict`的存储不是按照`list`的方式顺序排列，所以，迭代出的结果顺序很可能不一样。

  默认情况下，`dict`迭代的是key。如果要迭代value，可以用`for value in d.values()`，如果要同时迭代key和value，可以用`for k, v in d.items()`。

- 字符串也是可迭代对象

- 通过`collections.abc`模块的`Iterable`类型判断一个对象是否为可迭代对象

  ```plain
  >>> from collections.abc import Iterable
  >>> isinstance('abc', Iterable) # str是否可迭代
  True
  >>> isinstance([1,2,3], Iterable) # list是否可迭代
  True
  >>> isinstance(123, Iterable) # 整数是否可迭代
  False
  ```

- 同时引用两个变量

  ```plain
  >>> for x, y in [(1, 1), (2, 4), (3, 9)]:
  ...     print(x, y)
  ...
  1 1
  2 4
  3 9
  ```

#### 列表生成式

Python内置的非常简单却强大的可以用来创建list的生成式。

```plain
>>> list(range(1, 11))
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

- 更高级

  ```plain
  >>> [x * x for x in range(1, 11)]
  [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
  ```

- 更更高级，使用两层循环，可以生成全排列：

  ```
  >>> [m + n for m in 'ABC' for n in 'XYZ']
  ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']
  ```

- 也可以使用两个变量来生成list（基于dict）：

  ```plain
  >>> d = {'x': 'A', 'y': 'B', 'z': 'C' }
  >>> [k + '=' + v for k, v in d.items()]
  ['y=B', 'x=A', 'z=C']
  ```

- 甚至可以使用函数，最后把一个list中所有的字符串变成小写：

  ```plain
  >>> L = ['Hello', 'World', 'IBM', 'Apple']
  >>> [s.lower() for s in L]
  ['hello', 'world', 'ibm', 'apple']
  ```

- 使用`if...else`

  `for`前面的`if ... else`是表达式，而`for`后面的`if`是过滤条件，不能带`else`。

  - 作为过滤条件：

    ```plain
    >>> [x for x in range(1, 11) if x % 2 == 0]
    [2, 4, 6, 8, 10]
    ```

  - 作为表达式：

    ```plain
    >>> [x if x % 2 == 0 else -x for x in range(1, 11)]
    [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]
    ```

#### 生成器

在循环的过程中不断按照某种算法推算列表后续的元素，这样就不必创建完整的list，从而节省大量的空间。在Python中，这种一边循环一边计算的机制，称为生成器：generator。

要创建一个generator，有很多种方法。

- 第一种方法很简单，只要把一个列表生成式的`[]`改成`()`，就创建了一个generator：

  ```plain
  >>> L = [x * x for x in range(10)]
  >>> L
  [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
  >>> g = (x * x for x in range(10))
  >>> g
  <generator object <genexpr> at 0x1022ef630>
  ```

  创建`L`和`g`的区别仅在于最外层的`[]`和`()`，`L`是一个list，而`g`是一个generator。

- 如果要把列表元素一个一个打印出来，可以通过`next()`函数获得generator的下一个返回值：

  ```plain
  >>> next(g)
  0
  >>> next(g)
  1
  >>> next(g)
  4
  >>> next(g)
  9
  >>> next(g)
  16
  ```

  generator保存的是算法，每次调用`next(g)`，就计算出`g`的下一个元素的值，直到计算到最后一个元素，没有更多的元素时，抛出`StopIteration`的错误。

  使用`for`循环：

  ```
  >>> g = (x * x for x in range(10))
  >>> for n in g:
  ...     print(n)
  ... 
  0
  1
  4
  9
  16
  25
  36
  49
  64
  81
  ```

- 如果推算的算法比较复杂，用类似列表生成式的`for`循环无法实现的时候，还可以用函数来实现。

  如斐波拉契数列函数

  ```
  def fib(max):
      n, a, b = 0, 0, 1
      while n < max:
          print(b)
          a, b = b, a + b
          n = n + 1
      return 'done'
  
  ```

  要把`fib`函数变成generator函数，只需要把`print(b)`改为`yield b`就可以了：

  ```python
  def fib(max):
      n, a, b = 0, 0, 1
      while n < max:
          yield b
          a, b = b, a + b
          n = n + 1
      return 'done'
  ```

  调用一个generator函数将返回一个generator：

  ```plain
  >>> f = fib(6)
  >>> f
  <generator object fib at 0x104feaaa0>
  ```

  generator函数和普通函数的执行流程不一样：它在每次调用`next()`的时候执行，遇到`yield`语句返回，再次执行时从上次返回的`yield`语句处继续执行。

  - 把函数改成generator函数后，我们基本上从来不会用`next()`来获取下一个返回值，而是直接使用`for`循环来迭代

    ```plain
    >>> for n in fib(6):
    ...     print(n)
    ...
    1
    1
    2
    3
    5
    8
    ```

    但是用`for`循环调用generator时，发现拿不到generator的`return`语句的返回值。如果想要拿到返回值，必须捕获`StopIteration`错误，返回值包含在`StopIteration`的`value`中：

    ```plain
    >>> g = fib(6)
    >>> while True:
    ...     try:
    ...         x = next(g)
    ...         print('g:', x)
    ...     except StopIteration as e:
    ...         print('Generator return value:', e.value)
    ...         break
    ...
    g: 1
    g: 1
    g: 2
    g: 3
    g: 5
    g: 8
    Generator return value: done
    ```

  - ```python
    def odd():
        print('step 1')
        yield 1
        print('step 2')
        yield(3)
        print('step 3')
        yield(5)
    ```

    ```plain
    >>> o = odd()
    >>> next(o)
    step 1
    1
    >>> next(o)
    step 2
    3
    >>> next(o)
    step 3
    5
    >>> next(o)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    StopIteration
    ```

    `odd`函数在执行过程中，遇到`yield`就中断，下次又继续执行。执行3次`yield`后，已经没有`yield`可以执行了，所以，第4次调用`next(o)`就报错。

  > 调用generator函数会创建一个generator对象，多次调用generator函数会创建多个相互独立的generator。

- 注意区分普通函数和generator函数，普通函数调用直接返回结果：

  ```plain
  >>> r = abs(6)
  >>> r
  6
  ```

  generator函数的调用实际返回一个generator对象：

  ```plain
  >>> g = fib(6)
  >>> g
  <generator object fib at 0x1022ef948>
  ```

#### 迭代器

直接作用于`for`循环的数据类型有以下几种：

一类是集合数据类型，如`list`、`tuple`、`dict`、`set`、`str`等；

一类是`generator`，包括生成器和带`yield`的generator function。

这些可以直接作用于`for`循环的对象统称为可迭代对象：`Iterable`。

- 可以使用`isinstance()`判断一个对象是否是`Iterable`对象：

  ```
  >>> from collections.abc import Iterable
  >>> isinstance([], Iterable)
  True
  >>> isinstance({}, Iterable)
  True
  ```

可以被`next()`函数调用并不断返回下一个值的对象称为迭代器：`Iterator`。

- 可以使用`isinstance()`判断一个对象是否是`Iterator`对象：

  ```plain
  >>> from collections.abc import Iterator
  >>> isinstance((x for x in range(10)), Iterator)
  True
  >>> isinstance([], Iterator)
  False
  >>> isinstance({}, Iterator)
  False
  >>> isinstance('abc', Iterator)
  False
  ```

- 生成器都是`Iterator`对象，但`list`、`dict`、`str`虽然是`Iterable`，却不是`Iterator`。

- 把`list`、`dict`、`str`等`Iterable`变成`Iterator`可以使用`iter()`函数：

  ```plain
  >>> isinstance(iter([]), Iterator)
  True
  >>> isinstance(iter('abc'), Iterator)
  True
  ```

  Python的`Iterator`对象表示的是一个数据流，`Iterator`对象可以被`next()`函数调用并不断返回下一个数据，直到没有数据时抛出`StopIteration`错误。可以把这个数据流看做是一个有序序列，但我们却不能提前知道序列的长度，只能不断通过`next()`函数实现按需计算下一个数据，所以`Iterator`的计算是惰性的，只有在需要返回下一个数据时它才会计算。

### 函数式编程

函数是Python内建支持的一种封装，我们通过把大段代码拆成函数，通过一层一层的函数调用，就可以把复杂任务分解成简单的任务，这种分解可以称之为面向过程的程序设计。函数就是**面向过程**的程序设计的基本单元。

而函数式编程（请注意多了一个“式”字）——Functional Programming，虽然也可以归结到面向过程的程序设计，但其思想更接近数学计算。

函数式编程就是一种抽象程度很高的编程范式，纯粹的函数式编程语言编写的函数没有变量，因此，任意一个函数，只要输入是确定的，输出就是确定的，这种纯函数我们称之为没有副作用。而允许使用变量的程序设计语言，由于函数内部的变量状态不确定，同样的输入，可能得到不同的输出，因此，这种函数是有副作用的。

函数式编程的一个特点就是，**允许把函数本身作为参数传入另一个函数，还允许返回一个函数**！

#### 高阶函数

- 变量可以指向函数

  函数本身也可以赋值给变量，即：变量可以指向函数。

  ```plain
  >>> f = abs
  >>> f(-10)
  10
  ```

  变量`f`现在已经指向了`abs`函数本身。直接调用`abs()`函数和调用变量`f()`完全相同。

- 函数名就是指向函数的变量

  ```
  >>> abs = 10
  >>> abs(-10)
  Traceback (most recent call last):
    File "<stdin>", line 1, in <module>
  TypeError: 'int' object is not callable
  ```

  如果把`abs`指向其他对象，就无法通过`abs(-10)`调用该函数了！因为`abs`这个变量已经不指向求绝对值函数而是指向一个整数`10`！

- 传入函数

  既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数。

  一个最简单的高阶函数：

  ```python
  def add(x, y, f):
      return f(x) + f(y)
  ```

##### map/reduce

Python内建了`map()`和`reduce()`函数。

- `map()`函数接收两个参数，一个是函数，一个是`Iterable`，`map`将传入的函数依次作用到序列的每个元素，并把结果作为新的`Iterator`返回。

  ```
  >>> def f(x):
  ...     return x * x
  ...
  >>> r = map(f, [1, 2, 3, 4, 5, 6, 7, 8, 9])
  >>> list(r)
  [1, 4, 9, 16, 25, 36, 49, 64, 81]
  ```

  `map()`传入的第一个参数是`f`，即函数对象本身。由于结果`r`是一个`Iterator`，`Iterator`是惰性序列，因此通过`list()`函数让它把整个序列都计算出来并返回一个list。

- `reduce`把一个函数作用在一个序列`[x1, x2, x3, ...]`上，这个函数必须接收两个参数，`reduce`把结果继续和序列的下一个元素做累积计算

  ```
  reduce(f, [x1, x2, x3, x4]) = f(f(f(x1, x2), x3), x4)
  ```

  比方说对一个序列求和，就可以用`reduce`实现：

  ```plain
  >>> from functools import reduce
  >>> def add(x, y):
  ...     return x + y
  ...
  >>> reduce(add, [1, 3, 5, 7, 9])
  25
  ```

  - 考虑到字符串`str`也是一个序列，对上面的例子稍加改动，配合`map()`，我们就可以写出把`str`转换为`int`的函数：

    ```plain
    >>> from functools import reduce
    >>> def fn(x, y):
    ...     return x * 10 + y
    ...
    >>> def char2num(s):
    ...     digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
    ...     return digits[s]
    ...
    >>> reduce(fn, map(char2num, '13579'))
    13579
    ```

    整理成一个`str2int`的函数就是：

    ```
    from functools import reduce
    
    DIGITS = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
    
    def str2int(s):
        def fn(x, y):
            return x * 10 + y
        def char2num(s):
            return DIGITS[s]
        return reduce(fn, map(char2num, s))
    ```

##### filter

Python内建的`filter()`函数用于过滤序列。

`filter()`也接收一个函数和一个序列，把传入的函数依次作用于每个元素，然后根据返回值是`True`还是`False`决定保留还是丢弃该元素。

- 例如，在一个list中，删掉偶数，只保留奇数，可以这么写：

  ```python
  def is_odd(n):
      return n % 2 == 1
  
  list(filter(is_odd, [1, 2, 4, 5, 6, 9, 10, 15]))
  # 结果: [1, 5, 9, 15]
  ```

- 把一个序列中的空字符串删掉，可以这么写：

  ```python
  def not_empty(s):
      return s and s.strip()
  
  list(filter(not_empty, ['A', '', 'B', None, 'C', '  ']))
  # 结果: ['A', 'B', 'C']
  ```

  注意到`filter()`函数返回的是一个`Iterator`，也就是一个惰性序列，所以要强迫`filter()`完成计算结果，需要用`list()`函数获得所有结果并返回list。

- 用filter求素数

  计算[素数](http://baike.baidu.com/view/10626.htm)的一个方法是[埃氏筛法](http://baike.baidu.com/view/3784258.htm)

  首先，列出从`2`开始的所有自然数，构造一个序列

  取序列的第一个数`2`，它一定是素数，然后用`2`把序列的`2`的倍数筛掉

  取新序列的第一个数`3`，它一定是素数，然后用`3`把序列的`3`的倍数筛掉

  取新序列的第一个数`5`，然后用`5`把序列的`5`的倍数筛掉

  ```python
  def _odd_iter():
      n = 1
      while True:
          n = n + 2
          yield n
  def _not_divisible(n):
      return lambda x: x % n > 0
  def primes():
      yield 2
      it = _odd_iter() # 初始序列
      while True:
          n = next(it) # 返回序列的第一个数
          yield n
          it = filter(_not_divisible(n), it) # 构造新序列
  ```

  由于`primes()`也是一个无限序列，所以调用时需要设置一个退出循环的条件：

  ```python
  # 打印1000以内的素数:
  for n in primes():
      if n < 100:
          print(n)
      else:
          break
  ```

##### sorted

Python内置的`sorted()`函数就可以对list进行排序（由低到高）：

```plain
>>> sorted([36, 5, -12, 9, -21])
[-21, -12, 5, 9, 36]
```

它还可以接收一个`key`函数来实现自定义的排序，例如按绝对值大小排序：

```plain
>>> sorted([36, 5, -12, 9, -21], key=abs)
[5, 9, -12, -21, 36]
```

key指定的函数将作用于list的每一个元素上，并根据key函数返回的结果进行排序

- 一个字符串排序的例子：

  ```plain
  >>> sorted(['bob', 'about', 'Zoo', 'Credit'])
  ['Credit', 'Zoo', 'about', 'bob']
  ```

  默认情况下，对字符串排序，是按照ASCII的大小比较的，由于`'Z' < 'a'`，结果，大写字母`Z`会排在小写字母`a`的前面。

  - 给`sorted`传入key函数，即可实现忽略大小写的排序：

    ```plain
    >>> sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower)
    ['about', 'bob', 'Credit', 'Zoo']
    ```

  - 要进行反向排序，不必改动key函数，可以传入第三个参数`reverse=True`：

    ```plain
    >>> sorted(['bob', 'about', 'Zoo', 'Credit'], key=str.lower, reverse=True)
    ['Zoo', 'Credit', 'bob', 'about']
    ```

#### 返回函数

高阶函数除了可以接受函数作为参数外，还可以**把函数作为结果值返回**。

- 通常情况下，求和的函数是这样定义的：

  ```python
  def calc_sum(*args):
      ax = 0
      for n in args:
          ax = ax + n
      return ax
  ```

  如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数：

  ```python
  def lazy_sum(*args):
      def sum():
          ax = 0
          for n in args:
              ax = ax + n
          return ax
      return sum
  ```

  当我们调用`lazy_sum()`时，返回的并不是求和结果，而是求和函数：

  ```plain
  >>> f = lazy_sum(1, 3, 5, 7, 9)
  >>> f
  <function lazy_sum.<locals>.sum at 0x101c6ed90>
  ```

  调用函数`f`时，才真正计算求和的结果：

  ```plain
  >>> f()
  25
  ```

### 模块

为了编写可维护的代码，我们把很多函数分组，分别放到不同的文件里，这样，每个文件包含的代码就相对较少，很多编程语言都采用这种组织代码的方式。在Python中，**一个.py文件就称之为一个模块（Module）。**

有什么好处？

最大的好处是**大大提高了代码的可维护性**。其次，**编写代码不必从零开始**。当一个模块编写完毕，就可以被其他地方引用。我们在编写程序的时候，也经常引用其他模块，包括Python内置的模块和来自第三方的模块。

使用模块还可以避免函数名和变量名冲突。相同名字的函数和变量完全可以分别存在不同的模块中，因此，我们自己在编写模块时，不必考虑名字会与其他模块冲突。但是也要注意，尽量不要与内置函数名字冲突。

- 为了避免模块名冲突，Python又引入了**按目录来组织模块**的方法，称为**包（Package）**。

举个例子，一个`abc.py`的文件就是一个名字叫`abc`的模块，一个`xyz.py`的文件就是一个名字叫`xyz`的模块。

- 可以**通过包来组织模块，避免冲突**。方法是选择一个顶层包名，比如`mycompany`，按照如下目录存放：

  mycompany
  ├─ __init__.py
  ├─ abc.py
  └─ xyz.py

  引入了包以后，只要顶层的包名不与别人冲突，那所有模块都不会与别人冲突。现在，`abc.py`模块的名字就变成了`mycompany.abc`，类似的，`xyz.py`的模块名变成了`mycompany.xyz`。

- 类似的，可以有多级目录，组成多级层次的包结构。比如如下的目录结构：

  mycompany
   ├─ web
   │  ├─ __init__.py
   │  ├─ utils.py
   │  └─ www.py
   ├─ __init__.py
   ├─ abc.py
   └─ utils.py

  文件`www.py`的模块名就是`mycompany.web.www`，两个文件`utils.py`的模块名分别是`mycompany.utils`和`mycompany.web.utils`

  > 自己创建模块时要注意命名，不能和Python自带的模块名称冲突。例如，系统自带了sys模块，自己的模块就不可命名为`sys.py`，否则将无法导入系统自带的sys模块。

#### 使用模块

以内建的`sys`模块为例，编写一个`hello`的模块：

```
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

' a test module '

__author__ = 'Michael Liao'

import sys

def test():
    args = sys.argv
    if len(args)==1:
        print('Hello, world!')
    elif len(args)==2:
        print('Hello, %s!' % args[1])
    else:
        print('Too many arguments!')

if __name__=='__main__':
    test()
```

- 1行和第2行是标准注释，第1行注释可以让这个`hello.py`文件直接在Unix/Linux/Mac上运行，第2行注释表示.py文件本身使用标准UTF-8编码；

  第4行是一个字符串，表示模块的文档注释，任何模块代码的第一个字符串都被视为模块的文档注释；

  第6行使用`__author__`变量把作者写进去，这样当你公开源代码后别人就可以瞻仰你的大名；

以上就是Python模块的标准文件模板，当然也可以全部删掉不写，但是，按标准办事肯定没错。

- `sys`模块有一个`argv`变量，用list存储了命令行的所有参数。`argv`至少有一个元素，因为第一个参数永远是该.py文件的名称，例如：

  运行`python3 hello.py`获得的`sys.argv`就是`['hello.py']`；

  运行`python3 hello.py Michael`获得的`sys.argv`就是`['hello.py', 'Michael']`。

- 导入该模块：

  ```
  import sys
  ```

- ```python
  if __name__=='__main__':
      test()
  ```

  当我们在命令行运行`hello`模块文件时，Python解释器把一个特殊变量`__name__`置为`__main__`，而如果在其他地方导入该`hello`模块时，`if`判断将失败，因此，这种`if`测试可以让一个模块通过命令行运行时执行一些额外的代码，最常见的就是运行测试。

- 我们可以用命令行运行`hello.py`看看效果：

  ```plain
  $ python3 hello.py
  Hello, world!
  $ python hello.py Michael
  Hello, Michael!
  ```

##### 作用域

在一个模块中，我们可能会定义很多函数和变量，但有的函数和变量我们希望给别人使用，有的函数和变量我们希望仅仅在模块内部使用。在Python中，是通过`_`前缀来实现的。

正常的函数和变量名是公开的（public），可以被直接引用，比如：`abc`，`x123`，`PI`等；

类似`__xxx__`这样的变量是特殊变量，可以被直接引用，但是有特殊用途，比如上面的`__author__`，`__name__`就是特殊变量，`hello`模块定义的文档注释也可以用特殊变量`__doc__`访问，我们自己的变量一般不要用这种变量名；

类似`_xxx`和`__xxx`这样的函数或变量就是非公开的（private），不应该被直接引用，比如`_abc`，`__abc`等；

private函数或变量不应该被别人引用，那它们有什么用呢？请看例子：

```python
def _private_1(name):
    return 'Hello, %s' % name

def _private_2(name):
    return 'Hi, %s' % name

def greeting(name):
    if len(name) > 3:
        return _private_1(name)
    else:
        return _private_2(name)
```

我们在模块里公开`greeting()`函数，而把内部逻辑用private函数隐藏起来了，这样，调用`greeting()`函数不用关心内部的private函数细节，这也是一种非常有用的代码封装和抽象的方法，即：

外部不需要引用的函数全部定义成private，只有外部需要引用的函数才定义为public。



#####  if **name** == '**main**'

在Python中，if **name** == '**main**': 这行代码有一个特定的用途。它用于判断当前运行的脚本是否是主程序，而不是被其他脚本作为模块导入时执行的代码。

当你直接运行一个Python文件时，比如通过命令行输入 python script.py，Python解释器会将特殊变量 **name** 设置为 '**main**'。但是，如果另一个脚本导入了这个文件（比如使用 import script），那么 **name** 变量将被设置为该脚本的模块名（在这个例子中是 'script'，但不包括 .py 扩展名）。

因此，if **name** == '**main**': 这行代码下面的代码块只有在该脚本被直接运行时才会执行。这允许一个Python文件既可以作为脚本直接运行，执行一些操作，也可以作为模块被其他脚本导入，提供函数、类和变量等，而不会在不希望的时候执行代码。

#### 安装第三方模块

通过包管理工具pip完成

- 如果你正在使用Mac或Linux，安装pip本身这个步骤就可以跳过了。

- 如果你正在使用Windows，请参考[安装Python](https://liaoxuefeng.com/books/python/module/install/index.html)一节的内容，确保安装时勾选了`pip`和`Add python.exe to Path`。

一般来说，第三方库都会在Python官方的[pypi.python.org](https://pypi.python.org/)网站注册，要安装一个第三方库，必须先知道该库的名称，可以在官网或者pypi上搜索，比如Pillow的名称叫[Pillow](https://pypi.python.org/pypi/Pillow/)，因此，安装Pillow的命令就是：

```
pip install Pillow
```

###### 安装常用模块

直接使用[Anaconda](https://www.anaconda.com/)，这是一个基于Python的数据处理和科学计算平台，它已经内置了许多非常有用的第三方库，我们装上Anaconda，就相当于把数十个第三方模块自动安装好了，非常简单易用。

下载后直接安装，Anaconda会把系统Path中的python指向自己自带的Python，并且，Anaconda安装的第三方模块会安装在Anaconda自己的路径下，不影响系统已安装的Python目录。

安装好Anaconda后，重新打开命令行窗口，输入python，可以看到Anaconda的信息

可以尝试直接`import numpy`等已安装的第三方模块。

###### 模块搜索路径

当我们试图加载一个模块时，Python会在指定的路径下搜索对应的.py文件，如果找不到，就会报错

默认情况下，Python解释器会搜索当前目录、所有已安装的内置模块和第三方模块，搜索路径存放在`sys`模块的`path`变量中

```plain
>>> import sys
>>> sys.path
['', '/Library/Frameworks/Python.framework/Versions/3.6/lib/python36.zip', '/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6', ..., '/Library/Frameworks/Python.framework/Versions/3.6/lib/python3.6/site-packages']
```

如果我们要添加自己的搜索目录，有两种方法：

一是直接修改`sys.path`，添加要搜索的目录：

```plain
>>> import sys
>>> sys.path.append('/Users/michael/my_py_scripts')
```

这种方法是在**运行时修改，运行结束后失效**。

第二种方法是设置环境变量`PYTHONPATH`，该环境变量的内容会被自动添加到模块搜索路径中。设置方式与设置Path环境变量类似。注意只需要添加我们自己的搜索路径，Python本身的搜索路径不受影响。
