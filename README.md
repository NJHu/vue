[**感谢技术胖: 大家可以前往 看详细Vue文档和视频**](http://jspang.com/2018/01/21/vue-timeline/)

## 所需要的知识
- HTML的基础知识，你需要达到中级水平，写前端页面的结构代码完全没有问题。

- CSS的基础知识，最好做过半年以上的切图和布局，最好了解CSS3的知识。

- Javascript的基础知识，对基本语法掌握，这个要求不高，因为遇到难的我会在视频中讲解。

- node.js初级知识，只需要会npm的使用和项目初始化就可以了

## VUE学习路线, 让你不迷路, 请按此顺序学习。
- Vue 的基础学习步骤
	- [【第一季】Vue2.0视频教程-内部指令(共8集)](http://jspang.com/2017/02/23/vue2_01/)
	- [【第二季】Vue2.0视频教程-全局API(共9集)](http://jspang.com/2017/03/14/vue2_02/)
	- [【第三季】Vue2.0视频教程-选项（共6集）](http://jspang.com/2017/03/26/vue3/)
	- [【第四季】Vue2.0视频教程-实例和内置组件（共4集）](http://jspang.com/2017/04/09/vue2_4/)

- Vue全家桶
	- [Vue-cli 视频教程](http://jspang.com/2017/04/10/vue-cli/)
	- [Vue-router视频教程](http://jspang.com/2017/04/13/vue-router/)
	- [Vuex视频教程](http://jspang.com/2017/05/03/vuex/)

- Vue 实战
	- [Vue实战视频-快餐店收银系统](http://jspang.com/2017/05/22/vuedemo/)

- Webpack
	- [Webpack3.X版 成神之路](http://jspang.com/2017/09/16/webpack3-2/) 

- Weex
	- [WEEX免费视频教程-从入门到放肆](http://jspang.com/2017/07/12/weex/)

- Nuxt.js
	- [Nuxt.js免费视频教程 开启SSR渲染](http://jspang.com/2018/02/26/nuxt/) 

## Vue 基础学习

<div>
<img src="./githubimages/jichudemo.png" width="33%" height="500px"><img src="./githubimages/jicchumulu.jpg" width="33%" height="500px"><img src="./githubimages/Snip20180302_25.png" width="33%" height="500px">
</div>


## Vue 全家桶

<div>
<img src="./githubimages/Snip20180306_6.png" width="25%">|
<img src="./githubimages/Snip20180306_13.png" width="25%">|
<img src="./githubimages/Snip20180306_7.png" width="25%">|
<img src="./githubimages/Snip20180306_8.png" width="24%">|
<img src="./githubimages/Snip20180306_9.png" width="24%">|
<img src="./githubimages/Snip20180306_11.png" width="24%">
</div>

## Vue 实战 + webpack注释

<div>
<img src="./githubimages/Snip20180313_1.png" width="25%">|
<img src="./githubimages/Snip20180313_2.png" width="25%">|
<img src="./githubimages/Snip20180313_4.png" width="45%">
</div>

## Weex

<div>
<img src="./githubimages/Snip20180327_4.png" width="50%">|
</div>

## Nuxt.js 

<div>
<img src="./githubimages/Snip20180327_2.png" width="25%">|
<img src="./githubimages/Snip20180327_3.png" width="25%">
</div>



##前端开发环境搭建

教程中我们采用前后端分离的开发模式，也就是前端调用后端提供的JSON接口，让Vue和Koa2的代码没有任何的耦合。所以开发环境也是完全分离的，开发完成后你甚至可以分别部署到两个服务器上来进行运行。

1.建立前端文件夹

我在D盘的Code目录下建立了SmileVue文件夹。smile是微笑的意思，使用这个单词，我需要大家在学习完这套教程都对整个项目的理解和技术上的应用有一个层次的提供，露出微笑的表情。

你也可以利用终端的形式建立，打开终端进入D盘的code目录下，建立命令如下：

mkdir SmileVue

当然这个目录可以和我的不一样，你可以起一个自己喜欢的名字，也可以找一个自己喜欢的盘符位置。

目录建立好以后，打开代码编辑工具Visual Studio Code(以后简称VSCode)。并在VSCode中打开我们的项目。

2.使用vue-cli生成项目目录
使用vue-cli非常方便快速，它可以为我们生成基本的Vue的项目结构。

检测npm版本，在终端输入 npm -v,尽量使用5.x以上版本。
全局安装vue-cli，在终端里输入，npm install vue-cli -g。
在终端中输入 vue init webpack
等到上面这些都正确安装完成后，我们需要验证一下，我们安装是否成功。

3.测试环境是否安装成功

使用npm run dev 进行测试环境的打开。
在浏览器中输入 http://localhost:8080 进行测试。
在浏览器中打开页面，出现Vue的正常页面时，说明你的项目已经初始化成功了。下节课我们就可以愉快的进行编程了。

一个README.md的重要性
在一个实际项目中,特别是开源项目中是非常重要的。
所以我们要建立一个README.md文件，这个就是你项目的说明文件。
每个公司的书写要求有所不同，所以请根据实际情况编写。
我这里就记录每节课的讲述内容和项目的初始化方法了。