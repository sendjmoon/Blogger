'use strict';

const webpack = require('webpack');

const API_URL = JSON.stringify('http://localhost:3000');

let plugins = [
  new webpack.DefinePlugin({
    __API_URL__: API_URL
  })
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: '../app/public/javascripts/',
    filename: 'bundle.js'
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules',
        preset: ['es2015']
      }
    ]
  }
};
