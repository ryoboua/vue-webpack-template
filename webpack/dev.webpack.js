const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.webpack.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    open: true,
    hot: true,
    //openPage: 'login'
    historyApiFallback: true,
    https: false,
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
