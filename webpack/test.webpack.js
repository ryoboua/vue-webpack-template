const baseConfig = require('./base.webpack.js');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')

module.exports = merge(baseConfig, {
    mode: 'development',
    externals: [nodeExternals()],
    devtool: 'inline-cheap-module-source-map'

})