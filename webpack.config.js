var config = {
  // entry file
  entry: './main.js',
  // out file after compile
  output: {
    path:'./',
    filename: 'index.js',
  },
  // designating server port
  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',

        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
