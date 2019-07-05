const env = process.env.NODE_ENV || 'production';

module.exports = function() {
  if (env === 'development' || env === 'dev') {
    return require('./webpack.base');
  }

  process.env.NODE_ENV = 'production';
  return require('./webpack.prod');
}();