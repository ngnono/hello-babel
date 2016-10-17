/**
 * Created by lianghongpeng on 2016/10/17.
 */

import Router from 'koa-router';
import requireDir from 'require-dir';
import compose from 'koa-compose';
import tokenMiddleware from './middlewares/tokenMiddleware';

const controllers = requireDir('./controllers');

export default () => {
  const router = new Router({
    prefix: ''
  });

  router.get('/', controllers.homeController.index);
  router.post('/webhook', compose([tokenMiddleware(false)]), controllers.homeController.webhook);

  return router.routes();
};
