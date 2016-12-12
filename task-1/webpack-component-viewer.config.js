var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ASSETS_DIR = path.resolve(__dirname, 'assets');
var SRC_DIR = path.resolve(ASSETS_DIR, 'src');
var DIST_DIR = path.resolve(ASSETS_DIR, 'dist-component-viewer');

module.exports = {
    entry: {
        'vendor': [
            'react',
            'react-dom'
        ],
        'component-viewer': path.resolve(SRC_DIR, 'component-viewer/component-viewer')
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    watch: true,
    devtool: 'eval-source-map',
    plugins: [
        //new webpack.optimize.DedupePlugin(),  only for prod

        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css') //css in separate files
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
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]')
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