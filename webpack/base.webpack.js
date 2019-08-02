const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

const APP_DIR = path.resolve(__dirname, '../src');
const BUILD_DIR = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: APP_DIR + '/main.js'
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: APP_DIR
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: APP_DIR,
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
    new VueLoaderPlugin(),
    new PrettierPlugin({
      singleQuote: false,
      semi: true,
      bracketSpacing: true
    })
  ]
};
