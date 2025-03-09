---
tags:
  - 笔记
  - 公开课
  - 机器人
time: 2025-03-09
---
## 英语
configuration-位形
velocity-速度
constraints-约束
topology-拓扑
topologically equivalent-拓扑相等
joint-关节
dof-degrees of freedom-自由度数
minus-减
times-乘
holonomic-完整
non-holonomic-不完整

## 2.4 configuration and velocity constraints
using a car as sample,**three holonomic constraints** keep the chassis confined to the plane,while **one non-holonomic constraints** prevent sideways sliding

holonomic constraints : constraints on configuration
non-holonomic constraints:constraints on velocity
pfaffians constraints :A(θ)θ' = 0
## 2.5 Task Space and Workspace
C-space- the space of all possile configarations of a robot,it's just about the task,no about the robot
Task Space - the space in which the robot's task is naturally expressed
- to control the tip of a marker on a board,Euclidean plane
- to control the position and orientation of a regid body,the 6-D space of rigid body configarations
Worksapce - a specification of the reachable configurations of the end-effector and has nothing to do with a particular task