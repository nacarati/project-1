//git in隐藏文件it 初始化本地仓库，会生成.git


// 通过：git status 查看当前文件状态
// 显示的状态：未被追踪的文件 ：untrack

// 可以使用clear清除屏幕信息

// 查看状态精简命令：git status -s
// ?? 表示当前文件未被追踪的意思

// 要添加追踪文件：git add 加上你要追踪的文件
// 其中可以先书写两个字母 然后摁下tab键 可以补齐路径
// A 表示当前文件已处于追踪文件

// M 表示当前文件已经修改
// git commit -m '描述信息' 提交
// -m 就是表示 message的意思,命令后面的描述信息 一定要写.
//暂存已修改的文件 git add 加上你的文件


//撤销动作 ： git checkout -- 加上文件名称
//谨慎使用

//一次性 添加多个文件到暂存区 ：git add .

//取消暂存文件：git reset HEAD . 全部取消
// git reset HEAD 加上你要取消文件 取消单个

//跳过暂存区，就是git add 和 git commit 两个命令的复合写法 git commit -a -m 加上描述信息

//移除文件 ：git rm -f 加上你要移除的文件（rm ：remove  force强制）
//只移除仓库里面的文件，保留本地的文件 ：git rm --cachde 加文件名

//忽略文件：.gitignore

//查看提交历史历史信息 git log

//会退到之前的指定版本：git reset --hard 加上哈希值
//git reflog

//https协议推送的时候 会有问题
//正常会弹出账户和密码（只有一次机会）
//如果错了需要去控制面板/用户账户/


//查看本地工程关联的远程仓库是哪个：git remote -v

// git remote add origin https://github.com/nacarati/project-1.git(用来关联本地仓库和远程仓库的)
//remote:表示远程的意思
//add: 添加
//远程仓库地址：https://github.com/nacarati/project-1.git

//git branch -M main （把默认的 master 分支名称改成了 main）
//git push -u origin main 表示第一次本地仓库向远程仓库提交的时候，必须这样写
//push：表示推送的意思
//-u 表示第一次推送的时候，必须添加的参数
//origin：表示要把工程往哪推，这个名字代表的地址就是要推送的地址
//main：表示上面那个地址所有的某一个点（房间，分支）

//后面，修改 玩代码之后，再次提交的时候：只需要 git push