module.exports = {

  entry: {
    app: './app/index.js',
  },
  output: {
    path: './build/js',
    filename: 'bundle.js',
    publicPath: '/build/js/'
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
      }
    ]
  }
}
