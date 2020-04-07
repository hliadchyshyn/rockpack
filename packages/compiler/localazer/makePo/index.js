const _compile = require('../../core/_compile');
const tempy = require('tempy');
const defaultOptions = require('./defaultOptions');
const { prepareOptions } = require('../utils/index');
const errorHandler = require('../../errorHandler');

module.exports = async (options = {}, cb, configOnly = false) => {
  errorHandler();
  process.env.NODE_ENV = 'production';
  process.env.BABEL_ENV = 'production';
  
  options.localization = await prepareOptions(defaultOptions, options);
  
  options.dist = tempy.file();
  options.makePO = true;
  
  return await _compile(options, cb, configOnly);
};
