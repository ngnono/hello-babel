/**
 * Created by lianghongpeng on 2016/10/28.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: './src/client/index.js',
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
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'client','assets', 'index.html')
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:3001'
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")//production
      }
    })
  ]
};
