import 'babel-polyfill';
/*eslint-disable*/
import bootstarp from './server/bootstrap';
/*eslint-enable*/
import server from './server/server';
import address from 'network-address';

var opts = {};

var app = server(opts);

// 监听端口，默认9000
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

export default  app.listen(PORT, err => {
  if (err) {
    throw err;
  }

  /*eslint-disable*/
  console.info('app is listening on "%s:%s" env="%s"', address(), PORT, NODE_ENV);
  /*eslint-enable*/
});

