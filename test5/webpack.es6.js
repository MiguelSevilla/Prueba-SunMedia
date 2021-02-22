merge = require('webpack-merge');
common = require('./webpack.common.js');

module.exports = merge(common, {
  output: {
    filename: 'sunmedia-es6.js',
  }  
});
