/**
 * Created by lianghongpeng on 2016/10/28.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/client/index.jsx',
  output: {
    filename: 'js/main.js'
  },
  module: {
    loaders:[
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client','assets', 'index.html')
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8088'
    })
  ]
};
