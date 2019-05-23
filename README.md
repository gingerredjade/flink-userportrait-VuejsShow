# flink-userportrait-VuejsShow

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Vue结合NodeJS搭建环境
Vue.js 是一个JavaScript MVVM库，是一套构建用户界面的渐进式框架。

Vue.js是当下很火的一个JavaScript MVVM库，它是以数据驱动和组件化的思想构建的。相比于Angular.js，Vue.js提供了更加简洁、更易于理解的API，使得我们能够快速地上手并使用Vue.js

## Windows环境
1、 下载NodeJS
```
如下载、安装node-v8.11.4_x64.msi
npm install webpack -g
npm install --global vue-cli
npm install --registry=https://registry.npm.taobao.org

node -v 显示node.js版本表示node.js安装成功
npm -v  显示npm版本表示npm安装成功
```

2、 在nodejs安装目录下建立文件夹node_cache、node_global用来安装过程的缓存文件以及最终的模块位置

将npm的全局模块目录和缓存目录配置到刚刚创建的那两个目录。
```
npm config set prefix "...\node_global"
npm config set cache "...\node_cache"
```
配置系统环境变量
```
NODE_PATH=...\node_modules
```
用户变量增加
```
PATH加 ...\global
```

3、 安装一个module测试一下，如最常用的express模块
```
npm install express -g
```
它会安装在...\modules目录下

4、 WebStorm构建Vue项目

File-->New Project-->Vue.js,打包方式选择webpack，等待生成项目。

5、 安装highcharts
```
npm install highcharts --save
``` 

6、 项目管理
```
启动：
右键package.json-->show npm scripts-->dev
或者直接使用命令npm run dev

打包：
npm run build
```

