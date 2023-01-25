const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfigBase = require('./webpack.base.config');

const webpackConfigProd = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(), // 每次打包前清除dist里面的内容
        // 配置的地方应该放在打包输出html前面，因为需要那到已经输出的css文件名
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash:4].css',
        }),
        new HtmlWebpackPlugin({
            title: 'React App',
            filename: 'index.html', // 输出文件的文件名称
            inject: 'body', // javascript资源将被放置在body元素的底部
            template: path.join(__dirname, '../src/index.html'), // 模板的Webpack相对路径或绝对路径
        }),
    ],
};

module.exports = merge(webpackConfigBase, webpackConfigProd);
