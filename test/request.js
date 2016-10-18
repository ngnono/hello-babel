/**
 * Created by lianghongpeng on 2016/10/18.
 */

import bootstarp from '../src/server/bootstrap';
import app from '../src/index'
//https://segmentfault.com/q/1010000006906863
var request = require('supertest').agent(app);

export default request;
