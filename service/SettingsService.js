'use strict';


/**
 * Get a setting
 *
 * settingID String Setting ID
 * returns SettingObject
 **/
exports.getSetting = function(settingID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : { },
  "name" : "Default Site",
  "description" : "What to show when Nginx is hit with an unknown Host",
  "id" : "default-site",
  "value" : "congratulations"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all settings
 *
 * returns SettingsList
 **/
exports.getSettings = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "meta" : { },
  "name" : "Default Site",
  "description" : "What to show when Nginx is hit with an unknown Host",
  "id" : "default-site",
  "value" : "congratulations"
}, {
  "meta" : { },
  "name" : "Default Site",
  "description" : "What to show when Nginx is hit with an unknown Host",
  "id" : "default-site",
  "value" : "congratulations"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a setting
 *
 * settingID String Setting ID
 * returns SettingObject
 **/
exports.updateSetting = function(settingID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "meta" : { },
  "name" : "Default Site",
  "description" : "What to show when Nginx is hit with an unknown Host",
  "id" : "default-site",
  "value" : "congratulations"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

