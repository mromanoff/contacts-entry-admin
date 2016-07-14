var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var DefinePlugin = require('webpack').DefinePlugin;
var postcssImport = require('postcss-import');
var cssNext = require('postcss-cssnext');
var bemLinter = require('postcss-bem-linter');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map', // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
  noInfo: false, // set to false to see a list of every file being bundled.
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },

      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]'
      }


      // {
      //   test: /\.woff$/,
      //   loader: 'url?limit=50000',
      //   //include: PATHS.fonts
      // }


      // {
      //   test: /\.woff$/,
      //   // Inline small woff files and output them below font/.
      //   // Set mimetype just in case.
      //   loader: 'url',
      //   query: {
      //     name: 'fonts/[hash].[ext]',
      //     limit: 5000,
      //     mimetype: 'application/font-woff'
      //   },
      //   include: path.join(__dirname, 'src')
      // },

      // {
      //   // Match woff2 in addition to patterns like .woff?v=1.1.1.
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'url',
      //   query: {
      //     limit: 50000,
      //     mimetype: 'application/font-woff',
      //     name: './static/fonts/[hash].[ext]'
      //   }
      // }

      // {
      //   test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      //   loader: 'file',
      //   query: {
      //     name: 'fonts/[hash].[ext]'
      //   },
      //   include: path.join(__dirname, 'src')
      // }

      // {
      //   test: /\.(woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]'
      // }


    ]
  },

  postcss: function () {
    return [
      postcssImport({
        path: ['node_modules', './src']
      }),
      cssNext({
        browsers: ['last 2 versions', 'IE > 10']// ...based on this browser list
      }),
      bemLinter('suit')
    ];
  },

  // This plugin moves all the CSS into a separate stylesheet
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('app.css'),
    new DefinePlugin({
      DEV: true
    })
  ]
};
