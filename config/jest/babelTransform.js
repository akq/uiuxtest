'use strict';
var path = require('path')

var babelJest = require('babel-jest').default;
var ctx = path.join(__dirname, '../../node_modules')
module.exports = babelJest.createTransformer({
  presets: [
    path.join(ctx, 'babel-preset-react-app'), path.join(ctx,'@babel/preset-react')
  ],
  babelrc: false,
  configFile: false,
});
