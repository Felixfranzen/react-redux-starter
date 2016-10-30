var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: "./app/index.js",
	output: { 
		path: __dirname, 
		filename: 'bundle.js' 
	},
	
	module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('!css!sass')
      }
    ]
  },
  
  plugins: [
    new ExtractTextPlugin('public/styles.css', {
            allChunks: true
        })
  ],
  
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
};