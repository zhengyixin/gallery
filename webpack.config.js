var webpack = require('webpack');

module.exports = {
	entry: './js/entry.js',
	output: {
		path: './build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
			  test: /\.js$/,
			  loader: 'babel-loader',
			  exclude: /node_modules/,
			  query: {
	          	presets: ['es2015', 'react']
	          }
			},
			{test: /\.css$/,loader:'style!css'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
		]
	},
	resolve: {
		extensions:['','.js','.json','.css']
	}
};