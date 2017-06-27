const webpack = require('webpack');
const path = require('path');
const ExtractTextwebpackPlugin = require('extract-text-webpack-plugin');
const extractPlugin = new ExtractTextwebpackPlugin({
    filename: 'bundle.css'
});

module.exports = {
    entry: {
        app: './src/main'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /.css$/,
                use: extractPlugin.extract({
                    use: ['css-loader']
                })
            }
        ]
    },
    plugins: [
        extractPlugin
    ]
}