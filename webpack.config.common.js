var webpack = require('webpack');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader'}]
            },
            {
                test: /\.css$/,
                loader: [{ loader: 'raw-loader'}]
            }
        ],
        exprContextCritical: false

    }
};