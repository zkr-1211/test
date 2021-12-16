/** @format */

// @ts-ignore
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const {merge} = require('webpack-merge')
const common = require('./webpack.base.js')
const path = require('path')
const fg = require('fast-glob')
const package = require('./package.json')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const entry = fg.sync('src/components/**/*.ce.ts', {ignore: ['**/node_modules']})

const getNameByPath = path => {
  const folderList = path.split('/')
  const folderName = folderList[folderList.length - 2].split('.')[0]
  return folderName
}

const entryMap = {}
entry.forEach(item => {
  const name = getNameByPath(item)
  entryMap[name] = `./${item}`
})

const PORT = 8089
module.exports = merge(common, {
  entry: {
    main: './src/index.ce.ts',
    utils: './src/utils/index.ts',
    ...entryMap,
  },
  mode: 'production',
  devtool: false,
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
    filename: `js/${package.version}/[name].js`,
    path: path.resolve(__dirname, './dist'),
    library: ['imc_base', '[name]'], // {main, button, ...module} = imc_base
    libraryTarget: 'umd',
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue',
    },
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
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.IgnorePlugin({
      resourceRegExp: /\.\/locale/,
      contextRegExp: /moment/,
    }),
  ],
})
