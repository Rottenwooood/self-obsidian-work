[向量数学](https://www.bookstack.cn/read/godot-4.2-zh/0888ce4abd971f62.md#doc-vector-math)

### 斜向速度

我们首先将 `velocity` 设置为 `(0, 0)`——默认情况下玩家不应该移动。然后我们检查每个输入并从 `velocity` 中进行加/减以获得总方向。例如，如果你同时按住 `右` 和 `下`，则生成的 `velocity` 向量将为 `(1, 1)`。此时，由于我们同时向水平和垂直两个方向进行移动，玩家斜向移动的速度将会比水平移动要*更快*。

只要对速度进行*归一化*就可以防止这种情况，也就是将速度的*长度*设置为 `1`，然后乘以想要的速度。这样就不会有过快的斜向运动了。

### get_node()

`$` 是 `get_node()` 的简写。因此在上面的代码中，`$AnimatedSprite2D.play()` 与 `get_node("AnimatedSprite2D").play()` 相同。

在 GDScript 中， `$` 返回从当前节点开始的相对路径上的节点，如果找不到该节点，则返回 `null` 。当前 AnimatedSprite2D 是该节点子节点，所以可以使用 `$AnimatedSprite2D` 以获取。