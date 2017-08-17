const webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
    path = require("path");

module.exports = {
    devtool:'scheap-eval-source-map',
    resolve: {
        extensions: [".js",".jsx",".css"]
        
    },
    context: path.resolve(__dirname, 'src'),
    entry: './index.jsx',
    //entry: ['./src/index.jsx'], //entrada
    output: { //salida
        filename: 'app.js', //nombre del archivo
        path: path.resolve(__dirname, "build"), //donde se situara el fichero de salida
    },
    module: {
        loaders: [{
                test: /(\.js|jsx)$/,
                exclude: path.resolve(__dirname + '/node_modules/'),
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ['react', 'latest']
                    }
                }]
            },
            {
                test: /\.css$/,
                loader: `style-loader!css-loader`
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 8080
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `assets/index.html`,
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
    ]
};