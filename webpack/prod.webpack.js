const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.webpack.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    resolve: {
        alias: {
            vue: 'vue/dist/vue.min.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CleanWebpackPlugin(),
        new UglifyJsPlugin()
    ]
});