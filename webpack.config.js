var webpack= require('webpack');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
  entry: './src/js/index.js',
  output: {
    path:'/',
    filename: 'bundle.js'
  },
  module: {
      loaders:[
        { test: /\.css$/, loader: 'style-loader!css-loader' },
        { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
        {test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,loader: 'url-loader?limit=1&name=statics/[name].[hash:8].[ext]'}
      ]
  },
  plugins: [
      new uglifyJsPlugin({
          compress: {
              warnings: false
          }
      })
  ]
  
};
