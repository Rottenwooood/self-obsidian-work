# 数据读取机制：Dataloader 与 Dataset

## 一. 人民币二分类

### 1. 回顾机器学习模型训练的步骤

![1](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/5.数据读取机制：%20Dataloader%20与%20Dataset/pcs/1.png "1")

这次主要学习数据步骤的数据读取部分

![2](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/5.数据读取机制：%20Dataloader%20与%20Dataset/pcs/2.png "2")

## 二. 数据读取的核心——DataLoader 与 Dataset
### 1. DataLoader
功能：构建可迭代的数据装载器

![3](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/5.数据读取机制：%20Dataloader%20与%20Dataset/pcs/3.png "3")

- Epoch：将所有训练样本都已输入到模型中，称为一个Epoch
- Iteration：一批样本输入到模型中，称之为一个Iteration
- Batchsize：批大小，决定一个Epoch有多少个训练样本

例

1. 样本总数：80，Batchsize：8

    1 Epoch = 10 Iteration

2. 样本总数：87，Batchsize：8

    1 Epoch = 10 Iteration ? drop_last = True

    1 Epoch = 11 Iteration ? drop_last = False

### 2. Dataset
功能：Dataset抽象类，所有自定义的Dataset需要继承它，并且复写 **__getitem()**（核心）

![4](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/5.数据读取机制：%20Dataloader%20与%20Dataset/pcs/4.png "4")

### 3. 三个问题
![5](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/5.数据读取机制：%20Dataloader%20与%20Dataset/pcs/5.png "5")

### 4. 数据读取流程图
![6](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/5.数据读取机制：%20Dataloader%20与%20Dataset/pcs/6.png "5")
