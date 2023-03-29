'use strict';

var utils = require('../utils/writer.js');
var Reports = require('../service/ReportsService');

module.exports.reportsHosts = function reportsHosts (req, res, next) {
  Reports.reportsHosts()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
