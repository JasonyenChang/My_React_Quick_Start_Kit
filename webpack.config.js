const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: ['babel-polyfill', './src/index.js'],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: './index.html'
        })
    ],
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            loadables: path.resolve(__dirname, 'src/loadables/'),
            images: path.resolve(__dirname, 'src/images/'),
            localization: path.resolve(__dirname, 'src/localization/'),
            stores: path.resolve(__dirname, 'src/stores/'),
            services: path.resolve(__dirname, 'src/services'),
            utils: path.resolve(__dirname, 'src/utils')
        },
        extensions: [
            '.js',
            '.jsx'
        ],
        modules: [
            path.resolve(__dirname, 'src/'),
            path.resolve(__dirname, 'node_modules/')
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  {
                    loader: 'less-loader',
                    options: {
                      javascriptEnabled: true
                    },
                  }
                ]
              },
        ]
    }
};
