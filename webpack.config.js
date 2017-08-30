const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        mangle: false
      }
    })
  ]
};
