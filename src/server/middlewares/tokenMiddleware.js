/**
 * Created by lianghongpeng on 2016/10/17.
 */

import Debug from 'debug';

const debug = Debug('server:middlewares:tokenMiddleware');
/**
 *  token middleware
 * @param required 是否必须
 */
export default (required = true)=>function *middleware(next) {

  if (!this.headers['x-token']) {

    if (!required) {
      yield next;

      return;
    }

    this.body = {
      status: 400,
      message: 'x-token header is required'
    };

    return;
  }
};
