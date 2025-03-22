---
tags:
  - ai
  - 学习
  - 算法
  - 规划
---
## 参考
[序 - aiTour](https://aitour.site/)
![[Pasted image 20250222224025.png]]
## CS61a-python
[UCB CS61a: Structure and Interpretation of Computer Programs - aiTour](https://aitour.site/python/CS61a/)
## CS61b-数据结构
[UCB CS61b: Data Structures - aiTour](https://aitour.site/data-structure-and-algorithm/CS61b/?h=cs61b)
## 高数线代概率论
概率论：手写总结+李天意速通课程
## CS229-吴恩达机器学习
[Stanford CS229: Machine Learning - aiTour](https://aitour.site/machine-learning/CS229/?h=cs229)
[封面 - 机器学习书：以高中数学视角](https://mlbook.dev/)
## 李宏毅深度学习
[国立台湾大学: 李宏毅机器学习 - aiTour](https://aitour.site/deep-learning/%E6%9D%8E%E5%AE%8F%E6%AF%85%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/)
## 知乎收藏夹一堆
# 数学
https://zhuanlan.zhihu.com/p/25643286963
## 2
[入门机器学习/深度学习要多长时间？ - 知乎](https://www.zhihu.com/question/447064746/answer/3204309014)
[入门机器学习/深度学习要多长时间？ - 知乎](https://www.zhihu.com/question/447064746/answer/3204309014)图灵的猫
# 深度学习
## 参考
[《动手学深度学习》 — 动手学深度学习 2.0.0 documentation](https://zh.d2l.ai/index.html)
[要基于pytorch做深度学习，但是我代码水平很低，我应该如何学习呢？ - 知乎](https://www.zhihu.com/question/437199981/answer/118782101117)
## 总结
- 深度学习入门基于Python的理论与实现（鱼书）
- 小土堆（三天看完）
- 李沐老师的《动手学深度学习》pdf，不看视频课（三周左右）
- 看论文跑代码
其他书籍
- 机器学习入门：数学原理解析及算法实践 deepseek教程

## 经验

机器学习：**《西瓜书 机器学习》，《机器学习实战：基于Scikit-Learn、Keras和TensorFlow》**。
未来主要研究深度学习的话，机器学习的内容快速翻一翻，搭建一个整体的知识框架就好，不需要深究细节。如果对某些领域感兴趣，可以看《统计学习方法》和《机器学习实战（Machine Learning in Action）》的相应章节。
深度学习：深度学习入门的阶段可以分为四个板块：**深度学习理论，用原生python实现算法，[pytorch](https://zhida.zhihu.com/search?content_id=631762774&content_type=Answer&match_order=1&q=pytorch&zhida_source=entity)框架使用，以及用pytorch搭建经典模型。**

- **深度学习理论和用原生python实现算法**这两个部分，我推荐斎藤康毅的**深度学习入门：基于Python的理论与实现》和《深度学习进阶：自然语言处理** 。书中会先提出一个实际的问题，然后给出一个解决方法，之后提出当前算法的不足并改进。书中有大量图片帮助理解算法步骤，阅读前不需要任何高数和线代基础。还有配套的原生python代码方便理解算法。

- **pytorch框架使用**这个部分，我推荐《深度学习框架PyTorch：入门与实战》的第三四五章，把各种常用的方法都进行了梳理。

- 用**pytorch搭建经典模型**，李牧的《动手学深度学习》讲的比较快，如果希望更细一些的话，推荐 up主「**霹雳吧啦Wz**」的视频，比如[深度学习-图像分类篇章](https://link.zhihu.com/?target=https%3A//b23.tv/ArHeiDZ) 这个系列。

在入门之后，要看一些相对前沿的论文的话，**李牧的论文精读系列**讲的都非常好。

**[李宏毅老师的公开课](https://link.zhihu.com/?target=https%3A//www.youtube.com/%40HungyiLeeNTU/videos)**

值得一提的是，学这些的目的主要还是为了**研究生阶段发论文**。后续就业的话，关于就业目前搞人工智能算法的岗位比较少，除非985硕并且有顶刊顶会可以试一试，否则最后大概率还是会走回大二的开发岗或数据岗。

如果有机会能跟着学校的研究生做科研发论文挂个名，对研究生阶段会很有帮助。

## 经验
https://www.zhihu.com/question/624723835/answer/3617795737
[李沐](https://zhida.zhihu.com/search?content_id=687851418&content_type=Answer&match_order=1&q=%E6%9D%8E%E6%B2%90&zhida_source=entity)和吴恩达是看了让你大概知道深度学习里大概有什么东西，这些东西干嘛用的。比如cnn是什么，transformer是什么，[激活函数](https://zhida.zhihu.com/search?content_id=687851418&content_type=Answer&match_order=1&q=%E6%BF%80%E6%B4%BB%E5%87%BD%E6%95%B0&zhida_source=entity)，归一化，残差。后面你看论文有个大概的印象，到时候看论文看一眼摘要引言，看一下模型框图和最后实验效果，心里就八九不离十了。

小土堆那个看了是真的告诉你深度学习代码的架构是什么样的。比如[batchsize](https://zhida.zhihu.com/search?content_id=687851418&content_type=Answer&match_order=1&q=batchsize&zhida_source=entity)什么，学习率是什么，维度是什么。一个工程大概有哪几个文件，每个文件干嘛用的。看代码时候直接奔着model.py过去就行了，别傻乎乎的看那些底层的数据预处理和训练测试的代码，看了半天没啥用。

然后找你本领域经典的论文和代码精读一篇，吃透以后去复现当年的sota。成熟领域大部分都是在一篇祖师爷的基础上改的，一通百通的。

然后在sota上面魔改就行了，改出效果去翻论文拼理论解释。

## 1
给一个最快最简单入门路子：

1. 完整听完李宏毅的课，并完成课后作业
2. 由于李宏毅课程作业难度较大，B站搜索“我是土堆”，听pytorch教程，与上一条结合完成
3. 完成上述两条，完整做CV/NLP领域至少两个project

至此算入门以上了。
## 实验室一块GPU都没有怎么做深度学习？ - 知乎
[实验室一块GPU都没有怎么做深度学习？ - 知乎](https://www.zhihu.com/question/299434830/answer/3223480399)
不要搞图像，多模态，[大模型](https://zhida.zhihu.com/search?content_id=616168492&content_type=Answer&match_order=1&q=%E5%A4%A7%E6%A8%A1%E5%9E%8B&zhida_source=entity)尽可能搞搞[文本序列](https://zhida.zhihu.com/search?content_id=616168492&content_type=Answer&match_order=1&q=%E6%96%87%E6%9C%AC%E5%BA%8F%E5%88%97&zhida_source=entity)的小模型。多做交叉冷门领域。
有钱自己上一张3090/4090整机，基本上够用了。没钱的话搞个4060的笔记本，调试在笔记本上调好了上autodl跑。

另外推荐一些性价比卡（时间关系，价格会上下变动需要蹲）

1w2的4090，6000的3090（现在涨了），3800的[4060ti](https://zhida.zhihu.com/search?content_id=616168492&content_type=Answer&match_order=1&q=4060ti&zhida_source=entity)16G，4000左右的[A4000](https://zhida.zhihu.com/search?content_id=616168492&content_type=Answer&match_order=1&q=A4000&zhida_source=entity)（也涨了），9000的[联想5800](https://zhida.zhihu.com/search?content_id=616168492&content_type=Answer&match_order=1&q=%E8%81%94%E6%83%B35800&zhida_source=entity)+3080（16G）笔记本，魔改技术成熟的话，可以考虑2080ti22G和3080 20G。
以上条件都不满足，建议换方向。

## Google colab
https://www.zhihu.com/question/299434830/answer/1329278982