## 参考
[为什么Git的教程都那么繁杂？ - 知乎](https://www.zhihu.com/question/594294987/answer/90657535810)
## 使用
```shell
# 初始化
git init

# 克隆远程仓库至本地
git clone https://github.com/user/repo.git
# 克隆指定分支
git clone -b develop https://github.com/user/repo.git

# 查看当前状态
git status
# 简短
git status -s
	#输出
	?? new-file.txt   # 未跟踪
	M  modified-file.js # 已修改未暂存
	A  added-file.css  # 已暂存

# 添加文件
# 添加单个文件
git add index.html
# 添加所有修改（包括新文件和修改的文件）
git add .
# 添加所有.js文件
git add *.js

# 提交并写提交信息
git commit -m "message"
# 添加遗漏文件
git add mising-file.txt
git commit --amend --no-edit

# 查看分支
git branch
# 查看远程分支
git branch -r
# 查看所有分支
git branch -a
# 创建新分支
git branch feat/user-profile
# 创建新分支并切换到新分支
git checkout -b feat/user-profile

# 切换分支
git checkout develop

# 合并分支（当前分支与输入分支合并）
git merge feat/user-profile 
# 遇到冲突时手动解决并重新add，commit

# 拉取远程分支
git pull origin main
# 保持历史线性
git pull -rebase origin main
# 首次推送本地分支到远程
git push -u origin feat/main
# 后续推送
git push
# 强制推送(覆盖历史)
git push -f origin main
# 查看已配置的远程仓库
git remote -v
# 添加新的远程仓库
git remote add upstream https://github.com/original/repo.git
```


# 懒得整理
## **五、撤销与急救**

**撤销：`git checkout -- <文件>`**

```bash
# 撤销单个文件的修改（危险！不可恢复）
git checkout -- src/components/Button.js
# 撤销所有未暂存的修改（慎用！）
git checkout -- .
```

**回退：`[git reset](https://zhida.zhihu.com/search?content_id=711246155&content_type=Answer&match_order=1&q=git+reset&zhida_source=entity)`**

  
  
作者：小高笔记  
链接：https://www.zhihu.com/question/594294987/answer/90657535810  
来源：知乎  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。