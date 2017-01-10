/**
 * Created by lianghongpeng on 2016/10/21.
 */

import chaf from 'connect-history-api-fallback';

/**
 * spa 404 sln
 * use: app.use(historyApiFallback());
 * @param options
 * @returns {koaConnectHistoryApiFallbackAdapter}
 */
export default function (options) {
  const middleware = chaf(options);

  return function* koaConnectHistoryApiFallbackAdapter(next) {
    middleware(this, null, () => {
    });
    yield next;
  }
}
