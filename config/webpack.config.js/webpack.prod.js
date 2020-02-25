const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base')

const config = {
  ...baseConfig,
  mode: 'production',
}

config.output.filename = '[name].[contenthash:8].js'
config.optimization.minimizer = [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]

module.exports = config
