var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {

  entry: {
    app: './app/index.js',
  },
  output: {
    path: './public/js',
    filename: 'bundle.js',
    publicPath: '/public/js/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loaders: ['style','css','sass']
      }
    ]
  }
}
