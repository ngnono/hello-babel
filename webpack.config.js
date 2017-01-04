/**
 * Created by lianghongpeng on 2016/10/28.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
});

var node_modules_dir = path.join(__dirname, 'node_modules');

var deps = [
   //'react/dist/react.min.js',
  // //'react-router/umd/ReactRouter.min.js',
  // 'react-dom/dist/react-dom.min.js',
  // 'redux/dist/redux.min.js',
  // 'react-redux/dist/react-redux.min.js',
  // 'react-router-redux/dist/ReactRouterRedux.min.js',
  // 'redux-logger/dist/index.min.js'

  // 'moment/min/moment.min.js',
  // 'underscore/underscore-min.js',
];

var config = {
  entry: {
    app: './src/client/index.js',
    vendors: ['react', 'react-router', 'react-dom', 'redux', 'react-redux', 'react-router-redux', 'redux-logger', 'redux-promise']
  },
  output: {
    filename: 'js/[name].[hash].js'
  },
  resolve: {
    fallback: node_modules_dir,
    resolveLoader: {fallback: node_modules_dir},
    alias: {}
  },
  module: {
    noParse: [],
    loaders: [
      // {
      //   test: path.resolve(node_modules_dir, deps[0]),
      //   loader: "expose?React"
      // },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client', 'assets', 'index.html')
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3001'
    }),
    devFlagPlugin,
    new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.[hash].js')
  ]
};

deps.forEach(function (dep) {
  var depPath = path.resolve(node_modules_dir, dep);
  config.resolve.alias[dep.split(path.sep)[0]] = depPath;
  config.module.noParse.push(depPath);
});

module.exports = config;
