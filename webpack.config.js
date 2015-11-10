var webpack = require('webpack');

module.exports = {
		entry: './src/react/app.jsx',	
		output: {
			filename: 'components.js',
			path: './assets/js',
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
      				exclude: /(node_modules|bower_components)/,
      				loader: 'babel'
				}
			]
		},
		externals: {
			'react': 'React'
		},
		resolve: {
			extensions: ['', '.js', '.jsx']
		}
};