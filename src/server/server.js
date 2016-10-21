/**
 * Created by lianghongpeng on 2016/10/17.
 */

import koa from 'koa';
import logger from 'koa-logger';
import error from 'koa-onerror';
import responseTime from 'koa-response-time';
import trace from 'koa-trace';
import serve from 'koa-static';
//import favicon from 'koa-favicon';

import path from 'path';
import Debug from 'debug';

import routes from './routes';

const NODE_ENV = process.env.NODE_ENV;
const debug = Debug('server:index');

var app = koa();

// 异常处理
// 通过accept头可以返回不同的结果
//
error(app);

trace(app);

// 开发阶段中间件
if (app.env === NODE_ENV) {
  app.use(logger());
}

//let iconPath = path.join(__dirname, '../public/favicon.ico');
let staticPath = path.join(__dirname, './client/public');

/**
 * env
 */
if (process.env.NODE_ENV !== 'development') {
  //iconPath = path.join(__dirname, './dist/favicon.ico');
  staticPath = path.join(__dirname, './client/public');
}

//debug('iconPath:%s', iconPath);
debug('staticPath:%s', staticPath);

//app.use(favicon(iconPath));

//must top
app.use(responseTime());

// Serve static files
app.use(serve(staticPath));

app.use(routes());

/**
 *
 * @param opts
 * @returns {*}
 */
export default (opts)=> {
  opts = opts || {};

  return app;
};
