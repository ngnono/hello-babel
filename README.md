# hello-babel [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 


建议使用 [NPM淘宝镜像](http://npm.taobao.org/) 就一个字 快

ES6学习 [ES6（ECMAScript2015）的出现，无疑给前端开发人员带来了新的惊喜](http://www.alloyteam.com/2016/03/es6-front-end-developers-will-have-to-know-the-top-ten-properties/)

## Installation

```sh
$
```

## Usage

### development

在执行前 请先全局安装[nodemon](https://github.com/remy/nodemon)
```sh

$ npm install -g nodemon

```

然后

```sh

$ npm run debug


```

### test && staging

#### win

```sh
$ gulp prepublish
$ set DEBUG=server:* & set PORT=9001 & set NODE_ENV=staging  & node ./lib/index.js --harmony

````

如果要删除环境变量

```sh
$ set DEBUG= & set PORT= & set NODE_ENV=

```


#### linux

```sh
$ gulp prepublish
$ DEBUG=server:* PORT=9001 NODE_ENV=staging node ./lib/index.js --harmony

````

## client

### debug

```sh

$ npm run devClient

```

在浏览器 http://localhost:8080/



## 参考文献

### 非常好的入门教程
[实例讲解基于 React+Redux 的前端开发流程](https://segmentfault.com/a/1190000005356568)

### 阮一峰的网络日志
[React 技术栈系列教程](http://www.ruanyifeng.com/blog/2016/09/react-technology-stack.html)

### react-route 
[关于hashHistory和browserHistory使用的区别](http://blog.csdn.net/hyy1115/article/details/53021807)

## License

MIT © [ngnono](./LICENSE)


[npm-image]: https://badge.fury.io/js/hello-babel.svg
[npm-url]: https://npmjs.org/package/hello-babel
[travis-image]: https://travis-ci.org/ngnono/hello-babel.svg?branch=master
[travis-url]: https://travis-ci.org/ngnono/hello-babel
[daviddm-image]: https://david-dm.org/ngnono/hello-babel.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ngnono/hello-babel
