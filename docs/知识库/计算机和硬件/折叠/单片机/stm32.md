###  STM32F103C8T6规格

- 系列:主流系列STM32F1
- 内核:ARM Cortex-M3
- 主频:72MHz
- RAM:20K (SRAM)|
- ROM:64K (Flash)
- 供电:2.0~3.6V(标准3.3V)
- 封装:LQFP48

**片上资源/外设**

| NVIC                             | 嵌套向量中断控制器 | CAN     | CAN通信            |
| -------------------------------- | ------------------ | ------- | ------------------ |
| SysTick                          | 系统滴答定时器     | USB     | USB通信            |
| RCC（Reset Clock control）       | 复位和时钟控制     | RTC     | 实时时钟           |
| GPIO（General Purposed IO port） | 通用IO口           | CRC     | CRC校验            |
| AFIO（）                         | 复用IO口           | PWR     | 电源控制           |
| EXTI（EXTernal Interrupt）       | 外部中断           | BKP     | 备份寄存器         |
| TIM（Timer）                     | 定时器             | IWDG    | 独立看门狗         |
| ADC                              | 模数转换器         | WWDG    | 窗口看门狗         |
| DMA                              | 直接内存访问       | DAC     | 数模转换器         |
| USART                            | 同步/异步串口通信  | SDIO    | SD卡接口           |
| I2C                              | I2C通信            | FSMC    | 可变静态存储控制器 |
| SPI                              | SPI通信            | USB OTG | USB主机接口        |

### 命名规则

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241121140002759.png" alt="image-20241121140002759" style="zoom:67%;" />

### 系统结构

![image-20241124211720824](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124211720824.png)

### 引脚定义

蓝色：最小系统相关
红色：最小系统相关
加粗：常用

FT：引脚可容忍5V电压（但板子本身最高只输出3.3V）

![image-20241124211055250](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124211055250.png)

### 启动配置

![image-20241119165920203](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241119165920203.png)

- 最常用
- 串口下载用，系统存储器存储bootloader程序，其接收串口数据，刷新到主闪存中
- 用于程序调试

### 最小系统电路

![image-20241124204238375](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124204238375.png)

### 兼容

GigaDevice/MindMotion兼容STM32

### 型号分类及缩写

| **缩写** | **释义**           | **Flash****容量** | **型号**          |
| -------- | ------------------ | ----------------- | ----------------- |
| LD_VL    | 小容量产品超值系列 | 16~32K            | STM32F100         |
| MD_VL    | 中容量产品超值系列 | 64~128K           | STM32F100         |
| HD_VL    | 大容量产品超值系列 | 256~512K          | STM32F100         |
| LD       | 小容量产品         | 16~32K            | STM32F101/102/103 |
| MD       | 中容量产品         | 64~128K           | STM32F101/102/103 |
| HD       | 大容量产品         | 256~512K          | STM32F101/102/103 |
| XL       | 加大容量产品       | 大于512K          | STM32F101/102/103 |
| CL       | 互联型产品         | -                 | STM32F105/107     |

### 新建工程步骤

- 建立工程文件夹，Keil中新建工程，选择型号
- 工程文件夹里建立Start、Library、User等文件夹，复制固件库里面的文件到工程文件夹
- 工程里对应建立Start、Library、User等同名称的分组，然后将文件夹内的文件添加到工程分组里
- 工程选项，C/C++，Include Paths内声明所有包含头文件的文件夹
- 工程选项，C/C++，Define内定义USE_STDPERIPH_DRIVER（使用库函数时）
- 工程选项，Debug，下拉列表选择对应调试器，Settings，Flash Download里勾选Reset and Run（STLINK）

### 基于寄存器开发

需要看着数据手册

### 基于库函数开发

需要随时去查看函数的声明，定义和说明

### 工程架构

![image-20241124210332972](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124210332972.png)

Manage Project Items中选择三个文件夹中的文件

- Start：先添加md_s文件，然后添加其他.c.h文件
- Library：所有
- User：所有

工程选项

- C/C++
  - include paths,添加三个文件夹
  - define栏填写USE_STDPERIPH_DRIVER
- debug
  - 调试器选择ST-link
  - setting
    - flash download 
      - 选择reset and run
- main.c最后一行是空格

### 库函数

```C++
//gpio.h
void GPIO_DeInit(GPIO_TypeDef* GPIOx);//复位GPIOx
void GPIO_AFIODeInit(void);//复位AFIO
void GPIO_Init(GPIO_TypeDef* GPIOx, GPIO_InitTypeDef* GPIO_InitStruct);//用结构体初始化GPIO口
void GPIO_StructInit(GPIO_InitTypeDef* GPIO_InitStruct);//给结构体变量赋初始值
//GPIO读取函数*4
uint8_t GPIO_ReadInputDataBit(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);
uint16_t GPIO_ReadInputData(GPIO_TypeDef* GPIOx);
uint8_t GPIO_ReadOutputDataBit(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//读取自己输出的数据
uint16_t GPIO_ReadOutputData(GPIO_TypeDef* GPIOx);
//GPIO写入函数*4
void GPIO_SetBits(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//设为高电平
void GPIO_ResetBits(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//设为低电平
void GPIO_WriteBit(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin, BitAction BitVal);//设为BitVal
void GPIO_Write(GPIO_TypeDef* GPIOx, uint16_t PortVal);//同时设置十六个端口
//暂时不会用到,AFIO的函数
void GPIO_PinLockConfig(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//锁定引脚配置
void GPIO_EventOutputConfig(uint8_t GPIO_PortSource, uint8_t GPIO_PinSource);//配置AFIO事件输出功能
void GPIO_EventOutputCmd(FunctionalState NewState);//配置AFIO事件输出功能
void GPIO_PinRemapConfig(uint32_t GPIO_Remap, FunctionalState NewState);//引脚重映射
void GPIO_EXTILineConfig(uint8_t GPIO_PortSource, uint8_t GPIO_PinSource);//AFIO数据选择器，选择所需中断引脚
void GPIO_ETH_MediaInterfaceConfig(uint32_t GPIO_ETH_MediaInterface);//与以太网相关

typedef enum
{ GPIO_Mode_AIN = 0x0,//模拟输入
  GPIO_Mode_IN_FLOATING = 0x04,//浮空输入
  GPIO_Mode_IPD = 0x28,//下拉输入
  GPIO_Mode_IPU = 0x48,//上拉输入
  GPIO_Mode_Out_OD = 0x14,//开口输出
  GPIO_Mode_Out_PP = 0x10,//推挽输出
  GPIO_Mode_AF_OD = 0x1C,//复用开漏
  GPIO_Mode_AF_PP = 0x18//复用推挽
}GPIOMode_TypeDef;
```

```C++
//rcc.h
692 void RCC_AHBPeriphClockCmd(uint32_t RCC_AHBPeriph, FunctionalState NewState);
693 void RCC_APB2PeriphClockCmd(uint32_t RCC_APB2Periph, FunctionalState NewState);
694 void RCC_APB1PeriphClockCmd(uint32_t RCC_APB1Periph, FunctionalState NewState);
```

```C++
//exti.h
void EXTI_DeInit(void);//复位
void EXTI_Init(EXTI_InitTypeDef* EXTI_InitStruct);//初始化
void EXTI_StructInit(EXTI_InitTypeDef* EXTI_InitStruct);//赋予结构体初始值
void EXTI_GenerateSWInterrupt(uint32_t EXTI_Line);//软件触发外部中断
FlagStatus EXTI_GetFlagStatus(uint32_t EXTI_Line);//主程序中查看标志位
void EXTI_ClearFlag(uint32_t EXTI_Line);//主程序中清除标志位
ITStatus EXTI_GetITStatus(uint32_t EXTI_Line);//中断函数中查看标志位
void EXTI_ClearITPendingBit(uint32_t EXTI_Line);//中断函数中清除标志位
```

```c++
//misc.h
void NVIC_PriorityGroupConfig(uint32_t NVIC_PriorityGroup);//中断分组
void NVIC_Init(NVIC_InitTypeDef* NVIC_InitStruct);
void NVIC_SetVectorTable(uint32_t NVIC_VectTab, uint32_t Offset);//设置中断向量表
void NVIC_SystemLPConfig(uint8_t LowPowerMode, FunctionalState NewState);//系统低功耗配置
void SysTick_CLKSourceConfig(uint32_t SysTick_CLKSource);
```



### GPIO

#### 简介

- GPIO（General Purpose Input Output）通用输入输出口
- 可配置为8种输入输出模式
- 引脚电平：0V~3.3V，部分引脚可容忍5V
- **输出模式**下可**控制**端口输出高低电平，用以驱动LED、控制蜂鸣器、模拟通信协议输出时序等
- **输入模式**下可**读取**端口的高低电平或电压，用于读取按键输入、外接模块电平信号输入、ADC电压采集、模拟通信协议接收数据等。如外来模块输出模拟量，可将GPIO配置为模拟输入的模式，配合ADC外设

#### 基本结构

![image-20241124211657174](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124211657174.png)

![image-20241124211600590](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124211600590.png)

- 寄存器仅低十六位有端口
- 驱动器用于增大驱动能力，如用于点灯

#### 位结构

![image-20241124213700762](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124213700762.png)

当输入电压过高时（>3.3V），电流会直接流入VDD而不是内部电路，以免损害内部电路



![image-20241124212342338](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124212342338.png)

- 这个地方这里连接了一个上拉电阻和一个下拉电阻
- 上面导从下面断开——上拉输入模式
- 下面导通上面断开——下拉输入模式
- 两个都断开——浮空输入模式
- 其用于提供默认输入电压

##### 施密特触发器

对输入电压进行整形

执行逻辑

- 如果输入电压大于某一阈值，输出就会瞬间升为高电平
- 如果输入电压小于某一阈值，输出就会瞬间降为低电平

有效地避免因信号波动造成的输出抖动现象

![image-20241124213506034](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124213506034.png)

#### 输出

##### 设置IO口值

第一种方式是**先读出**这个寄存器，然后用**按位与和按位或**的方式更改某一位最后再将更改后的数据**写回去**在c语言中就是余等于和或等于的操作

第二种方式设置位设置，位清除寄存器。

- 向需要置一的位对应的位设置寄存器的对应位写1，不需要更改的写0；
- 向需要置零的位对应的位清除寄存器的对应位写1，不需要更改的写0；

第三种方式，位带

读写STM32中的位带区域
这个位带的作用就跟51单片机的位寻址作用差不多哈
在STM32中，专门分配的有一段地址区域，这段地址映射了RAM和外设寄存器所有的位
读写这段地址中的数据就相当于读写所映射位置的某一位

##### PMOS和NMOS

###### 推挽输出模式

在推挽输出模式下，P-MOS和N-MOS均有效
数据寄存器为1时，上管导通，下管断开，输出直接接到VDD，输出高电平
数据寄存器为0时，上管断开，下管导通，输出直接接到VSS，输出低电平
高低电平均有较强的驱动能力，所以也可以叫强推输出模式

###### 开漏输出模式

在开漏输出模式下，这个P-MOS是无效的，只有N-MOS在工作
数据寄存器为1时，下管断开，这时输出相当于断开，也就是高阻模式
数据寄存器为0时，下管导通，输出直接接到VSS，也就是输出低电平
这种模式下只有低由平有驱动能力，高电平是没有驱动能力的

可以作为通信协议的驱动方式，比如I2C通信的引脚，就是使用的开漏模式，在多机通信的情况下，这个模式可以避免各个设备的相互干扰

###### 关闭

输入时配置为关闭，两个MOS管都无效

#### 模式

通过配置GPIO的端口配置寄存器，端口可以配置成以下8种模式

| **模式名称** | **性质** | **特征**                                           |
| ------------ | -------- | -------------------------------------------------- |
| 浮空输入     | 数字输入 | 可读取引脚电平，若引脚悬空，则电平不确定           |
| 上拉输入     | 数字输入 | 可读取引脚电平，内部连接上拉电阻，悬空时默认高电平 |
| 下拉输入     | 数字输入 | 可读取引脚电平，内部连接下拉电阻，悬空时默认低电平 |
| 模拟输入     | 模拟输入 | GPIO无效，引脚直接接入内部ADC                      |
| 开漏输出     | 数字输出 | 可输出引脚电平，高电平为高阻态，低电平接VSS        |
| 推挽输出     | 数字输出 | 可输出引脚电平，高电平接VDD，低电平接VSS           |
| 复用开漏输出 | 数字输出 | 由片上外设控制，高电平为高阻态，低电平接VSS        |
| 复用推挽输出 | 数字输出 | 由片上外设控制，高电平接VDD，低电平接VSS           |

#### 寄存器操作相关参考数据手册

### LED和蜂鸣器

LED：

LED：发光二极管，正向通电点亮，反向通电不亮。长接线柱为正极，内部较小的一边为正极

有源蜂鸣器：内部自带振荡源，将正负极接上直流电压即可持续发声，频率固定无源蜂鸣器：内部不带振荡源，需要控制器提供振荡脉冲才可发声，调整提供振荡脉冲的频率，可发出不同频率的声音

#### 两种电路

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124222824245.png" alt="image-20241124222824245" style="zoom:67%;" />

前一种是低电平有效，后一种是高电平有效

推挽输出模式下，高低电平驱动能力都很强，因此均可，但一般倾向于前一种，因为大多数单片机都是高电平弱驱动，低电平强驱动

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124223308150.png" alt="image-20241124223308150" style="zoom:67%;" />

前一种，使用PNP三极管引脚为低电平导通，高电平截至，
后一种使用NPN三极管，操作逻辑相反

### 面包板

![image-20241124223703521](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241124223703521.png)

跳线：绿色相距0格，蓝色1格，棕色2格，灰色3格，橙色4格

### 002 LED闪烁

![image-20241126170730585](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241126170730585.png)

rcc.h主要使用这三个函数

```c++
//rcc.h
692 void RCC_AHBPeriphClockCmd(uint32_t RCC_AHBPeriph, FunctionalState NewState);
693 void RCC_APB2PeriphClockCmd(uint32_t RCC_APB2Periph, FunctionalState NewState);
694 void RCC_APB1PeriphClockCmd(uint32_t RCC_APB1Periph, FunctionalState NewState);
```

gpio.h

```c++
//gpio.h
void GPIO_DeInit(GPIO_TypeDef* GPIOx);//复位GPIOx
void GPIO_AFIODeInit(void);//复位AFIO
void GPIO_Init(GPIO_TypeDef* GPIOx, GPIO_InitTypeDef* GPIO_InitStruct);//用结构体初始化GPIO口
void GPIO_StructInit(GPIO_InitTypeDef* GPIO_InitStruct);//给结构体变量赋初始值
//GPIO读取函数*4
uint8_t GPIO_ReadInputDataBit(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);
uint16_t GPIO_ReadInputData(GPIO_TypeDef* GPIOx);
uint8_t GPIO_ReadOutputDataBit(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//读取自己输出的数据
uint16_t GPIO_ReadOutputData(GPIO_TypeDef* GPIOx);
//GPIO写入函数*4
void GPIO_SetBits(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//设为高电平
void GPIO_ResetBits(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//设为低电平
void GPIO_WriteBit(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin, BitAction BitVal);//设为BitVal
void GPIO_Write(GPIO_TypeDef* GPIOx, uint16_t PortVal);//同时设置十六个端口
//暂时不会用到,AFIO的函数
void GPIO_PinLockConfig(GPIO_TypeDef* GPIOx, uint16_t GPIO_Pin);//锁定引脚配置
void GPIO_EventOutputConfig(uint8_t GPIO_PortSource, uint8_t GPIO_PinSource);//配置AFIO事件输出功能
void GPIO_EventOutputCmd(FunctionalState NewState);//配置AFIO事件输出功能
void GPIO_PinRemapConfig(uint32_t GPIO_Remap, FunctionalState NewState);//引脚重映射
void GPIO_EXTILineConfig(uint8_t GPIO_PortSource, uint8_t GPIO_PinSource);//AFIO数据选择器，选择所需中断引脚
void GPIO_ETH_MediaInterfaceConfig(uint32_t GPIO_ETH_MediaInterface);//与以太网相关

typedef enum
{ GPIO_Mode_AIN = 0x0,//模拟输入
  GPIO_Mode_IN_FLOATING = 0x04,//浮空输入
  GPIO_Mode_IPD = 0x28,//下拉输入
  GPIO_Mode_IPU = 0x48,//上拉输入
  GPIO_Mode_Out_OD = 0x14,//开口输出
  GPIO_Mode_Out_PP = 0x10,//推挽输出
  GPIO_Mode_AF_OD = 0x1C,//复用开漏
  GPIO_Mode_AF_PP = 0x18//复用推挽
}GPIOMode_TypeDef;
```

> **Build和Rebuild的区别**
>
> Build 只针对在上次编译之后更改过的文件进行编译，而 Rebuild 会编译所有文件。 Build 编译的范围包括有更新的 Projects 以及依赖这些 Projects 的项目。 Rebuild 则是完全清除之前的构建结果，然后从零开始进行完整的构建过程。 它会清理所有的中间文件、目标文件以及最终的输出，然后再进行一次全新的构建。

```c++
//main.c
#include "stm32f10x.h"                  // Device header
#include "Delay.h"

int main(void){
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA,ENABLE);
	
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_Out_PP;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_0;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;
	GPIO_Init(GPIOA,&GPIO_InitStructure);
	//GPIO_SetBits(GPIOA,GPIO_Pin_0);
	//GPIO_ResetBits(GPIOA,GPIO_Pin_0);
	
	
	while(1){
		GPIO_WriteBit(GPIOA,GPIO_Pin_0,Bit_RESET);
		Delay_ms(500);
		GPIO_WriteBit(GPIOA,GPIO_Pin_0,Bit_SET);
		Delay_ms(500);
	}
}

```

### 003 LED流水灯

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241126210134736.png" alt="image-20241126210134736" style="zoom:67%;" />

```c++
//main.c
#include "stm32f10x.h"                  // Device header
#include "Delay.h"

int main(void){
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA,ENABLE);
	
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_Out_PP;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_All;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;
	GPIO_Init(GPIOA,&GPIO_InitStructure);
	//GPIO_SetBits(GPIOA,GPIO_Pin_0);
	//GPIO_ResetBits(GPIOA,GPIO_Pin_0);
	
	
	while(1){
		GPIO_Write(GPIOA,~0x0001);//0000 0000 0000 0001
		Delay_ms(500);
		GPIO_Write(GPIOA,~0x0002);//0000 0000 0000 0010
		Delay_ms(500);
		GPIO_Write(GPIOA,~0x0004);//0000 0000 0000 0100
		Delay_ms(500);
		GPIO_Write(GPIOA,~0x0008);//0000 0000 0000 1000
		Delay_ms(500);
		GPIO_Write(GPIOA,~0x0010);//0000 0000 0001 0000
		Delay_ms(500);
		GPIO_Write(GPIOA,~0x0020);//0000 0000 0010 0000
		Delay_ms(500);
		GPIO_Write(GPIOA,~0x0040);//0000 0000 0100 0000
		Delay_ms(500);
		GPIO_Write(GPIOA,~0x0080);//0000 0000 1000 0000
		Delay_ms(500);
	}
}

```

### 004 蜂鸣器

![image-20241126205817880](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241126205817880.png)

> A15,B3,B4是调试端口，一般不用作普通I/O使用，需经过配置才可用作普通I/O

> **上拉电阻和下拉电阻**
>
> 想象一个杆子被两个弹簧所拉，一个拉向天花板，一个拉向地面，弹簧就相当于电阻，杆子的高度就相当于电压的大小，电阻越小，对应拉力越大。强/弱上/下拉，即对应电阻的小/大上/下

### 传感器模块

传感器元件（光敏电阻/热敏电阻/红外接收管等）的电阻N1会随外界模拟量的变化而变化，通过与定值电阻分压即可得到模拟电压输出，再通过电压比较器进行二值化即可得到数字电压输出

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128133108941.png" alt="image-20241128133108941" style="zoom:67%;" /><img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128133115644.png" alt="image-20241128133115644" style="zoom:67%;" />

2.IN-一端接电位器，另一端接LM393。拧动电位器，IN-就会生成一个可调的阈值电压

3.N1可变电阻,AO = Analog Output 模拟输出，IN+接LM393，

1.LM393：电压比较器芯片，用于二值化，其实就是运算放大器。IN+和IN-比较后得出二值化结果，即DO数字电压输出

4.电源指示灯

5.DO输出指示灯，指示DO的输出电平。低电平点亮，高电平熄灭。R5上拉电阻用于保证默认输出为高电平

### 硬件电路

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128134731077.png" alt="image-20241128134731077" style="zoom:80%;" />

1.上拉输入模式

2.上拉输入模式或浮空输入模式

3.下拉输入模式

4.下拉输入模式或浮空输入模式

一般用上两种

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128141159672.png" alt="image-20241128141159672" style="zoom:67%;" />

### stm32中c语言

![image-20241128141300706](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128141300706.png)

### 005 按键控制LED

![image-20241128143254137](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128143254137.png)

显示提示：Ctrl-Alt+空格

注意：编写代码时注意每个文件最后一行为回车键

```c++
//main.c
#include "stm32f10x.h"                  // Device header
#include "Delay.h"
#include "LED.h"
#include "Key.h"

uint8_t KeyNum;
int main(void){
	LED_Init();
	Key_Init();
	
	while(1){
		KeyNum=Key_GetNum();
		if(KeyNum==1){
			LED1_Turn();
		}
		if(KeyNum==2){
			LED2_Turn();
		}
		
		//LED1_On();
		//LED2_Off();
		//Delay_ms(500);
		//LED1_Off();
		//LED2_On();
		//Delay_ms(500);
		
	}
}

```

```c++
//Key.c
#include "stm32f10x.h"                  // Device header
#include "Delay.h"

void Key_Init(void){
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB,ENABLE);
	
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_IPU;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_1 | GPIO_Pin_11;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;//无用
	GPIO_Init(GPIOB,&GPIO_InitStructure);
}

uint8_t Key_GetNum(void){
	uint8_t KeyNum=0;
	
	if(GPIO_ReadInputDataBit(GPIOB,GPIO_Pin_1) == 0){
		Delay_ms(20);
		while(GPIO_ReadInputDataBit(GPIOB,GPIO_Pin_1) == 0);
		Delay_ms(20);
		KeyNum=1;
	}
	
	if(GPIO_ReadInputDataBit(GPIOB,GPIO_Pin_11) == 0){
		Delay_ms(20);
		while(GPIO_ReadInputDataBit(GPIOB,GPIO_Pin_11) == 0);
		Delay_ms(20);
		KeyNum=2;
	}
	return KeyNum;
}

```

```c++
//LED.c
#include "stm32f10x.h"                  // Device header

void LED_Init(void){
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOA,ENABLE);
	
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_Out_PP;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_1 | GPIO_Pin_2;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;
	GPIO_Init(GPIOA,&GPIO_InitStructure);
	
	GPIO_SetBits(GPIOA,GPIO_Pin_1|GPIO_Pin_2);//设为高电平，熄灭
}

void LED1_Turn(void){
	if(GPIO_ReadOutputDataBit(GPIOA,GPIO_Pin_1)==0){
		GPIO_SetBits(GPIOA,GPIO_Pin_1);
	}
	else{
		GPIO_ResetBits(GPIOA,GPIO_Pin_1);
	}
}

void LED2_Turn(void){
	if(GPIO_ReadOutputDataBit(GPIOA,GPIO_Pin_2)==0){
		GPIO_SetBits(GPIOA,GPIO_Pin_2);
	}
	else{
		GPIO_ResetBits(GPIOA,GPIO_Pin_2);
	}
}

void LED1_On(void){
	GPIO_ResetBits(GPIOA,GPIO_Pin_1);//设为低电平，点亮
}

void LED1_Off(void){
	GPIO_SetBits(GPIOA,GPIO_Pin_1);//设为高电平，熄灭
}

void LED2_On(void){
	GPIO_ResetBits(GPIOA,GPIO_Pin_2);//设为低电平，点亮
}

void LED2_Off(void){
	GPIO_SetBits(GPIOA,GPIO_Pin_2);//设为高电平，熄灭
}

```

### 006 光敏电阻控制蜂鸣器

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128162013804.png" alt="image-20241128162013804" style="zoom:80%;" />

光线越暗，电阻越大，输出高电平

```c++
//main.c
#include "stm32f10x.h"                  // Device header
#include "Delay.h"
#include "Buzzer.h"
#include "LightSensor.h"

uint8_t KeyNum;
int main(void){
	Buzzer_Init();
	LightSensor_Init();
	while(1){
		if(LightSensor_Get()==1){//光线暗
			Buzzer_On();
			Delay_ms(500);
			Buzzer_Off();
			Delay_ms(500);
		}
		
		//Buzzer_Turn();
		//Delay_ms(500);
		//Buzzer_Turn();
		//Delay_ms(500);
		//LED1_On();
		//LED2_Off();
		//Delay_ms(500);
		//LED1_Off();
		//LED2_On();
		//Delay_ms(500);
		
	}
}

```

```c++
//Buzzer.c
#include "stm32f10x.h"                  // Device header

void Buzzer_Init(void){
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB,ENABLE);
	
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_Out_PP;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_12;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;
	GPIO_Init(GPIOB,&GPIO_InitStructure);
	
	GPIO_SetBits(GPIOB,GPIO_Pin_12);//设为高电平，熄灭
}

void Buzzer_Turn(void){
	if(GPIO_ReadOutputDataBit(GPIOB,GPIO_Pin_12)==0){
		GPIO_SetBits(GPIOB,GPIO_Pin_12);
	}
	else{
		GPIO_ResetBits(GPIOB,GPIO_Pin_12);
	}
}


void Buzzer_On(void){
	GPIO_ResetBits(GPIOB,GPIO_Pin_12);//设为低电平，点亮
}

void Buzzer_Off(void){
	GPIO_SetBits(GPIOB,GPIO_Pin_12);//设为高电平，熄灭
}

```

```c++
//LightSensor.c
#include "stm32f10x.h"                  // Device header

void LightSensor_Init(void){
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB,ENABLE);
	
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_IPU;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_13;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;//无用
	GPIO_Init(GPIOB,&GPIO_InitStructure);
}

uint8_t LightSensor_Get(void){
	return GPIO_ReadInputDataBit(GPIOB,GPIO_Pin_13);
}

```

### OLED调试工具

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128175119964.png" alt="image-20241128175119964" style="zoom:67%;" />

> **调试方法**
>
> 串口调试：通过串口通信，将调试信息发送到电脑端，电脑使用串口助手显示调试信息
>
> 显示屏调试：直接将显示屏连接到单片机，将调试信息打印在显示屏上
>
> Keil调试模式：借助Keil软件的调试模式，可使用单步运行、设置断点、查看寄存器及变量等功能
>
> 点灯调试
>
> 注释调试
>
> 对照法

OLED（Organic Light Emitting Diode）：有机发光二极管

OLED显示屏：性能优异的新型显示屏，具有功耗低、相应速度快、宽视角、轻薄柔韧等特点

0.96寸OLED模块：小巧玲珑、占用接口少、简单易用，是电子设计中非常常见的显示屏模块

供电：3~5.5V，通信协议：I2C（四针脚）/SPI（七针脚），分辨率：128*64



![image-20241128174902851](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128174902851.png)<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241128174852804.png" alt="image-20241128174852804" style="zoom:67%;" />

| **函数**                              | **作用**             |
| ------------------------------------- | -------------------- |
| OLED_Init();                          | 初始化               |
| OLED_Clear();                         | 清屏                 |
| OLED_ShowChar(1, 1, 'A');             | 显示一个字符         |
| OLED_ShowString(1, 3, "HelloWorld!"); | 显示字符串           |
| OLED_ShowNum(2, 1, 12345, 5);         | 显示十进制数字       |
| OLED_ShowSignedNum(2, 7, -66, 2);     | 显示有符号十进制数字 |
| OLED_ShowHexNum(3, 1, 0xAA55, 4);     | 显示十六进制数字     |
| OLED_ShowBinNum(4, 1, 0xAA55, 16);    | 显示二进制数字       |

### Keil调试模式

### 中断

- 中断：在主程序运行过程中，出现了特定的中断触发条件（中断源），使得CPU暂停当前正在运行的程序，转而去处理中断程序，处理完成后又返回原来被暂停的位置继续运行
- 中断触发条件：
  - 外部中断：引脚发生电平跳变
  - 定时器：定时时间到了
  - 串口通信：接收到数据
- 中断优先级：当有多个中断源同时申请中断时，CPU会根据中断源的轻重缓急进行裁决，优先响应更加紧急的中断源
- 中断嵌套：当一个中断程序正在运行时，又有新的更高优先级的中断源申请中断，CPU再次暂停当前中断程序，转而去处理新的中断程序，处理完成后依次进行返回
- 中断一般放在中断子函数中，不需要用户主动调用，而是在中断来临时由硬件调用
- 68个可屏蔽中断通道（实际没那么多），包含EXTI、TIM、ADC、USART、SPI、I2C、RTC等多个外设
- 使用NVIC统一管理中断，每个中断通道都拥有16个可编程的优先等级，可对优先级进行分组，进一步设置抢占优先级和响应优先级
- 中断向量表：存储不固定的中断函数地址的列表

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241205225753118.png" alt="image-20241205225753118" style="zoom:67%;" />

![image-20241205232200818](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241205232200818.png)![image-20241205232206985](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241205232206985.png)![image-20241205232216042](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241205232216042.png)![image-20241205232355214](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241205232355214.png)



### NVIC

嵌套中断向量控制器，一个内核外设，用于接替CPU完成统一分配中断和管理中断的任务。

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241205231753164.png" alt="image-20241205231753164" style="zoom:67%;" />

**优先级分组**

- NVIC的中断优先级由优先级寄存器的4位（0~15）决定，这4位可以进行切分，分为高n位的抢占优先级和低4-n位的响应优先级
- 值越小优先级越高
- 抢占优先级高的可以中断嵌套，响应优先级高的可以优先排队，抢占优先级和响应优先级均相同的按中断号排队
- 5种分组方式

| **分组方式** | **抢占优先级**  | **响应优先级**  |
| ------------ | --------------- | --------------- |
| 分组0        | 0位，取值为0    | 4位，取值为0~15 |
| 分组1        | 1位，取值为0~1  | 3位，取值为0~7  |
| 分组2        | 2位，取值为0~3  | 2位，取值为0~3  |
| 分组3        | 3位，取值为0~7  | 1位，取值为0~1  |
| 分组4        | 4位，取值为0~15 | 0位，取值为0    |

### EXTI

- EXTI（Extern Interrupt）外部中断

- EXTI可以监测指定GPIO口的电平信号，当其指定的GPIO口产生电平变化时，EXTI将立即向NVIC发出中断申请，经过NVIC裁决后即可中断CPU主程序，使CPU执行EXTI对应的中断程序
- 支持的触发方式：上升沿/下降沿/双边沿/软件触发
- 支持的GPIO口：所有GPIO口，但相同的Pin不能同时触发中断(同一个Pin只有一个中断)
- 通道数：16个GPIO_Pin，外加PVD输出、RTC闹钟、USB唤醒、以太网唤醒（从低功耗模式的停止模式下唤醒STM32）
  - 对于PVD电源电压监测，当从电源从电压过低恢复时，就需要PVD借助一下外部中断退出停止模式
    - PVD可以用来做省电模式，电量过低就进入低功耗，充上来了就退出
  - 对于RTC闹钟来说，有时候为了省电，RTC定一个闹钟之后，STM32会进入停止模式，等到闹钟响的时候再唤醒，这也需要借助外部中断
- 触发响应方式：中断响应/事件响应
  - 事件响应不会触发中断，而是触发别的外设操作，属于外设之间的联合工作

![image-20241206000735775](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241206000735775.png)

### AFIO复用IO口

- AFIO主要用于引脚复用功能的选择和重定义
- 在STM32中，AFIO主要完成两个任务：复用功能引脚重映射、中断引脚选择
  - 复用功能引脚重映射：![image-20241206001052342](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241206001052342.png)
  - 中断引脚选择：<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241206001210664.png" alt="image-20241206001210664" style="zoom:67%;" />

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241206000836050.png" alt="image-20241206000836050" style="zoom:80%;" />

### EXTI框图

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241206002430626.png" alt="image-20241206002430626" style="zoom: 50%;" />

> **模电相关知识**
>
> 或门，与门，非门，数据选择器

### 旋转编码器

- 旋转编码器：用来测量位置、速度或旋转方向的装置，当其旋转轴旋转时，其输出端可以输出与旋转速度和方向对应的方波信号，读取方波信号的频率和相位信息即可得知旋转轴的速度和方向
- 类型：机械触点式/霍尔传感器式/光栅式

- 对于按键检测，主循环读取或定时器中断读取，后者可以做到后台检测按键值，不堵塞主程序，也可以处理按键抖动和松手检测的问题
- 带有两相正交波形的传感器可用于测方向（本套件），另一种则是单相输出，还有一种一个端口输出速度，一个端口输出方向
- 机械触点式不适合电机测速（高速旋转），霍尔传感器式/光栅式则是非接触的方式，可用于电机测速

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241206153705499.png" alt="image-20241206153705499" style="zoom:67%;" /><img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241206153710885.png" alt="image-20241206153710885" style="zoom:67%;" />

###  对射式红外传感器计次

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241207182504507.png" alt="image-20241207182504507" style="zoom:67%;" />

```C++
//CountSensor.c
#include "stm32f10x.h"                  // Device header

uint16_t CountSensor_Count;
void CountSensor_Init(void){
	//打开GPIOB和AFIO两个外设时钟
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB,ENABLE);
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO,ENABLE);
	//EXTI和NVIC外设的时钟无需打开
	//GPIO模式设置
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_IPU;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_14;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;
	GPIO_Init(GPIOB,&GPIO_InitStructure);
	//配置AFIO
	GPIO_EXTILineConfig(GPIO_PortSourceGPIOB,GPIO_PinSource14);
	//配置EXTI
	EXTI_InitTypeDef EXTI_InitStructure;
	EXTI_InitStructure.EXTI_Line=EXTI_Line14;
	EXTI_InitStructure.EXTI_LineCmd=ENABLE;
	EXTI_InitStructure.EXTI_Mode=EXTI_Mode_Interrupt;
	//EXTI_InitStructure.EXTI_Trigger=EXTI_Trigger_Falling;//移开挡光片时触发
	EXTI_InitStructure.EXTI_Trigger=EXTI_Trigger_Rising;//放下挡光片时触发
	EXTI_Init(&EXTI_InitStructure);
	//配置NVIC
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
	NVIC_InitTypeDef NVIC_InitStructure;
	NVIC_InitStructure.NVIC_IRQChannel=EXTI15_10_IRQn;
	NVIC_InitStructure.NVIC_IRQChannelCmd=ENABLE;
	NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority=1;
	NVIC_InitStructure.NVIC_IRQChannelSubPriority=1;
	NVIC_Init(&NVIC_InitStructure);
}

uint16_t CountSensor_Get(void){
	return CountSensor_Count;
}
void EXTI15_10_IRQHandler(void){
	if(EXTI_GetITStatus(EXTI_Line14)==SET){
		CountSensor_Count++;
		EXTI_ClearITPendingBit(EXTI_Line14);
	}
}

```

```C++
//main.c
#include "stm32f10x.h"                  // Device header
#include "Delay.h"
#include "LED.h"
#include "Key.h"
#include "OLED.h"
#include "CountSensor.h"


uint8_t KeyNum;
int main(void){
	OLED_Init();
	CountSensor_Init();
	
	OLED_ShowString(1,1,"HELLO!WORLD!");
	OLED_ShowString(1,1,"Count:");
	while(1){
		OLED_ShowNum(1,7,CountSensor_Get(),5);
	}
}

```

### 旋转编码器计次

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241207210014859.png" alt="image-20241207210014859" style="zoom:80%;" />

```
//Encoder.c
#include "stm32f10x.h"                  // Device header

int16_t Encoder_Count;
void Encoder_Init(void){
	//打开GPIOB和AFIO两个外设时钟
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_GPIOB,ENABLE);
	RCC_APB2PeriphClockCmd(RCC_APB2Periph_AFIO,ENABLE);
	//EXTI和NVIC外设的时钟无需打开
	//GPIO模式设置
	GPIO_InitTypeDef GPIO_InitStructure;
	GPIO_InitStructure.GPIO_Mode=GPIO_Mode_IPU;
	GPIO_InitStructure.GPIO_Pin=GPIO_Pin_0|GPIO_Pin_1;
	GPIO_InitStructure.GPIO_Speed=GPIO_Speed_50MHz;
	GPIO_Init(GPIOB,&GPIO_InitStructure);
	//配置AFIO
	GPIO_EXTILineConfig(GPIO_PortSourceGPIOB,GPIO_PinSource0);
	GPIO_EXTILineConfig(GPIO_PortSourceGPIOB,GPIO_PinSource1);
	//配置EXTI
	EXTI_InitTypeDef EXTI_InitStructure;
	EXTI_InitStructure.EXTI_Line=EXTI_Line0|EXTI_Line1;
	EXTI_InitStructure.EXTI_LineCmd=ENABLE;
	EXTI_InitStructure.EXTI_Mode=EXTI_Mode_Interrupt;
	//EXTI_InitStructure.EXTI_Trigger=EXTI_Trigger_Falling;//移开挡光片时触发
	EXTI_InitStructure.EXTI_Trigger=EXTI_Trigger_Rising;//放下挡光片时触发
	EXTI_Init(&EXTI_InitStructure);
	//配置NVIC
	NVIC_PriorityGroupConfig(NVIC_PriorityGroup_2);
	
	NVIC_InitTypeDef NVIC_InitStructure;
	NVIC_InitStructure.NVIC_IRQChannel=EXTI0_IRQn;
	NVIC_InitStructure.NVIC_IRQChannelCmd=ENABLE;
	NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority=1;
	NVIC_InitStructure.NVIC_IRQChannelSubPriority=1;
	NVIC_Init(&NVIC_InitStructure);
	
	NVIC_InitStructure.NVIC_IRQChannel=EXTI1_IRQn;
	NVIC_InitStructure.NVIC_IRQChannelCmd=ENABLE;
	NVIC_InitStructure.NVIC_IRQChannelPreemptionPriority=1;
	NVIC_InitStructure.NVIC_IRQChannelSubPriority=2;
	NVIC_Init(&NVIC_InitStructure);

}

int16_t Encoder_Get(void){
	int16_t Temp;
	Temp=Encoder_Count;
	Encoder_Count=0;
	return Temp;
}

void EXTI0_IRQHandler(void){
	if(EXTI_GetITStatus(EXTI_Line0)==SET){
		if(GPIO_ReadInputDataBit(GPIOB,GPIO_Pin_1)==0){
			Encoder_Count--;
		}
		EXTI_ClearITPendingBit(EXTI_Line0);
	}
}

void EXTI1_IRQHandler(void){
	if(EXTI_GetITStatus(EXTI_Line1)==SET){
		if(GPIO_ReadInputDataBit(GPIOB,GPIO_Pin_0)==0){
			Encoder_Count++;
		}
		EXTI_ClearITPendingBit(EXTI_Line1);
	}
}

```

```
//main.c
#include "stm32f10x.h"                  // Device header
#include "Delay.h"
#include "LED.h"
#include "Key.h"
#include "OLED.h"
#include "Encoder.h"

int16_t Num;
uint8_t KeyNum;
int main(void){
	OLED_Init();
	Encoder_Init();
	
	OLED_ShowString(1,1,"Num:");
	while(1){
		Num+=Encoder_Get();
		OLED_ShowSignedNum(1,5,Num,5);
	}
}

```

### TIM定时中断和内外时钟源选择

定时器基本定时



#### TIM（Timer）定时器

- 定时器可以对输入的时钟进行计数，并在计数值达到设定值时触发中断
- 16位计数器、预分频器、自动重装寄存器的时基单元，在72MHz计数时钟下可以实现最大59.65s的定时
  - 级联：两个计时器连在一块，一个计时器的输出用作另一个计时器的输入
- 不仅具备基本的定时中断功能，而且还包含内外时钟源选择、输入捕获、输出比较、编码器接口、主从触发模式等多种功能
- 根据复杂度和应用场景分为了高级定时器、通用定时器、基本定时器三种类型

外部时钟：提供一个更加精准的时钟来计时

#### 定时器类型

| **类型**   | **编号**               | **总线** | **功能**                                                     | 捕获/比较通道个数 | 互补输出 | 特殊应用场景                               |      |
| ---------- | ---------------------- | -------- | ------------------------------------------------------------ | ----------------- | -------- | ------------------------------------------ | ---- |
| 高级定时器 | TIM1、TIM8             | APB2     | 拥有通用定时器全部功能，并额外具有重复计数器、死区生成、互补输出、刹车输入等功能 | 4                 | 有       | 带死区控制盒紧急刹车，可应用于PW           |      |
| 通用定时器 | TIM2、TIM3、TIM4、TIM5 | APB1     | 拥有基本定时器全部功能，并额外具有内外时钟源选择、输入捕获、输出比较、编码器接口、主从触发模式等功能 | 4                 | 无       | M电机控制通用。定时计数，PWM输出，输入捕获 |      |
| 基本定时器 | TIM6、TIM7             | APB1     | 拥有定时中断、主模式触发DAC的功能                            | 0                 | 无       | ，输出比较主要应用于驱动DAC                |      |

STM32F103C8T6定时器资源：TIM1、TIM2、TIM3、TIM4

#### 基本定时器

![image-20241210220028000](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20241210220028000.png)

仅支持**向上计数**：从0开始自增，计数值等于自动重装值时，产生中断信号，并清零计数器

只能选择内部时钟，72MHZ

预分配器：16位，分频系数=值+1，用于对输入的基准频率提前分频

CNT计数器：对分频后计数时钟进行计数，16位，每一上升沿其值+1

自动重装载寄存器：存储终值（stm32），存储初值（51），计数值等于自动重装值时，产生中断信号，并清零计数器

向上箭头：代表产生中断（更新中断）

向下箭头：代表产生事件（更新事件），不会触发中断，但会触发内部其他电路的工作

工作流程：基准时钟->预分配器->计数器->不断与重装寄存器比较->值相等时，产生中断事件->CPU响应中断

主模式触发DAC：使内部硬件在不受程序的控制下实现自动运行

​	使用DAC时，输出一段波形

​		正常思路，设置定时器产生中断，每隔一段时间在中断程序中调用代码手动触发一次DAC转换，然后DAC输出，导致主程序	频繁被中断的状态，影响程序运行

​		主模式，把更新事件映射到TRGO的位置，TRGO接到DAC的触发转化引脚上，不再需要通过中断来触发DAC转换

#### 通用计时器

STM32的通用定时器是由一个**可编程预分频器（PSC）**驱动的**16位自动重装载计数器（CNT）**构成，可用于**测量输入脉冲长度（输入捕获）**或者**产生输出波形（输出比较和PWM）**等。

STM3 的通用TIMx（TIM2、TIM3、TIM4 和 TIM5）定时器功能特点包括：

- 位于**低速的APB1**总线上（注意：**高级定时器是在高速的APB2总线**上）；

- 16位**向上、向下、向上/向下（中心对齐）**计数模式，自动装载计数器（TIMx_CNT）；
- 16位**可编程（可以实时修改）预分频器**（TIMx_PSC），计数器时钟频率的分频系数 为 1～65535 之间的任意数值；
- **4 个独立通道**（TIMx_CH1~4），这些通道可以用来作为：

1. 输入捕获

2. 输出比较
3. PWM生成（边缘或中间对齐模式）
4. 单脉冲模式输出 

- 可使用外部信号（TIMx_ETR）**控制定时器和定时器互连**（可以用 1 个定时器控制另外一个定时器）的同步电路。
- 如下事件发生时产生中断/DMA（**6个独立的IRQ/DMA请求生成器**）： 

1. **更新：计数器向上溢出/向下溢出，计数器初始化(通过软件或者内部/外部触发)** 
2. **触发事件（计数器启动、停止、初始化或者由内部/外部触发计数）**
3. **输入捕获** 
4. **输出比较** 
5. 支持针对定位的增量（正交）编码器和霍尔传感器电路 
6. 触发输入作为外部时钟或者按周期的电流管理

##### 计数器模式

通用定时器可以向上计数、向下计数、向上向下双向计数模式。

- 向上计数模式：计数器从0计数到自动加载值（TIMx_ARR），然后重新从0开始计数并且产生一个计数器溢出事件。

- 向下计数模式：计数器从自动装入的值（TIMx_ARR）开始向下计数到0，然后从自动装入的值重新开始，并产生一个计数器向下溢出事件。
- 中央对齐模式（向上/向下计数）：计数器从0开始计数到自动装入的值-1，产生一个计数器溢出事件，然后向下计数到1并且产生一个计数器溢出事件；然后再从0开始重新计数。

简单地理解三种计数模式，可以通过下面的图形：

<img src="https://i-blog.csdnimg.cn/blog_migrate/4844b1570a646dd67e2d69b821b3e523.png" alt="img" style="zoom:80%;" />

##### 工作流程

内外时钟源选择：

主从触发模式：

使用定时器预分频器和 RCC 时钟控制器预分频器，脉冲长度和波形周期可以在几个微秒到几个毫秒间调整。**STM32 的每个通用定时器都是完全独立的，没有互相共享的任何资源。**

### TIM输出比较

产生PWM波形，用于驱动电机等设备

### TIM输入捕获和主从触发模式

测量方波频率

### TIM编码器接口

更方便的读取正交编码器的输出波形
