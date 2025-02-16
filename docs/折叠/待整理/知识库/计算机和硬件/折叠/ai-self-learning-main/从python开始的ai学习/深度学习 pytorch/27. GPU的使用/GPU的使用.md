# GPU的使用
## 一. CPU与GPU
![1](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/1.png "1")
## 二. 数据迁移至GPU
![2](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/2.png "2")

![3](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/3.png "3")

**注意**：所有的计算数据必须在相同的设备上

### 1. torch.cuda常用方法
![4](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/4.png "4")

![5](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/5.png "5")

## 三. 多GPU并行运算
### 1. 分发并行机制
![6](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/6.png "6")

![7](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/7.png "7")

![8](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/8.png "8")

![9](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/9.png "9")

![10](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/10.png "10")

### 2. 常见报错
![11](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/11.png "11")

模型在gpu上进行训练保存之后，在不可用gpu的设备上加载，则报错

![12](docs/折叠/待整理/知识库/计算机和硬件/折叠/ai-self-learning-main/从python开始的ai学习/深度学习%20pytorch/27.%20GPU的使用/pcs/12.png "12")

训练时采用多gpu并行运算，模型被DataParallel进行包装，使得模型网络层的命名会多一个 "module" 使加载 state_dict的时候命名不匹配，导致加载失败，报错