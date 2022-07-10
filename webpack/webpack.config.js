const path = require('path');
// const myLoader = require('./myLoader');
const webpack = require('webpack');
const childProcess = require('child_process');
const dotenv = require('dotenv');
dotenv.config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

console.log("nodeEnv" + process.env.NODE_ENV);

module.exports = {
    mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        publicPath: '/webpack/dist/',
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 200 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `
                Commit version : ${childProcess.execSync('git rev-parse --short HEAD')}
                Committer name : ${childProcess.execSync('git config user.name')}
                Commit Date : ${new Date().toLocaleString()}
            `
        }),
        new webpack.DefinePlugin({
            dev: JSON.stringify(process.env.DEV_API),
            pro: JSON.stringify(process.env.PRO_API)
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ]
}