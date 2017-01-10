/**
 * Created by lianghongpeng on 2016/10/17.
 */

import Debug from 'debug';

const debug = Debug('server:middlewares:contentNegotiationMiddleware');
/**
 *  contentNegotiationMiddleware middleware
 * @param opts
 */
export default (opts)=>function *middleware(next) {

  debug('before');
  debug(opts);

  yield  *next;

  debug('after')
};
