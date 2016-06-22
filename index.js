module.exports = require('modify-babel-preset')('stage-0', {
  'transform-async-to-generator': false,
  'async-to-promises': true
});