const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfigBase = require('./webpack.base.config')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const webpackConfigProd = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(), // 每次打包前清除dist里面的内容
    new HtmlWebpackPlugin({
      title: 'React App',
      filename: 'index.html', // 输出文件的文件名称
      inject: 'body', // javascript资源将被放置在body元素的底部
      template: path.join(__dirname, '../src/index.html') // 模板的Webpack相对路径或绝对路径
    })
  ]
}

module.exports = merge(webpackConfigBase, webpackConfigProd)