'use strict';

var utils = require('../utils/writer.js');
var Tokens = require('../service/TokensService');

module.exports.refreshToken = function refreshToken (req, res, next) {
  Tokens.refreshToken()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestToken = function requestToken (req, res, next) {
  Tokens.requestToken()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
