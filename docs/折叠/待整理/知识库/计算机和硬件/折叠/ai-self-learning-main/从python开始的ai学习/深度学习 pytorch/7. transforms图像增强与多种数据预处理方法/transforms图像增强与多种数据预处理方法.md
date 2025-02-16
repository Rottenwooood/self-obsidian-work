# transforms图像增强（一）
## 一. 什么是数据增强
数据增强又称为数据增广，数据扩增，它是对**训练集**进行变换，使训练集更丰富，从而让模型更具**泛化能力**

类比

![1](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/1.png "1")

例子：

![2](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/2.png "2")

## 二. transforms————裁剪
### 1. transforms.CenterCrop

![3](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/3.png "3")

### 2. transforms.RandomCrop

![4](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/4.png "4")

![5](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/5.png "5")

### 3. transforms.RandomResizedCrop

![6](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/6.png "6")

### 4. transforms.Five(Ten)Crop

![7](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/7.png "7")

## 三. transforms————翻转，旋转
### 1. RandomHorizontalFlip 和 RandomVerticalFlip

![8](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/8.png "8")

### 2. RandomRotation

![9](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/7.%20transforms图像增强与多种数据预处理方法/pcs/9.png "9")

