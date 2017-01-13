import path from 'path';

export default {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'src/app')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, exclude: /node_modules/, loaders: ['style', 'css', 'autoprefixer']},
            {test: /\.(png|jpg|jpeg|ttf|eot)$/, exclude: /node_modules/, loaders: ['url?limit=5000']}
        ]
    }
}