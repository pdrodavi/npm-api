'use strict';


/**
 * Report on Host Statistics
 *
 * returns HostReportObject
 **/
exports.reportsHosts = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "proxy" : 0,
  "stream" : 1,
  "dead" : 5,
  "redirection" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

