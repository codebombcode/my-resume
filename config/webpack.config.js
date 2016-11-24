var webpack= require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer'); //自动补充css前缀功能

var webpackConfig={
    entry: './src/js/index.js',
    output: {
            path: './dist/js',
            filename: 'bundle.js'
        },
	module:{
		loaders: [
		      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      		  { test: /\.css$/, loader: 'style-loader!css-loader'},
		      {
		        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
		        loader: 'url-loader?limit=1&name=statics/[name].[hash:8].[ext]'
		      }
    	]
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
				compress:{
					warnings:false
				}
		})
	]
};

module.exports = webpackConfig;
