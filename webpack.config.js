const path = require('path');

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
                        loader:'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    }
}