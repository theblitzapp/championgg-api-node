var _ = require('underscore');

function manageResponse(resp, cb) {
  if (!resp) cb(new Error('No response'));
  if (resp.statusCode === 200) {
    return cb(null, resp.body);
  } else if (resp.statusCode === 403) {
    return cb({
      error: 'AuthError'
    });
  } else if (resp.statusCode === 400 || resp.statusCode === 404 || resp.statusCode === 500) {
    return cb(resp.body);
  } else {
    console.trace();
    return cb({
      error: 'Unknown error'
    });
  }
}

function cleanParams (role, options, cb) {
  if (!role || typeof(role) !== 'string') throw new Error('Champion role needed');
  if (typeof(options) === 'function')  {
    cb = options;
    options = {};
  }
  options = _.extend({
    page: 1,
    limit: 10
  }, options);
  return {
    role: role,
    options: options,
    cb: cb
  };
}

module.exports.manageResponse = manageResponse;
module.exports.cleanParams = cleanParams;
