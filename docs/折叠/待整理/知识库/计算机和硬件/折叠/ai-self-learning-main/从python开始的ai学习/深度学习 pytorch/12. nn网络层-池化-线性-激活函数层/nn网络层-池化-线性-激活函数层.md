# nn网络层-池化-线性-激活函数层

## 一. 池化层-Pooling Layer

### 1. 概念

![1](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/1.png "1")

### 2. 常用函数

![2](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/2.png "2")

![3](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/3.png "3")

### 3. 反池化及常用函数

![4](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/4.png "4")

## 二. 线性层-Linear Layer

### 1. 概念

![5](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/5.png "5")

### 2. 常用函数

![6](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/6.png "6")

## 三. 激活函数层-Activation Layer

多个线性层叠加等价于一个线性层，因此没有意义，引入激活函数层，赋予多层神经网络**深度**的意义

![7](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/7.png "7")

### 1. 常用激活函数

（1）nn.Sigmoid

![8](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/8.png "8")

（2）nn.tanh

![9](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/9.png "9")

以上激活函数易导致梯度消失（从反向传播的链式法则理解）

（3）nn.ReLU

![10](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/10.png "10")

ReLU易引发梯度爆炸和死神经元

改进后的三个函数：

![11](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/12.%20nn网络层-池化-线性-激活函数层/pcs/11.png "11")
