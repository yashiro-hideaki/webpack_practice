const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output:{
        //path.resolveで絶対パスを取得できる。
        path: path.resolve(__dirname,'./dist'),
        //出力先のjs名を変更できる。
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test: /\.css/,
                use: [
                    {
                        // もともとloader:'style-loader'だったものをMiniCssExtractPluginを使用するために変更,
                        loader:MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/html/index.html',
        }),
    ],
}