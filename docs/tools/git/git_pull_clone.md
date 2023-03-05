# Git pull & clone

使用git命令下拉远程库。

选择创建的

[toc]

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

`git clone /z/guihua/share/InSAR/LandSARGitRepostory `

### Connection was reset

fatal: unable to access 'https://github.com/dev-cafe/cmake-cookbook.git/': OpenSSL SSL_read: Connection was reset, errno 10054
这是服务器的SSL证书没有经过第三方机构的签署，所以报错。
解决方法：
git config --global http.sslVerify "false"

### Failed to connect to github

fatal: unable to access 'https://github.com/dev-cafe/cmake-cookbook.git/': Failed to connect to github.com port 443: Timed out
尽管此时，我们的电脑已经可以翻墙了，git clone却不行，原因在于git 也需要配置代理：

git config --global http.proxy http://127.0.0.1:7890
或使用其他地址：

git config --global https.proxy http://127.0.0.1:7890
git config --global http.proxy http://127.0.0.1:9666