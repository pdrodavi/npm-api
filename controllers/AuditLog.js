'use strict';

var utils = require('../utils/writer.js');
var AuditLog = require('../service/AuditLogService');

module.exports.getAuditLog = function getAuditLog (req, res, next) {
  AuditLog.getAuditLog()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
