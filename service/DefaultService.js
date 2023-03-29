'use strict';


/**
 * Returns the API health status
 *
 * returns HealthObject
 **/
exports.health = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "version" : "{\"major\":2,\"minor\":0,\"revision\":0}",
  "status" : "OK"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns this swagger API schema
 *
 * no response value expected for this operation
 **/
exports.schema = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

