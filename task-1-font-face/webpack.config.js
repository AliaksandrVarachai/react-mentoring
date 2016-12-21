var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_DIR = path.resolve(__dirname, 'src');
var DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        'app': path.resolve(SRC_DIR, 'app')
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
                include: SRC_DIR,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.html$/,
                include: __dirname,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]'
            }, {
                test: /\.woff/,
                include: path.resolve(SRC_DIR, 'fonts'),
                //loader: 'url-loader?limit=10&name=[name].[ext]&publicPath=http://localhost:8081/&outputPath=dist/fonts/'
                loader: 'url-loader?limit=10&name=fonts/[name].[ext]'
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