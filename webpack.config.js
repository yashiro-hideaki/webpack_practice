const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : './src/js/main.js',
    output:{
        //path.resolveで絶対パスを取得できる。
        path: path.resolve(__dirname,'./dist'),
        //出力先のjs名を変更できる。
        filename:'js/main.js'
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
            },
            // {
            //     test: /\.png/,
            //     use: [
            //         {
            //             loader:'url-loader',
            //             options:{
            //                 esModule:false
            //             }
            //         }
            //     ]
            // }
            {
                test: /\.(png|jpg)/,
                use: [
                    {
                        loader:'file-loader',
                        options:{
                            esModule:false,
                            name:'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'./css/main.css',
        }),
        new HtmlWebpackPlugin({
            template:'./src/html/index.html',
        }),
        //不要ファイルの削除
        new CleanWebpackPlugin(),
    ],
}