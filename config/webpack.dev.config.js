const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigBase = require('./webpack.base.config')

const PORT = 8080

const webpackConfigDev = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 开启热更新
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: 'index.html', // 输出文件的文件名称
      inject: 'body', // javascript资源将被放置在body元素的底部
      template: path.join(__dirname, '../src/index.html') // 模板的Webpack相对路径或绝对路径
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`
    })
  ],
  devtool: 'eval-source-map' // 定位到错误在原代码的位置，不会产生单独的文件，但是可以显示行和列
}

module.exports = merge(webpackConfigBase, webpackConfigDev)