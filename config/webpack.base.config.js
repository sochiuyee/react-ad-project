const path = require('path')

const webpackBaseConfig = {
  entry: path.join(__dirname, '../src/index.jsx'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[fullhash:4].js'
  },
  resolve:{
    // 导入的模块没有拓展名，就按指定的拓展名一一寻找
    extensions:['.js','jsx']
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: 'babel-loader'
      },
      {
        test: /\.(sc|c)ss/,
        // 处理sass文件
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  }
}

module.exports = webpackBaseConfig