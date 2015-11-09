var webpack = require('webpack');

module.exports = function() {
	return {
		entry: 'src/react/app.jsx',	
		output: {
			filename: 'components.js',
			path: 'assets/js',
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
      				exclude: /(node_modules|bower_components)/,
      				loader: 'babel-loader'
				}
			]
		},
		externals: {
			'react': 'React'
		},
		resolve: {
			extensions: ['', '.js', '.jsx']
		}
	}
};