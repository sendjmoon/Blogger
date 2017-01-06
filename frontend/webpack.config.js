'use strict';

const webpack = require('webpack');

const API_URL = JSON.stringify('http://localhost:3000');

let plugins = [
  new webpack.DefinePlugin({
    __API_URL__: API_URL
  })
];

module.exports = {
  plugins: plugins,
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: '../app/public/javascripts/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
    ]
  },
};
