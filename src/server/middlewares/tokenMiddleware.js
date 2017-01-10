/**
 * Created by lianghongpeng on 2016/10/17.
 */

import Debug from 'debug';

const debug = Debug('server:middlewares:tokenMiddleware');
/**
 *  token middleware
 * @param required 是否必须
 */
export default (required = true) => function *middleware(next) {

  debug('x-token:' + this.headers['x-token']);

  let xtoken = this.headers['x-token'];
  this.state.x_token = xtoken;

  if(!required){
     yield next;
  }
  else {
    if (!xtoken) {

      if (!required) {
        yield next;

        return;
      }
      this.body = {
        code: 400,
        status: false,
        message: 'x-token header is required'
      };

      return;
    }
  }

  yield next;

};
