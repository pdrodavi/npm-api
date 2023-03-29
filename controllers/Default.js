'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.health = function health (req, res, next) {
  Default.health()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.schema = function schema (req, res, next) {
  Default.schema()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
