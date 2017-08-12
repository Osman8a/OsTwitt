const   webpack = require('webpack'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        ExtractTextPlugin = require('extract-text-webpack-plugin'),
        cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
        path = require("path");

module.exports={
 
    entry: ['./src/index.js'], //entrada
    output: { //salida
        filename: 'app.js', //nombre del archivo
        path: path.resolve(__dirname, "dist"),    //donde se situara el fichero de salida
        publicPath: '/'  //ruta en un servidor de desarrollo
    },

    module:{
        rules:[
             { 
                test: /(\.js|jsx)$/, 
                exclude: path.resolve(__dirname + '/node_modules/'),
                use: ['babel-loader'], 
                options:{ 
                    presets: [ 'babel-loader-react', 'babel-loader-latest' ]
                    } 
            },
            { 
                test: /\.css$/, 
                use: `style-loader!css-loader?${cssModules}`
            }
        ]
    },
    devServer:{
        host: 'localhost',
        port: 8080,
        inline:true
    }
};