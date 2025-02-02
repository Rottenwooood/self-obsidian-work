单片机IO口：电流输入能力远大于电流输出能力——灌电流远大于拉电流

因此IO口连接LED阴极，不能阳极

开漏输出：不能输出高电平

​	4.1.2 开漏输出配置(PO口上电复位后处于开漏模式)

​	PO口上电复位后处于开漏模式，当PO管脚作I/0口（GPIO）时，需外加10K-4.7K的上拉电阻，当P0管脚作为地址/数据复用总线使用时，不用外加上拉电阻。

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240811214501330.png" alt="image-20240811214501330" style="zoom:50%;" />

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240811214611284.png" alt="image-20240811214611284" style="zoom:50%;" />

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240811214710107.png" alt="image-20240811214710107" style="zoom: 33%;" />

最小的去耦电容靠近芯片供电引脚摆放

走线：135°，不能90°或锐角

布线顺序：先质量要求高后质量要求低：如先信号线，然后电源线，最后地线

​	原则上不要在元件间

#### 芯片引脚排序

1.离圆点最近的为第一个引脚

2.半圆形切口朝上时，左上角为第一个引脚

3.芯片文字正放时，左下角为第一个引脚

#### 芯片功能设置

电源（VCC,GND）,输入，输出，设置

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240818153803827.png" alt="image-20240818153803827" style="zoom:50%;" />

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240818153823126.png" alt="image-20240818153823126" style="zoom:33%;" />

#### NE555

<img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240818154339754.png" alt="image-20240818154339754" style="zoom:50%;" /><img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240818154320071.png" alt="image-20240818154320071" style="zoom:50%;" /><img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240818154855516.png" alt="image-20240818154855516" style="zoom:33%;" /><img src="C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20240818155116813.png" alt="image-20240818155116813" style="zoom:33%;" />

即RS锁存器

#### 正负极符号

- DC表示直流电
- AC表示交流电



- L表示火线
- N表示零线



- GND：不是连接到地面，是借用“接地”概念作为电压参考点（基准电压）



晶体管

- 晶体管：如三极管，三个电极为基极B，集电极C,发射极E
- VBE指测量这两个极性之间的电压值
- IBE指测量这两个极性之间的电流值



- 一般情况下，单个晶体管电源都会夹在集电极和发射极E之间，表示VCE之间的电压，也就是电源电压
- 由于实际情况，一个电路中包含大量的晶体管，电路的连接方式多种多样VCE已经无法正确表达；后面规范电源标发，将下标定第一个字母重复一遍，再加上另一个参考点就用来表示电源
- 如VCE，正确表示为VCCE；但是在一个复杂电路中，无法确定另一个参考点，所以就忽略参考点，用VCC表示；后面就一直沿用到晶体管集成电路的电源正极；同理VEE/GND用来表示晶体管集成电路的电源负极







场效应管（MOS管）

- MOS场效应管分为栅极G、漏极D、源极S
- 通常电源连接是在漏极D和源极S之间，用VDS表示
- 正极：VDD
- 负极：VSS



- 目前的单片机芯片都使用了CMOS工艺制成，所以单片机的电源标号沿用了场效应管的方式
- 当单片机内置了ADC功能之后，就出现了模拟电路的电源问题；于是单片机内部的模拟点电路端口
- VDDA表示模拟正极，VSSA表示模拟负极，其中A表示模拟电路的意思
- 同理也有用VDDD和VSSD表示数字电路电源，其中D表示数字电路的意思
- GNDA：模拟电路接地
- VBAT：备用电源正极（BAT为英文单词电池Battery缩写）
- VREF+：基准参考电压正极（REF为英文单词Reference缩写）
- VREF-：基准参考电压负极
- VIN：输入电压
- VOUT：输出电压
- 3V3 = 3.3V
- 5K1 = 5.1KΩ



- LED背光电源输入端口
- LED A：LED阳极（正极）
- LED K：LED负极（负极）