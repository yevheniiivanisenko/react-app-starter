const env = require('../env');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('../paths');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: `${paths.public}/index.html`,
    minify: {
      collapseWhitespace: true,
      removeEmptyAttributes: true,
    },
  }),
  new MiniCssExtractPlugin({
    filename: devMode ? '[name].css' : '[name].[hash].css',
    chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
  }),
  new webpack.DefinePlugin(env),
];
