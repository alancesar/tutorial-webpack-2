const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './src/main' 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}