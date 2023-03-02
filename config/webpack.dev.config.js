const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const mockMiddleware = require('./mock.config');

const webpackConfigBase = require('./webpack.base.config');

const smp = new SpeedMeasurePlugin();

const PORT = 8080;

const webpackConfigDev = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // 开启热更新
        new HtmlWebpackPlugin({
            title: 'React App',
            filename: 'index.html', // 输出文件的文件名称
            inject: 'body', // javascript资源将被放置在body元素的底部
            template: path.join(__dirname, '../src/index.html'), // 模板的Webpack相对路径或绝对路径
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${PORT}/#/`,
        }),
    ],
    devtool: 'eval-source-map', // 定位到错误在原代码的位置，不会产生单独的文件，但是可以显示行和列
    devServer: {
        // proxy: {
        //     '/': 'http://127.0.0.1:4523/m1/883443-0-default/',
        // },
        contentBase: path.join(__dirname, '.'), // 告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要
        historyApiFallback: false, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。默认禁用
        hot: false,
        host: '0.0.0.0', // 服务器外部可访问
        before(app) {
            const projectDir = path.resolve();
            const mockDir = './mock';
            app.use(mockMiddleware({ projectDir, mockDir }));
        },
    },
};

module.exports = smp.wrap(merge(webpackConfigBase, webpackConfigDev));
