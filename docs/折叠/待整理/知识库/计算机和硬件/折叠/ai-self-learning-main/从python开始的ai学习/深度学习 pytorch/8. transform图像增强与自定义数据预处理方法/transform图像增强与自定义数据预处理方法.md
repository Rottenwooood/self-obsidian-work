# transform图像增强（二）
## 一. transforms————图像变换
### 1. Pad

![1](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/1.png "1")

### 2. ColorJitter

![2](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/2.png "2")

### 3. Grayscale 和 RandomGrayscale

![3](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/3.png "3")

### 4. RandomAffine

![4](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/4.png "4")
![5](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/5.png "5")

### 5. RandomErasing

![6](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/6.png "6")

**接受的是张量，是对张量进行操作**

### 6. transforms.Lambda

![7](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/7.png "7")

## 二. transforms————transforms方法操作（对预处理方法进行选择操作）

![8](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/8.png "8")

## 三. 自定义transforms方法
### 1. 怎么自定义？

想想之前讲的compose类中对于transforms方法是怎么运用的？

### 2. 自定义的标准规范

![9](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/9.png "9")

## 四. 总结

![10](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/10.png "10")

## 五. 实战应用

![11](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/8.%20transform图像增强与自定义数据预处理方法/pcs/11.png "11")
