# hello-babel [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> 

## Installation

```sh
$ npm install --save hello-babel
```

## Usage

### development

在执行前 请先全局安装(nodemon)[https://github.com/remy/nodemon]
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

## License

MIT © [ngnono]()


[npm-image]: https://badge.fury.io/js/hello-babel.svg
[npm-url]: https://npmjs.org/package/hello-babel
[travis-image]: https://travis-ci.org/ngnono/hello-babel.svg?branch=master
[travis-url]: https://travis-ci.org/ngnono/hello-babel
[daviddm-image]: https://david-dm.org/ngnono/hello-babel.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ngnono/hello-babel
