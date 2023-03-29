'use strict';


/**
 * Refresh your access token
 *
 * returns TokenObject
 **/
exports.refreshToken = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expires" : 1566540249,
  "token" : "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.ey...xaHKYr3Kk6MvkUjcC4"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Request a new access token from credentials
 *
 * returns TokenObject
 **/
exports.requestToken = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expires" : 1566540249,
  "token" : "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.ey...xaHKYr3Kk6MvkUjcC4"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

