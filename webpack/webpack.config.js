const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    }
}