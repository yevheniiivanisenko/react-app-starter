const fs = require('fs');
const paths = require('./paths');

const defaultVars = {
  NODE_ENV: process.env.NODE_ENV || 'development'
};

const stringifyEnv = function(obj) {
  return {
    'process.env': Object.keys(obj).reduce((env, key) => {
      env[key] = JSON.stringify(obj[key]);
      return env;
    }, {})
  };
};

module.exports = function() {
  if (fs.existsSync(paths.dotenv)) {
    const dotenv = require('dotenv').config();
    const env = {...dotenv.parsed, ...defaultVars};
    return stringifyEnv(env);
  }

  return stringifyEnv(defaultVars);
};
