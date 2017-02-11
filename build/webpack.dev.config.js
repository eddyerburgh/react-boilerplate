/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, '../src/');
const dist = path.resolve(__dirname, '../dist/');

module.exports = {
  entry: `${src}/client.jsx`,

  output: {
    filename: 'bundle.js',
    path: dist,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json?$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    template: `${src}/index.tpl.html`,
  })],
};
