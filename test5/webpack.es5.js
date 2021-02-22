merge = require('webpack-merge');
common = require('./webpack.common.js');

module.exports = 
merge(common, {
  output: {
    filename: 'sunmedia-es5.js',
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        //exclude: /node_modules/, 
        loader: "babel-loader",
      }
    ]
  }
});
