const paths = require('../paths')
const baseConfig = require('./webpack.base')

const config = {
  ...baseConfig,
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: paths.build,
    historyApiFallback: true,
  },
}

module.exports = config
