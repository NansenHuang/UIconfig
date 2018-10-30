const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyles = new ExtractTextPlugin("style.css");
const extractLess = new ExtractTextPlugin({
    filename: "styleless.css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {

    devtool: 'eval-source-map',

    entry: __dirname + "/app/main.js",            //已多次提及的唯一入口文件

    output: {
        path: __dirname + "/build",         //打包后的文件存放的地方
        filename: "bundle.js"            //打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./build",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true, //实时刷新
        hot: true
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                plugins: ['recharts'],
                presets: ['es2015']
            }
        }],
        rules: [
            {
                test: /\.less$/,
                use: extractLess.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /(app|CSS)/,
                loader: extractStyles.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        },
                    }],
                })
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: extractStyles.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    }],
                })
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('Created by N.Huang'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),extractStyles,extractLess//热加载插件

    ],
};



