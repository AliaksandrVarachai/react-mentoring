var path = require('path');
var webpack = require('webpack');

var ASSETS_DIR = path.resolve(__dirname, 'assets');
var SRC_DIR = path.resolve(ASSETS_DIR, 'src');
var DIST_DIR = path.resolve(ASSETS_DIR, 'dist');

module.exports = {
    entry: {
        main: path.resolve(SRC_DIR, 'views/main'),
        home: path.resolve(SRC_DIR, 'views/home')
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
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