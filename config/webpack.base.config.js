const path = require('path');

// 获取环境变量
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpackBaseConfig = {
    entry: path.join(__dirname, '../src/index.jsx'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].[fullhash:4].js',
    },
    resolve: {
        // 导入的模块没有拓展名，就按指定的拓展名一一寻找
        extensions: ['.ts', '.js', '.jsx', '.tsx'],
        alias: {
            pages: path.join(__dirname, '../src/pages'),
            '@utils': path.join(__dirname, '../src/utils/'),
            '@components': path.join(__dirname, '../src/components'),
        },
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.(sc|c)ss/,
                // 处理sass文件
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};

module.exports = webpackBaseConfig;
