# 总之先叫做极简Linux教程因为我才刚开始学

## 第一步

```
docker run -i -t ubuntu:15.10 /bin/bash
```

Docker Ubuntu！启动！

## 命令行操作

### 命令行环境

命令开头的 `$` 代表此命令使用普通用户权限运行；命令开头的 `#` 代表执行命令需要使用 root 权限（最高权限），一般等价于 `$ sudo 该命令`。命令行末尾的 `#` 代表此符号与其后的内容都是注释，不参与执行。

### 路径的概念

在 Windows 系统下，路径是以反斜杠 `\` 分隔的，例如：

```
C:\Windows\explorer.exe
```

代表 C 盘下 Windows 目录下的 `explorer.exe` 文件。而在类 UNIX 系统中，路径是以正斜杠 `/` 分隔的，例如：

```
/bin/ls
```

代表根目录下的 `bin` 文件夹下的 `ls` 文件。可以发现除了分隔符不同以外，类 UNIX 系统也不采用 Windows 下的盘符机制，而是采用统一的根目录。Linux 的文件系统层次结构会在[第五章](https://101.lug.ustc.edu.cn/Ch05/#fhs)介绍。

另外，以上的路径都是绝对路径，还有一种「相对路径」：

```
./file.txt  # 当前目录下的 file.txt 文件
../file.txt # 上一级目录（父目录）下的 file.txt 文件
../abc/file.txt # 上一级目录（父目录）下的 abc 文件夹下的 file.txt 文件
```

每个正在运行中的进程（包括  Shell）都有自己的「当前工作目录」（当前所在的目录），进程可以切换自己的当前工作目录，以上的相对路径都是相对于当前工作目录的。可以发现，不管当前工作目录在哪里，绝对路径对应的文件都是一致的，而相对路径对应的文件就会随着当前工作目录的变化而变化。

### 自动化脚本

Shell 脚本可以帮助程序员自动执行重复的任务。例如我们想自动编译运行一个 C 语言程序 `main.c`，我们可以在该文件的目录新建一个脚本 `run.sh`.

```
// main.c

#include <stdio.h>
int main() {
    printf("Hello world!\n");
    return 0;
}
```

```
# run.sh

gcc main.c -o main.out
./main.out
rm main.out
```

### `cmatrix`：命令行界面模拟《黑客帝国》特效显示

Linux 的命令行界面有一些显示效果很有意思的程序，`cmatrix` 是其中之一。

使用以下命令安装（软件的安装将在[第三章](https://101.lug.ustc.edu.cn/Ch03/)详细介绍）：

```
$ sudo apt install cmatrix
```

之后就可以使用 `cmatrix` 命令来查看特效效果了。按下 `q` 键或者 Ctrl + C 组合键退出。

### 什么是 shell

上面所说的命令行，实际上指的就是 shell。shell 是 Linux  中的一类程序，它可以接受通过键盘输入的命令，然后把命令交给系统执行，并将命令的输出返回给用户。现在几乎所有的 Linux 发行版都提供了一个叫  Bash 的 shell 程序，是传统 shell 的“增强版”。

### 几条简单的命令

- `ls`: 列出（**l**i**s**t）目录的内容
- `cd`: 更改目录（**c**hange **d**irectory）
- `pwd`: 查看当前所在的目录（**p**rint **w**orking **d**irectory）
