const   webpack = require('webpack'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        ExtractTextPlugin = require('extract-text-webpack-plugin'),
        cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
        path = require("path");

module.exports={
 
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    //entry: ['./src/index.jsx'], //entrada
    output: { //salida
        filename: 'app.js', //nombre del archivo
        path: path.resolve(__dirname, "./build"),    //donde se situara el fichero de salida
        publicPath: ''  //ruta en un servidor de desarrollo
    },

    module:{
        loaders:[
             { 
                test: /(\.js|jsx)$/, 
                exclude: path.resolve(__dirname + '/node_modules/'),
                use: [{
                    loader: "babel-loader",
                    options:{
                            presets: [ 'babel-preset-react', 'babel-preset-latest' ]
                        }
                }] 
            },
            { 
                test: /\.css$/, 
                use: `style-loader!css-loader?${cssModules}`
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "build/src/assets/"),
        compress: true,
         port: 8080,
         open:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: './src/assets/index.html'
        }),
        new ExtractTextPlugin({
            filename:'style.css', 
            allChunks:true
        })
    ]
};