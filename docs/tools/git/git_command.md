# Git命令

git常用命令

1. git add .    添加至暂存区
2. git ls-files 查看add内容
3. git rm -r --cached  清除add在缓存里面的内容
4. git rm --cached <文件路径>（无"<"">"）      清除add在缓存里面的某个文件（不删除物理文件，仅将该文件从缓存中删除）
5. git commit -a -m "…"   提交改变的文件，-a提交所有改变，-m附加注释
6. git push origin master   将本地分支岁送到服务器上的master分支中，origin是服务器地址，master是自己的分支名
7. git push <远程主机名> <本地分支名>:<远程分支名>   将本地分支送到服务器上的远程分支中
8. git init --bare   初始化仓库，初始化终端仓库时需要加"--bare"
9. git pull origin master   将服务器的版本同步至本地，origin是服务器地址，本地分支名与远程分支名均为master
10. git pull <远程主机名> <远程分支名>:<本地分支名>   将服务器的远程分支版本同步至本地的分支中
11. git status  查看仓库与本地的状态
12. git diff +文件   查看文件的修改内容
13. git remote add origin /Z/guihua/share…   添加远程库的路径的"快捷方式"，origin = Z:/guihua/share…
14. git remote -v   查看远程库信息
15. git remote rm name   删除远程仓库
16. git remote add \<name\> \<URL\>   使用指定字符串name来代替整个URL
17. git remote rename old new   更新仓库名，从old更新到new
18. git log    查看版本的历史记录
19. **git log --oneline --graph --all**   以图像（graph）的形式，简短（oneline）的显示所有（all）版本信息
20. git reset --hard HEAD^

git reset --hard 版本号   回溯到上个版本/指定版本（版本号使用git log可查询）

1. 首次提交代码时：

git config --global user.name "runoob"

git config --global user.email "runoob@email.com"

1. git branch \<branchname\>  创建分支名
2. git branch   查看已存在分支和当前分支
3. git branch -d/D \<branchname\>    删除本地分支（之前应checkout切换到其他分支）
4. git checkout \<branchname\>   切换分支名
5. git checkout -b \<branchname\>   创建并切换到该分支
6. git merge branch  将branch分支合并到当前分支中
7. git merge --abort  退出合并，不解决合并冲突
