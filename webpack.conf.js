const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: './demo/src/index.js',
	output: {
        path: __dirname + '/demo',
		filename: 'bundle.js',
		publicPath: 'http://localhost:8080/'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader'
		},{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', {
                loader: 'sass-loader',
                options: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules')
                    ]
                }
            }],
            issuer: /\.[tj]s$/i,
        }]
	},
	devServer: {
		contentBase: './',
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/demo/index.html'
				}
			}
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}
