const paths = require('../paths');

const plugins = require('./plugins');
const loaders = require('./loaders');

module.exports = {
  entry: {
    bundle: `${paths.src}/index.js`,
  },
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: paths.build,
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  module: {
    rules: loaders,
  },
  plugins,
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
