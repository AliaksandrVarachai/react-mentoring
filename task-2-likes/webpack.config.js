var path = require('path');
var webpack = require('webpack');

var SRC = path.resolve(__dirname, 'src');
var DIST = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        connection: 'webpack-dev-server/client?http://localhost:8080/',  //enables websocket connection
        server: 'webpack/hot/dev-server', //to perform HMR in the browser 
        index: path.resolve(SRC, 'index')
    },
    output: {
        path: DIST,
        filename: '[name].js',
        publicPath: '/'
    },
    watch: true, //rebuild weblack after Ctrl+S
    devServer: {
        port: 8080,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //notifies browser
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'react-hot',
                include: SRC
            }, {
                test: /\.jsx?$/,
                include: SRC,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'react-hmre']
                }
            }, {
                test: /\.css$/,
                include: SRC,
                loader: 'style-loader!css-loader'
            },  {
                test: path.resolve(__dirname, 'index.html'),
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    }
};