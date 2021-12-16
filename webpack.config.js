/** @format */

const {merge} = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')
// @ts-ignore
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const PORT = 8089
module.exports = merge(common, {
  entry: {
    local: './src/index.ts',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  cache: {
    type: 'filesystem',
  },
  devServer: {
    port: PORT,
    hot: true,
    host: '0.0.0.0',
    compress: true,
  },
  output: {
    filename: 'js/[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        // @ts-ignore
        use: ['style-loader', 'vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        // @ts-ignore
        use: ['style-loader', 'vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      // @ts-ignore
      {
        test: /\.(png|svg|jpg|gif|cur)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [new FriendlyErrorsWebpackPlugin()],
})
