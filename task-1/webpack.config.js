var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ASSETS_DIR = path.resolve(__dirname, 'assets');
var SRC_DIR = path.resolve(ASSETS_DIR, 'src');
var DIST_DIR = path.resolve(ASSETS_DIR, 'dist');

module.exports = {
    entry: {
        'main': path.resolve(SRC_DIR, 'views/main')
        //'component-viewer': path.resolve(SRC_DIR, 'views/component-viewer')
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    watch: true,  //TODO: make prod version
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css', {allChunks: true})
    ],
    module: {
        loaders: [
            {
                test: /(\.jsx?$)|(\.css)/,
                loader: 'react-hot',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                include: path.resolve(SRC_DIR, 'components'),
                loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]')
            }, {
                test: /\.css$/,
                include: path.resolve(SRC_DIR, 'views'),
                loader: 'style-loader!css-loader'
            }, {
                test: /\.jsx?$/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};