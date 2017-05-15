var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: __dirname + '/src/components/index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js' 
	},
	module:{
		loaders: [
			{
				test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
			},
			{ 
                test: /\.css$/, 
                loader: 'style-loader!css-loader'
            },
            {
		        test: /\.json$/,
		        loader: 'json-loader'
		    }
		]
	}
}