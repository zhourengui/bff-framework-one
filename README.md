# 搭建 BFF 架构（服务于前端的后端）

## 目录改造

## 搭建

### 技术栈

Koa 一系列配套系列
nodemon
pm2
@koa/router
koa-swig + co
koa-static 静态资源服务器

### 真假路由

/about --> 后端/about --> 404 --> fallback --> 后端/ --> vue 页面 --> url /about --> vue-router -> /about

koa2-connect-history-api-fallback 真假路由转换

### 错误处理

洋葱模型
日志收集 log4js：时间、级别、分类

### ES6/system.js

解决浏览器不支持 ES6 语法

system.js 解决不兼容问题，需要通过 babel 打包成 systemjs 认识的语法
@babel/plugin-transform-modules-systemjs
@babel/core
@babel/cli

```bash
$ babel --plugins @babel/plugin-transform-modules-systemjs ./assets/js/index.js -o ./assets/js/system_bundle.js
```

```html
<script src="https://cdn.bootcdn.net/ajax/libs/systemjs/6.8.3/system.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.min.js"></script>
<script type="module">
  import("/js/index.js").then((res) => {
    console.error("esmodule", res.default)
  })
</script>
<script>
  System.import("/js/system_bundle.js").then((res) => {
    console.error("systemmodule", res.default)
  })
</script>
```

https://github.com/samthor/html-modules-polyfill

NodeJS 中使用 ES6，使用@babel/node、@babel/preset-env、@babel/core

线上环境使用 gulp

## 封装 axios

## 函数式编程

lodash、underscore

封装函数工具库

基本特点：

- 通过函数对数据进行转化
- 通过串联多个函数来求结果

## 测试

接口测试、e2e 测试

Playwright(只能使用 npm 安装)、mocha(配合 supertest 做接口测试)、chai
