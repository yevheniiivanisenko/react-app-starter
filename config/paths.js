const path = require('path');

const appDirectory = process.cwd();
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  src: resolvePath('src'),
  public: resolvePath('public'),
  build: resolvePath('build'),
};
