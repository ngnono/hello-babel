/**
 * Created by lianghongpeng on 2016/10/17.
 */

import koa from 'koa';
import logger from 'koa-logger';
import error from 'koa-onerror';
import responseTime from 'koa-response-time';
import trace from 'koa-trace';

import routes from './routes';

const NODE_ENV = process.env.NODE_ENV;

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

//must top
app.use(responseTime());

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
