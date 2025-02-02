## 杂

### cin吃饭不吃净，回车键噎死了getline()，确信

```C++
int a = 0;
cin >> a;//第一行：这里输入了1234和回车（光标到下一行）
cout << a << endl;//第二行：这里输出了1234和一个回车（光标到下一行）
string line;
/*下面这里会直接得到cin留下来的回车键而结束，
  导致line的内容为空，这不是我们想要的
*/
getline(cin, line);//第三行
cout << line << endl; //这里输出一个回车（光标到下一行）
```

### ->和.和类数组

```C++
Student* stu = new Student[totalStudent];
//stu[i].==(*(stu+i)).==(stu+i)->
```

甚至：

```c++
Student* stu = new Student;
stu->m_name = "zhangsan";//stu[0].m_name...
```



### Const成员函数

**表明在该成员函数中不能对类的任何成员进行修改。**

基本格式：

```
void Reset1()const;
```

如果const成员函数内修改了类的成员变量，会在编译的时候报语法错误。

不用等到运行时，我们就提前发现了逻辑错误。

### **&**　と　*****

| 符号 | 含义         | 声明/定义                                      | 执行     |
| ---- | ------------ | ---------------------------------------------- | -------- |
| ＆   | 引用         | void fun(int& a);	 int a = 0;//传递原变量   | fun(a);  |
| &    | 取地址       | void fun(int* p);	 int a = 0;//传递变量地址 | fun(&a); |
| *    | 对地址解引用 | int* p = new int; *p = 123;                    |          |
| *    | 地址变量     | int* p = nullptr;	 int a = 0;               | p = &a;  |

### 隐式类型转换

上面的泰勒展开求π的代码中：

```text
S = m / (2 * m + 1.0) * S;
```

- 1.0 是一个 double 类型；
- 整数 m 是 int 类型；
- 2 * m 的结果是 int类型；
- 2 * m + 1.0 的结果是 double 类型；这里发生了**[隐式类型转换](https://zhida.zhihu.com/search?content_id=234670452&content_type=Article&match_order=2&q=隐式类型转换&zhida_source=entity)**

- m / (2 * m + 1.0) 的结果是 double 类型； 这里再次发生了**隐式类型转换**

可以看出，隐式类型转换是很方便的。

但是，如果上面的1.0 写成了int类型的 1 ，

```text
m / (2 * m + 1)  
```

就会出问题。这会导致**难以察觉的逻辑错误**。

这会导致两个整数相除，分母始终大于分子，从而结果为 0。 

### 栈变量的作用域

变量后面第一个右花括号是其生命期截止的地方

### 输出格式化 format control

#### 浮点数输出格式控制

std::fixed 表示使用小数计数法（固定小数点位置），而不是科学计数法显示浮点数（浮动小数点位置）。

std::setprecision(n) 表示小数部分保留n位，最后一位使用四舍五入法显示浮点数

```C++
double i   = 100 / 3.0; //33.33333333333......
double you = 200 / 3.0; //66.66666666666......
//fixed使用小数计数法(而不是科学计数法)显示浮点数
//setprecision(4) 小数部分保留4位，最后一位四舍五入
cout << fixed << setprecision(4) << i  << endl << you<< endl ;
/*输出为:
33.3333
66.6666*/
```

#### setw()，数字宽度

设置输出的[总宽度](https://zhida.zhihu.com/search?content_id=234666326&content_type=Article&match_order=1&q=总宽度&zhida_source=entity)，通常用来对齐显示数据。

```c++
#include <iomanip>// std::setfill, std::setw
...
	std::cout << std::setw(10);
 	std::cout << 77 << std::endl;
...
```

输出：

```
        77
```

#### left，right

左对齐，右对齐

```
cout << left << setw(10) << 7;
```

输出：

```
7         
```

#### setfill()，填充字符

```
std::cout << std::setfill ('x') << std::setw (10);
std::cout << 77 << std::endl;
```

输出：

```
xxxxxxxx77
```

#### 输出true false

```
std::cout<<std::boolalpha << b << std::endl;
```

### 构造函数的重载

```cpp
#include <iostream>
using namespace std;
 
struct Student
{
    //默认构造函数 default constructor
    Student() { cout << "Student()" << endl; };
    //非默认构造函数，给m_age成员初始化
    Student(int age) :m_age(age) { cout << "Student("<<m_age<<")" << endl; };
    //非默认构造函数,给两个成员变量初始化
    Student(int age, bool sex) :m_age(age), m_sex(sex)
    {
        cout << "Student(" << m_age << ", "<<boolalpha<<sex<<")" << endl; 
    };
    //非默认构造函数,给3个成员变量初始化
    Student(string name, int age, bool sex) :m_name(name), m_age(age), m_sex(sex) 
    {
        cout << "Student("<<name<<"," << m_age << ", " << boolalpha << sex << ")" << endl;
    };
 
private:
    string m_name;//姓名
    int m_age;//年龄
    bool m_sex;//性别
};
 
int main()
{
    Student stu1;//调用默认构造函数
    Student stu2(10);//调用带一个整形参数的构造函数
    Student stu3(10, true);//调用两个参数的那个构造函数
    Student stu4("ZhangFei", 10, true);//调用3个参数的那个构造函数
 
    return 0;
}
```

### 花括号作用域

一对花括号内部定义的变量，在这对花括号外部不可访问。

```
int main(){
	{
		int a;
	}
	return 0;
}
```

### c++类型转换

在C++中，类型转换可以通过几种不同的方式实现，包括隐式转换和显式转换。以下是C++中常见的几种类型转换方式：

1. **隐式类型转换（Implicit Type Conversion）**：
   - 这是编译器自动进行的类型转换，通常发生在不同数据类型之间的表达式中，例如从`int`转换为`double`。

2. **显式类型转换（Explicit Type Conversion）**：
   - 这是程序员明确指定的类型转换，可以通过以下几种方式实现：
     - **C风格的类型转换**：
       ```cpp
       (Type)value;
       ```
       其中`Type`是目标类型，`value`是要转换的值。
     - **static_cast<>**：
       ```cpp
       static_cast<Type>(value);
       ```
       `static_cast`用于非多态类型的转换，比如基本数据类型之间的转换。
     - **dynamic_cast<>**：
       ```cpp
       dynamic_cast<Type>(pointer);
       ```
       `dynamic_cast`用于多态类型的向下转换，即从基类指针或引用转换为派生类指针或引用。
     - **const_cast<>**：
       ```cpp
       const_cast<Type>(pointer);
       ```
       `const_cast`用于移除或添加`const`或`volatile`属性。
     - **reinterpret_cast<>**：
       ```cpp
       reinterpret_cast<Type>(pointer);
       ```
       `reinterpret_cast`用于低级别的重新解释转换，比如将指针转换为足够大的整数类型。

3. **类型别名（Type Aliases）**：
   - 使用`typedef`或`using`关键字可以为类型创建别名，这也可以看作是一种类型转换。
   ```cpp
   typedef Type Alias;
   // 或者
   using Alias = Type;
   ```

4. **auto关键字**：
   - `auto`关键字允许编译器自动推断变量的类型。
   ```cpp
   auto value = someExpression;
   ```

5. **模板推导**：
   - 当使用模板函数或模板类时，编译器会自动推导出模板参数的类型。

在使用显式类型转换时，应该谨慎，因为不当的类型转换可能会导致数据丢失或程序错误。例如，将一个较大的整数赋值给一个较小的整数类型可能会导致数值溢出。因此，显式类型转换应该只在完全理解转换后果的情况下使用。

## 标准库学习

### \<vector\>

vector叫动态数组，是一种存放变量的容器（它的每一个元素都是一个变量，且每个元素的类型也一样）。

本质上来说它就是一个**堆数组**，只不过用类包装了一下，使用起来更加方便而已。

一开始vector被创建出来的时候，它是没有元素的。

```C++
vector<int> arr;
vector<int> arr{1,2,3,4,5,6,7,8,9};
vector<int> arr = {1,2,3,4,5,6,7,8,9}
vector<int> arr(5);
vector<int> arr(5,10);
```

在上面的代码（1）那里创建的数组一开始由于没有任何元素，所以，此时数组的大小是0。

```C++
size_t c = arr.size();//此时变量c的值为0
```

其返回类型为**size_t**，实际上是**unsigned long long**类型。

```C++
bool b = arr.empty();//empty()判断数组是否为空，返回一个bool值。
```

```C++
arr.push_back(25);//往容器中添加一个无名整型变量，并将这个变量的初始值设置为25
```

### 范围for循环

以list为例：

```
for (const auto& elem : lst) {
     std::cout << elem << " ";
   }
```

### 迭代器 iterator

定义一个迭代器变量 itr 的写法为：

```
vector<int>::iterator itr = v.begin()
```

v**.begin()** 表示 begin是一个函数，v 的成员函数，这个函数返回一个迭代器对象。这个返回的迭代器对象指向 v 的第一个元素。

而使用auto就可以**让代码大大简化**：

```cpp
auto itr = v.begin()
```

```
int main()
{
    vector<int> v{1,2,3,4,5,6,7,8,9};//初始化9个元素

    for (auto itr = v.begin(); itr != v.end(); ++itr)
    {
        cout << *itr << " ";
    }

  return 0;
}
```

迭代器就是拥有下面的能力的对象：

|           |                                                              |                                                              |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| v.begin() | 容器 v 的 begin() 成员函数返回指向第一个元素的迭代器         |                                                              |
| v.end()   | 容器 v 的 end() 成员函数返回指向最后一个元素的下一个位置的迭代器 | 迭代器到达这里表示迭代结束，专门用来结束迭代；不可以对这个迭代器进行解引用，也不支持自增操作； |
| *itr      | 解引用，获得所指向元素的引用                                 |                                                              |
| ++itr     | 向后移动一次，指向下一个元素                                 |                                                              |
| itr->     | 成员操作符                                                   | 当迭代器指向一个类对象的时候，成员操作符用来访问对象的成员   |

可以看出迭代器的行为和指针很相似。

```
#include <iostream>
#include <string>
#include <vector>
using namespace std;

struct Student
{
    int get_age() { return m_age; }
    void set_age(int age) { m_age = age; }

    string m_name;
private:
    int m_age;
};

int main()
{
    int i = 0;
    vector<Student> student_array(3);//创建一个vector，里面存放3个Student对象
    for (auto itr = student_array.begin(); itr != student_array.end(); ++itr)
    {
        //使用成员操作符修改对象的名字
        itr->m_name = "name" + to_string(++i);
        //使用成员操作符调用对象的成员函数
        itr->set_age(i + 18);//等同于(*itr).
    }

    for (auto itr = student_array.begin(); itr != student_array.end(); ++itr)
    {
        //使用成员操作符读取对象的名字
        cout << "My name is " << itr->m_name
            << ", I'm " << itr->get_age() << " years old." << endl;
    }



    return 0;
}

```

迭代器遍历数组和下标遍历数组的异同：

|                        | 下标访问      | 迭代器访问              |
| ---------------------- | ------------- | ----------------------- |
| 访问第N个元素的形式    | a[i]          | *itr                    |
| 访问第1个元素的形式    | a[0]          | *a.begin()              |
| 访问最后一个元素的形式 | a[a.size()-1] | *(a.begin()+a.size()-1) |
| 循环结束的条件         | i < a.size()  | itr != a.end()          |
| 移下一个元素           | ++i           | ++itr                   |

所有的标准库容器都提供了迭代器（stack，queue 除外），但只有 vector 提供了下标操作可以遍历其元素。

### \<list\>

| `push_back(const T& val)`   | 在链表末尾添加元素       |
| --------------------------- | ------------------------ |
| `push_front(const T& val)`  | 在链表头部添加元素       |
| `pop_back()`                | 删除链表末尾的元素       |
| `pop_front()`               | 删除链表头部的元素       |
| `insert(iterator pos, val)` | 在指定位置插入元素       |
| `erase(iterator pos)`       | 删除指定位置的元素       |
| `clear()`                   | 清空所有元素             |
| `size()`                    | 返回链表中的元素数量     |
| `empty()`                   | 检查链表是否为空         |
| `front()`                   | 返回链表第一个元素       |
| `back()`                    | 返回链表最后一个元素     |
| `remove(const T& val)`      | 删除所有等于指定值的元素 |
| `sort()`                    | 对链表中的元素进行排序   |

```
std::list<int> lst = {1, 2, 3, 4, 5};
auto it = lst.begin();
std::advance(it, 2);      // 移动迭代器到第3个元素（值为3）
lst.insert(it, 10);      // 在第3个元素前插入10
lst.erase(it);         // 删除第3个元素
```

### std::pair 模板类

其定义：

```
template<typename T1, typename T2>
struct pair
{
    T1 first;
    T2 second;
};
```

使用：

```
#include <utility>// std::pair
```

```
pair<int, string> myPair;// std::pair  给模板类 pair 指定 T1 为 int, T2 为 string

myPair.first = 45;
myPair.second = "Donald Trump";

cout << "The "
    << myPair.first << "th President of the United States is "
    << myPair.second <<"." << endl;
```

### 关联容器(字典)map

**std::map<key, value>**

map 在c++中翻译为映射。map 是STL（标准模板库）的一个关联容器（字典），是有序键（key）值（value）对容器。

map的键（key）是**索引，不能重复**，一个键（key）对应着一个值（value）；value为关键字的值，**可以重复**。

map中的元素会**自动排序**（默认按照**升序**排序），并且增删改查整体上都很快。

```
#include<map>
```

```
map<keyType，valueType> myMap;
```

其中, keyType为键的类型（这种类型要求能够比较大小）。如果是string类型，则按照ASCII码的字母表排序

其中，valuetype 为值的类型（没什么要求）。

```
map<int, int> student_score{
        //学号不可以有重复
        //学号可以不按顺序创建
        //学号在创建完成之后会在内部自动排好顺序
        //学号排序按照大小顺序，int类型的数据就按数值大小排序
        {003, 90},
        {004, 88},
        {001, 88},//分数可以有相同的分数
        {002, 78},
    };

```

下面的下标访问会得到这个key对应的值value的引用：

```cpp
universities["MIT"];
```

注意：下标访问的元素如果不存在，会自动插入这个key，并提供一个默认的value与之对应，并返回这个value的引用。

等价于下面的伪代码：

```cpp
if(universities.find(key)==universities.end())
{
    universities.insert(key, {});
}

auto& value = universities[key];
//do something by value
```

```cpp
universities["MIT"] = "麻省理工学院 Massachussets  Institute of Technology";//使用下标操作符插入元素
universities.insert({"MIT", "麻省理工学院 Massachussets  Institute of Technology"});//insert成员函数插入元素
```

### 队列\<queue>

队列是一种先进先出（FIFO, First In First Out）的数据结构，它允许在一端添加元素（称为队尾），并在另一端移除元素（称为队首）。

队列是一种线性数据结构，它遵循以下规则：

- 元素只能从队尾添加。
- 元素只能从队首移除。

```
#include <queue>

// 声明队列
std::queue<Type> q;
```

队列提供了以下常用操作：

- `empty()`: 检查队列是否为空。
- `size()`: 返回队列中的元素数量。
- `front()`: 返回队首元素的引用。
- `back()`: 返回队尾元素的引用。
- `push()`: 在队尾添加一个元素。
- `pop()`: 移除队首元素。

队列不允许随机访问元素，即**不能直接通过索引访问**队列中的元素。

### \<stack>

后进先出（LIFO，Last In First Out），适合于需要"最后添加的元素最先被移除"的场景。

栈的元素是线性排列的，但只允许在一端（栈顶）进行添加和移除操作。

基本操作：

- `push()`: 在栈顶添加一个元素。
- `pop()`: 移除栈顶元素。
- `top()`: 返回栈顶元素的引用，但不移除它。
- `empty()`: 检查栈是否为空。
- `size()`: 返回栈中元素的数量。

注意：

- `<stack>` 不提供直接访问栈中元素的方法，只能通过 `top()` 访问栈顶元素。
- 尝试在空栈上调用 `top()` 或 `pop()` 将导致未定义行为。
- `<stack>` 的底层容器可以是任何支持随机访问迭代器的序列容器，如 `vector` 或 `deque`。

### \<set>

一个关联容器，它存储了一组唯一的元素，并按照一定的顺序进行排序。

`<set>` 提供了高效的元素查找、插入和删除操作。它是基于红黑树实现的，因此具有对数时间复杂度的查找、插入和删除性能。

`<set>` 容器中存储的元素类型必须满足以下条件：

- 元素类型**必须可以比较大小**。
- 元素类型**必须可以被复制和赋值**。



- `insert(元素)`: 插入一个元素。
- `erase(元素)`: 删除一个元素。
- `find(元素)`: 查找一个元素。
- `size()`: 返回容器中元素的数量。
- `empty()`: 检查容器是否为空。

### multimap（允许key重复）

```
#include <map>
```

multimap也是和map一样的键值对字典容器。

唯一不同的就是multimap允许key重复。

这样我们就不可以使用map[key]来索取元素了，这是他们之间的第二个区别。

**insert 方法**

```
multimap<int, int> mm;
mm.insert(make_pair(3, value)); 
```

### \<array>

```
#include <array>

std::array<T, N> array_name;
```

- `T` 是数组中元素的类型。
- `N` 是数组的大小，必须是一个非负整数。
- 需要在编译时确定大小，不能动态改变
- 元素在内存中是连续存储的，这使得它可以高效地访问元素。
- 提供了与 `std::vector` 类似的接口，如 `size()`, `at()`, `front()`, `back()` 等。

| `at(size_t pos)`       | 返回指定位置的元素，带边界检查   |
| ---------------------- | -------------------------------- |
| `operator[]`           | 返回指定位置的元素，不带边界检查 |
| `front()`              | 返回数组的第一个元素             |
| `back()`               | 返回数组的最后一个元素           |
| `data()`               | 返回指向数组数据的指针           |
| `size()`               | 返回数组大小（固定不变）         |
| `fill(const T& value)` | 将数组所有元素设置为指定值       |
| `swap(array& other)`   | 交换两个数组的内容               |
| `begin()` / `end()`    | 返回数组的起始/结束迭代器        |

与其他数组类型对比：

| 特性         | `std::array`        | C 风格数组          | `std::vector`       |
| ------------ | ------------------- | ------------------- | ------------------- |
| **大小**     | 编译时固定          | 编译时固定          | 动态可变            |
| **边界检查** | `at()` 提供边界检查 | 无                  | `at()` 提供边界检查 |
| **内存管理** | 栈上分配            | 栈上分配            | 堆上分配            |
| **性能**     | 高效                | 高效                | 较低（动态分配）    |
| **接口**     | 支持 STL 标准接口   | 不支持 STL 标准接口 | 支持 STL 标准接口   |

### \<deque>

一个动态数组，它提供了快速的随机访问能力，同时允许在两端进行高效的插入和删除操作。这使得 `<deque>` 成为处理需要频繁插入和删除元素的场景的理想选择。

```
#include <deque>
```

| 函数名称                               | 功能描述                                          |
| -------------------------------------- | ------------------------------------------------- |
| `deque()`                              | 默认构造函数，创建一个空的 `deque` 容器。         |
| `deque(size_type n)`                   | 创建一个包含 `n` 个默认值元素的 `deque` 容器。    |
| `deque(size_type n, const T& value)`   | 创建一个包含 `n` 个值为 `value` 的 `deque` 容器。 |
| `deque(initializer_list<T> il)`        | 使用初始化列表 `il` 构造 `deque` 容器。           |
| `operator=`                            | 赋值操作符，赋值给 `deque` 容器。                 |
| `assign()`                             | 用新值替换 `deque` 容器中的所有元素。             |
| `at(size_type pos)`                    | 返回 `pos` 位置的元素，并进行范围检查。           |
| `operator[](size_type pos)`            | 返回 `pos` 位置的元素，不进行范围检查。           |
| `front()`                              | 返回第一个元素的引用。                            |
| `back()`                               | 返回最后一个元素的引用。                          |
| `begin()`                              | 返回指向第一个元素的迭代器。                      |
| `end()`                                | 返回指向末尾元素后一位置的迭代器。                |
| `rbegin()`                             | 返回指向最后一个元素的逆向迭代器。                |
| `rend()`                               | 返回指向第一个元素之前位置的逆向迭代器。          |
| `empty()`                              | 检查容器是否为空。                                |
| `size()`                               | 返回容器中的元素个数。                            |
| `max_size()`                           | 返回容器可容纳的最大元素个数。                    |
| `clear()`                              | 清除容器中的所有元素。                            |
| `insert(iterator pos, const T& value)` | 在 `pos` 位置插入 `value` 元素。                  |
| `erase(iterator pos)`                  | 移除 `pos` 位置的元素。                           |
| `push_back(const T& value)`            | 在容器末尾添加 `value` 元素。                     |
| `pop_back()`                           | 移除容器末尾的元素。                              |
| `push_front(const T& value)`           | 在容器前端添加 `value` 元素。                     |
| `pop_front()`                          | 移除容器前端的元素。                              |
| `resize(size_type count)`              | 调整容器大小为 `count`，多出部分用默认值填充。    |
| `swap(deque& other)`                   | 交换两个 `deque` 容器的内容。                     |
| `get_allocator()`                      | 返回一个用于构造双端队列的分配器对象的副本。      |

### \<sstream>

#### istringstream 输入字符串流 

istringstream 类似于cin，读取流数据，给变量赋值。

```
//字符串数据（注意字符串中间有一个空格）：用来区分是两个数据一个是年龄，一个是姓名
string data("23 Jay");

//创建一个istringstream对象iss，用字符串数据初始化对象iss
istringstream iss(data);

int age;
string name;

//从字符串流中读取数据赋值给变量
iss >> age >> name;
```

#### ostringstream

类似的，ostringstream的使用和cout也是一样的。

ostringstream使用输出操作的时候，不是输出到屏幕，而是会把数据写入到自己内部的一个缓冲区中。

这个缓冲区可以通过成员函数 str() 得到这个 string 格式的数据内容。

### **输出操作符重载**+解耦，文件->控制台

```c++
#include <iostream>
#include <fstream>
#include <string>

class Student
{
	friend std::ostream& operator<<(std::ostream& os, const Student& stu);
	//由于输入操作符函数会写(修改)对象的成员变量，所以不可以传const参数
	friend std::istream& operator>>(std::istream& os, Student& stu);
public:
	std::string m_id;//学号
	std::string m_name;//姓名
	int m_age;//年龄
	std::string m_date;//生日
};

std::ostream& operator<<(std::ostream& os, const Student& stu)
{
	os
		<< stu.m_id << " "
		<< stu.m_name << " "
		<< stu.m_age << " "
		<< stu.m_date;
	return os;
}
std::istream& operator>>(std::istream& is, Student& stu)
{
	is
		>> stu.m_id
		>> stu.m_name
		>> stu.m_age
		>> stu.m_date;
	return is;
}


int main(int argc, char** argv)
{
	//定义一个学生对象
	Student stu;
	std::ifstream fin("students.txt");
	if (!fin.is_open())
	{
		std::cout << "error! can not open file students.txt!" << std::endl;
		return -1;
	}
	fin >> stu;//从文件中读取信息赋值给stu
	//输出学生信息到文件
	std::cout << stu << std::endl;

	return 0;
}


```



### \<iostream\>

主要类

- `std::istream`：用于输入操作的抽象基类。
- `std::ostream`：用于输出操作的抽象基类。
- `std::iostream`：继承自`std::istream`和`std::ostream`，用于同时进行输入和输出操作。
- `std::cin`：标准输入流对象，通常与键盘关联。
- `std::cout`：标准输出流对象，通常与屏幕关联。
- `std::cerr`：标准错误输出流对象，不带缓冲，通常与屏幕关联。
- `std::clog`：标准日志流对象，带缓冲，通常与屏幕关联。

### \<string\>

| 函数名       | 描述                                       | 示例代码                                      |
| ------------ | ------------------------------------------ | --------------------------------------------- |
| `size()`     | 返回字符串的长度（字符数）。               | `std::cout << str.size();`                    |
| `length()`   | 与 `size()` 相同，返回字符串的长度。       | `std::cout << str.length();`                  |
| `empty()`    | 判断字符串是否为空。                       | `std::cout << (str.empty() ? "Yes" : "No");`  |
| `operator[]` | 访问字符串中指定位置的字符。               | `std::cout << str[0];`                        |
| `at()`       | 访问字符串中指定位置的字符（带边界检查）。 | `std::cout << str.at(0);`                     |
| `substr()`   | 返回从指定位置开始的子字符串。             | `std::string sub = str.substr(0, 5);`         |
| `find()`     | 查找子字符串在字符串中的位置。             | `std::cout << str.find("sub") << std::endl;`  |
| `rfind()`    | 从字符串末尾开始查找子字符串的位置。       | `std::cout << str.rfind("sub") << std::endl;` |
| `replace()`  | 替换字符串中的部分内容。                   | `str.replace(pos, length, "new_substring");`  |
| `append()`   | 在字符串末尾添加内容。                     | `str.append(" more");`                        |
| `insert()`   | 在指定位置插入内容。                       | `str.insert(pos, "inserted");`                |
| `erase()`    | 删除指定位置的字符或子字符串。             | `str.erase(pos, length);`                     |
| `clear()`    | 清空字符串。                               | `str.clear();`                                |

| `c_str()`             | 返回 C 风格的字符串（以 null 结尾）。          | `const char* cstr = str.c_str();`              |
| --------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `data()`              | 返回指向字符数据的指针（C++11 及之后的版本）。 | `const char* data = str.data();`               |
| `compare()`           | 比较两个字符串。                               | `int result = str.compare("other");`           |
| `find_first_of()`     | 查找第一个匹配任意字符的位置。                 | `size_t pos = str.find_first_of("aeiou");`     |
| `find_last_of()`      | 查找最后一个匹配任意字符的位置。               | `size_t pos = str.find_last_of("aeiou");`      |
| `find_first_not_of()` | 查找第一个不匹配任意字符的位置。               | `size_t pos = str.find_first_not_of("aeiou");` |
| `find_last_not_of()`  | 查找最后一个不匹配任意字符的位置。             | `size_t pos = str.find_last_not_of("aeiou");`  |

### lambda 表达式

lambda表达式实际上**就是一个类似函数的可以被调用的对象。**

和函数一样可以使用圆括号调用。

只不过，这个函数可以定义在代码的任意位置。非常的**灵活，自由**。而函数不能定义在其他函数的内部。

lambda表达式比函数更具有优势的地方在于，**它可以将当前作用域中的变量，对象直接拿来使用或者修改。**

### lambda表达式的格式

```cpp
[capture list] (parameter list) -> return type { function body}
```

其中，各个部分的含义如下：

1） 捕获列表 capture list

捕获列表，可以写**当前作用域中的变量名**，这些变量就可以在lambda表达式内直接使用了。如果**为空，表示不需要使用当前作用域中的变量。**

2） 返回值类型 return type

函数（lambda表达式）返回值类型；

**可写auto**，编译器会自动推导返回值类型；

3） 参数列表 parameter list

参数列表，这个跟普通函数的参数列表是一样的，表示**形参列表**。

4） 函数体 function body

函数体，和普通函数的函数体一样，里面写你的函数逻辑。

例子

```
#include "lambda.h"

using namespace std;

int main()
{
    int start = 100;
    //值捕获start变量
    auto add = [start](int a, int b) { return start + a + b; };

    cout << add(20, 3) << endl;// 100+20+3=123

    return 0;
}
```

#### 捕获列表

- 值捕获[变量名]
- 引用捕获[&变量名]
- 值捕获全部[=]：捕获当前作用域中的所有变量
-  引用捕获全部[&]

待进一步精进

### function

function是一个函数类型。

这种类型和其他任何类型一样有类型声明和这种类型的变量。

function用来实现调用功能代码。

```
#include <functional>
```

例如：

```cpp
#include <iostream>
#include <functional>
using namespace std;

void print_hello(void)
{
    cout << "Hello World1" << endl;
}

int main(int, char* [])
{
    function<void(void)> print = print_hello;
    print();

    print = []() {cout << "Hello World2" << endl; };
    print();

    return 0;
};
```

程序输出：

```cpp
Hello World1
Hello World2
```

其中，function<void(void)>我们可以看出function这种类型是一个模板类型，其中模板参数就是函数的声明样式。

void(void)是函数的声明样式。第一个void表示这个函数没有返回值，第二个void表示这个函数没有参数。

```cpp
function<void(void)> print = print_hello;
```

这句代码表示我们创建了一个print函数对象

，使用print_hello函数的函数名对其初始化。

2 function的由来

C++的普通函数，lambda表达式，类的成员函数，仿函数（类的函数操作符重载），都具有函数的行为，但是他们又各不相同。

我们希望它们都是一样的，不需要区分对待，可以混合使用，这就是function的由来。

function统一了它们。

**function可以让你在任意位置调用其他地方的代码。**



### \<algorithm>

定义了一组模板函数，这些函数可以应用于**任何类型的容器，只要容器支持迭代器**。这些算法通常**接受两个或更多的迭代器作为参数**，表示操作的**起始和结束位置**。

大多数 `<algorithm>` 中的函数都遵循以下基本语法：

```C++
algorithm_name(container.begin(), container.end(), ...);
```

#### 排序算法

sort:

```C++
#include <algorithm>
```

```c++
std::vector<int> numberArray{ 1,3,5,7,9,2,4,6,8 };
//对vector的所有元素排序 a < b < c ...
//执行完这条语句，数组numberArray中的数据就已经是升序的了
std::sort(numberArray.begin(), numberArray.end());
```

默认情况下，sort通过<进行排序，故可通过重载操作符<对其他类型变量进行排序

给 std::sort 传递参数：

```C++
std::sort(numberArray.begin(), numberArray.end(), [](int a, int b) {return a < b; });//升序排列
std::sort(numberArray.begin(), numberArray.end(), [](int a, int b) {return a > b; });//降序排列
```



std::partial_sort: 对部分区间排序，前 n 个元素为有序。

```C++
std::partial_sort(vec.begin(), vec.begin() + 3, vec.end());
```

std::stable_sort: 稳定排序，保留相等元素的相对顺序。

```C++
std::stable_sort(vec.begin(), vec.end());
```

#### 搜索算法

find：

```C++
auto it = find(container.begin(), container.end(), value);
```

如果找到，it 将指向匹配的元素；如果没有找到，it **将等于 container.end()**。

```C++
std::vector<int> numbers = {1, 2, 3, 4, 5};
auto it = std::find(numbers.begin(), numbers.end(), 3);
if (it != numbers.end()) {
    std::cout << "Found: " << *it << std::endl;
} else {
    std::cout << "Value not found." << std::endl;
}
```

std::binary_search: 对有序区间进行二分查找。

```C++
std::sort(vec.begin(), vec.end());  // 先排序
bool found = std::binary_search(vec.begin(), vec.end(), 4);
```

std::find_if: 查找第一个满足特定条件的元素。

```C++
auto it = std::find_if(vec.begin(), vec.end(), [](int x) { return x > 3; });
```

#### 复制算法

函数：copy

定义：将一个范围内的元素复制到另一个容器或数组。

语法：

```C++
copy(source_begin, source_end, destination_begin);
```

```C++
std::vector<int> source = {1, 2, 3, 4, 5};
int destination[5];
std::copy(source.begin(), source.end(), destination);
```

#### 比较算法

函数：equal

定义：比较两个容器或两个范围内的元素是否相等。

语法：

```C++
bool result = equal(first1, last1, first2);

或

bool result = equal(first1, last1, first2, compare_function);
```

```C++
std::vector<int> v1 = {1, 2, 3, 4, 5};
std::vector<int> v2 = {1, 2, 3, 4, 5};

bool are_equal = std::equal(v1.begin(), v1.end(), v2.begin());
```

#### 修改算法

std::reverse: 反转区间内的元素顺序。

```C++
std::reverse(vec.begin(), vec.end());
```

std::fill: 将指定区间内的所有元素赋值为某个值。

```C++
std::fill(vec.begin(), vec.end(), 0);  // 所有元素设为 0
```

std::replace: 将区间内的某个值替换为另一个值。

```C++
std::replace(vec.begin(), vec.end(), 1, 99);  // 将所有 1 替换为 99
```

std::copy: 将区间内的元素复制到另一个区间。

```C++
std::vector<int> vec2(6);
std::copy(vec.begin(), vec.end(), vec2.begin());
```

#### 排列算法

std::next_permutation: 生成字典序的下一个排列，如果没有下一个排列则返回 false。

```C++
std::vector<int> vec = {1, 2, 3};
do {
    for (int n : vec) std::cout << n << " ";
    std::cout << std::endl;
} while (std::next_permutation(vec.begin(), vec.end()));
```

std::prev_permutation: 生成字典序的上一个排列。

```C++
std::prev_permutation(vec.begin(), vec.end());
```

#### 归并算法

std::merge: 将两个有序区间合并到一个有序区间。

```C++
std::vector<int> vec1 = {1, 3, 5};
std::vector<int> vec2 = {2, 4, 6};
std::vector<int> result(6);
std::merge(vec1.begin(), vec1.end(), vec2.begin(), vec2.end(), result.begin());
```

std::inplace_merge: 在单个区间中合并两个有序子区间。

```C++
std::inplace_merge(vec.begin(), middle, vec.end());
```

#### 集合算法

std::set_union: 计算两个有序集合的并集。

```C++
std::vector<int> result(10);
auto it = std::set_union(vec1.begin(), vec1.end(), vec2.begin(), vec2.end(), result.begin());
result.resize(it - result.begin());
```

std::set_intersection: 计算两个有序集合的交集。

```C++
auto it = std::set_intersection(vec1.begin(), vec1.end(), vec2.begin(), vec2.end(), result.begin());
result.resize(it - result.begin());
```

std::set_difference: 计算集合的差集。

```C++
auto it = std::set_difference(vec1.begin(), vec1.end(), vec2.begin(), vec2.end(), result.begin());
result.resize(it - result.begin());
```

#### 其他

**std::accumulate（需要 <numeric> 库）**：计算范围内元素的累计和。

```C++
#include <numeric>
int sum = std::accumulate(vec.begin(), vec.end(), 0);
```

std::for_each: 对区间内的每个元素执行操作。

```C++
std::for_each(vec.begin(), vec.end(), [](int& x) { x += 1; });
```

std::min_element 和 std::max_element: 查找区间内的最小值和最大值。

```C++
auto min_it = std::min_element(vec.begin(), vec.end());
auto max_it = std::max_element(vec.begin(), vec.end());
```

### 迭代器删除容器内元素

#### 删除第一个指定值的元素（使用find算法）

```c++
vector<int> arr{ 1,2,3,4,5,3,9,3 };
/*find 找到第一个指定值的元素，
  并返回这个元素对应的迭代器
*/ 
auto itr = find(arr.begin(), arr.end(), 3);
arr.erase(itr);// 删除第1个3
```

#### 删除所有指定值的所有元素（使用remove算法）

```C++
vector<int> arr{ 1,2,3,4,5,3,9,3 };
/*remove 把需要保留的数据紧凑的保留在数组的前面，
 并返回第一个不应该再属于数组的元素的迭代器，
 供后续按照范围删除
 remove 之后数组元素排列如下：
 1, 2, 4, 5, 9, #, #, #
*/ 
auto itr = remove(arr.begin(), arr.end(), 3);
arr.erase(itr, arr.end());// 删除 { # # # }
```

### \<iomanip\>