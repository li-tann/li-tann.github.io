# Git

Git常用命令

## Git命令

1. `git add .`    添加至暂存区
2. `git rm --cached filename1 filename2 ...` 撤回暂存区的文件
3. `git ls-files` 查看add内容
4. `git rm -r --cached`  清除add在缓存里面的内容
5. `git rm --cached <文件路径>`  清除add在缓存里面的某个文件（不删除物理文件，仅将该文件从缓存中删除）
6. `git commit -a -m "…"`   提交改变的文件，-a提交所有改变，-m附加注释
7. `git push origin master`   将本地分支岁送到服务器上的master分支中，origin是服务器地址，master是自己的分支名
8. `git push <远程主机名> <本地分支名>:<远程分支名>`   将本地分支送到服务器上的远程分支中
9. `git init --bare`   初始化仓库，初始化终端仓库时需要加`--bare`
10. `git pull origin master`   将服务器的版本同步至本地，origin是服务器地址，本地分支名与远程分支名均为master
11. `git pull <远程主机名> <远程分支名>:<本地分支名>`   将服务器的远程分支版本同步至本地的分支中
12. `git status`  查看仓库与本地的状态
13. `git diff +文件`   查看文件的修改内容
14. `git remote add origin /Z/guihua/share…`   添加远程库的路径的"快捷方式"，origin = Z:/guihua/share…
15. `git remote -v`   查看远程库信息
16. `git remote rm name`   删除远程仓库
17. `git remote add <name> <URL>`   使用指定字符串name来代替整个URL
18. `git remote rename old new`   更新仓库名，从old更新到new
19. `git log`    查看版本的历史记录
20. `git log --oneline --graph --all`   以图像（graph）的形式，简短（oneline）的显示所有（all）版本信息
21. `git reset --hard HEAD^`

`git reset --hard 版本号`   回溯到上个版本/指定版本（版本号使用git log可查询）

1. 首次提交代码时：

`git config --global user.name "runoob"`

`git config --global user.email "runoob@email.com"`

1. `git branch <branchname>`  创建分支名
2. `git branch`   查看已存在分支和当前分支
3. `git branch -d/D <branchname>`    删除本地分支（之前应checkout切换到其他分支）
4. `git checkout <branchname>`   切换分支名
5. `git checkout -b <branchname>`   创建并切换到该分支
6. `git merge branch`  将branch分支合并到当前分支中
7. `git merge --abort`  退出合并，不解决合并冲突

## pull

1. 首次下拉远程版本库时，需要初始化git库。

    `git init`

2. 添加远程库路径的“快捷方式”

    `git remote add origin /z/guihua/share/InSAR/LandSARGitRepostory`

    `origin` 为任意字符串，可根据情况修改

    origin后面输入远程库的真实路径

3. 下拉远程git库

    `git pull origin master`

    `git pull origin origin_branch:local_branch`

    `origin`也可以使用真实路径替换

    对比本地分支和远程分支相同的情况，可以直接填写一个`master`即可，但若遇到远程库分支与本地分支不同的情况则需要输入`branch_a:branch_b`。


## clone

使用clone的方式下拉远程库，方法大致与pull相同，但不能使用字符替换地址，必须使用真实路径

`git clone /z/guihua/share/InSAR/LandSARGitRepostory`

### Connection was reset

> fatal: unable to access 'https://github.com/dev-cafe/cmake-cookbook.git/': OpenSSL SSL_read: Connection was reset, errno 10054

这是服务器的SSL证书没有经过第三方机构的签署，所以报错。

解决方法：

`git config --global http.sslVerify "false"`

### Failed to connect to github

> fatal: unable to access 'https://github.com/dev-cafe/cmake-cookbook.git/': Failed to connect to github.com port 443: Timed out

尽管此时，我们的电脑已经可以翻墙了，git clone却不行，原因在于git 也需要配置代理：

`git config --global http.proxy http://127.0.0.1:7890`

或使用其他地址：

`git config --global https.proxy http://127.0.0.1:7890`

`git config --global http.proxy http://127.0.0.1:9666`