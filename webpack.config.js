const path = require('path');

module.exports = {
    entry: './dist/index.js',
    output: {
        path: path.resolve(__dirname, 'webpack'),
        filename: 'main.bundle.js',
    },
    mode: 'development',
    devtool: 'source-map',
};