/**
 * Created by lianghongpeng on 2016/10/17.
 */

import Debug from 'debug';
import path from 'path'

var debug = Debug('server:bootstrap');

process.env.NODE_CONFIG_DIR = path.normalize( __dirname + '/config');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 9000;
debug(process.env.NODE_CONFIG_DIR);

/**----------------------------------------------------------
 * set default config folder
 ----------------------------------------------------------*/
var Bootstrap = module.exports = function () {

};

Bootstrap.prototype.init = function () {
};


