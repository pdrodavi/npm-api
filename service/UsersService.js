'use strict';


/**
 * Create a User
 *
 * returns UserObject
 **/
exports.createUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "modified_on" : "2020-01-30T09:41:04.000Z",
  "created_on" : "2020-01-30T09:36:08.000Z",
  "is_disabled" : 0,
  "roles" : [ "admin" ],
  "name" : "Jamie Curnow",
  "nickname" : "James",
  "id" : 1,
  "avatar" : "//www.gravatar.com/avatar/6193176330f8d38747f038c170ddb193?default=mm",
  "email" : "jc@jc21.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a User
 *
 * userID Integer User ID
 * returns Boolean
 **/
exports.deleteUser = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a user
 *
 * userID userID User ID or 'me' for yourself
 * returns UserObject
 **/
exports.getUser = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "modified_on" : "2020-01-30T09:41:04.000Z",
  "created_on" : "2020-01-30T09:36:08.000Z",
  "is_disabled" : 0,
  "roles" : [ "admin" ],
  "name" : "Jamie Curnow",
  "nickname" : "James",
  "id" : 1,
  "avatar" : "//www.gravatar.com/avatar/6193176330f8d38747f038c170ddb193?default=mm",
  "email" : "jc@jc21.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all users
 *
 * expand String Expansions (optional)
 * returns UsersList
 **/
exports.getUsers = function(expand) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "modified_on" : "2020-01-30T09:41:04.000Z",
  "created_on" : "2020-01-30T09:36:08.000Z",
  "is_disabled" : 0,
  "roles" : [ "admin" ],
  "name" : "Jamie Curnow",
  "nickname" : "James",
  "id" : 1,
  "avatar" : "//www.gravatar.com/avatar/6193176330f8d38747f038c170ddb193?default=mm",
  "email" : "jc@jc21.com"
}, {
  "modified_on" : "2020-01-30T09:41:04.000Z",
  "created_on" : "2020-01-30T09:36:08.000Z",
  "is_disabled" : 0,
  "roles" : [ "admin" ],
  "name" : "Jamie Curnow",
  "nickname" : "James",
  "id" : 1,
  "avatar" : "//www.gravatar.com/avatar/6193176330f8d38747f038c170ddb193?default=mm",
  "email" : "jc@jc21.com"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Login as this user
 *
 * userID Integer User ID
 * returns inline_response_200
 **/
exports.loginAsUser = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "expires" : 1566540249,
  "user" : {
    "modified_on" : "2020-01-30T09:41:04.000Z",
    "created_on" : "2020-01-30T09:36:08.000Z",
    "is_disabled" : 0,
    "roles" : [ "admin" ],
    "name" : "Jamie Curnow",
    "nickname" : "James",
    "id" : 1,
    "avatar" : "//www.gravatar.com/avatar/6193176330f8d38747f038c170ddb193?default=mm",
    "email" : "jc@jc21.com"
  },
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
 * Update a User
 *
 * userID userID_1 User ID or 'me' for yourself
 * returns UserObject
 **/
exports.updateUser = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "modified_on" : "2020-01-30T09:41:04.000Z",
  "created_on" : "2020-01-30T09:36:08.000Z",
  "is_disabled" : 0,
  "roles" : [ "admin" ],
  "name" : "Jamie Curnow",
  "nickname" : "James",
  "id" : 1,
  "avatar" : "//www.gravatar.com/avatar/6193176330f8d38747f038c170ddb193?default=mm",
  "email" : "jc@jc21.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a User's Authentication
 *
 * userID userID_2 User ID or 'me' for yourself
 * returns Boolean
 **/
exports.updateUserAuth = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a User's Permissions
 *
 * userID Integer User ID
 * returns Boolean
 **/
exports.updateUserPermissions = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = true;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

