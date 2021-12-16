/** @format */

// @ts-ignore
const webpack = require('webpack')
const path = require('path')
const {VueLoaderPlugin} = require('vue-loader')
// import {VueLoaderPlugin} from 'vue-loader'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')
const dayjs = require('dayjs')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const CUSTOM_ELEMENT_PREFIX = 'imc-'

module.exports = {
  target: 'web',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            isCustomElement: (/** @type {string | any[]} */ tag) => tag.includes(CUSTOM_ELEMENT_PREFIX),
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm:ss')),
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
    }),
    // 指定环境,定义环境变量，项目中暂时未用到
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: JSON.stringify(true),
      __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.tsx'],
    alias: {
      '@': resolve('src'),
    },
  },
}
