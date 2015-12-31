var needle = require('needle');
var printf = require('sprintf-js').sprintf;
var utils = require('./utils');

var _key = null;
var url = 'http://api.champion.gg/stats';

function init(key) {
    _key = key;
}

var role = {
  all: all,
  specific: {
    improvement: {
      least: roleLeastImproved,
      most: roleMostImproved
    },
    winning: {
      least: roleLeastWins,
      most: roleMostWins
    },
    performance: {
      best: roleBestPerformance,
      worst: roleWorstPerformance
    }
  }
};

function general (cb) {
  needle.get(printf("%s?api_key=%s", url, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function all(cb) {
  needle.get(printf("%s/role?api_key=%s", url, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function roleLeastImproved(role, options, cb) {
  var params = utils.cleanParams(role, options, cb);
  needle.get(printf("%s/role/%s/leastImproved?api_key=%s&page=%i&limit=%i", url, params.role, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function roleMostImproved(role, options, cb) {
  var params = utils.cleanParams(role, options, cb);
  needle.get(printf("%s/role/%s/mostImproved?api_key=%s&page=%i&limit=%i", url, params.role, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function roleMostWins(role, options, cb) {
  var params = utils.cleanParams(role, options, cb);
  needle.get(printf("%s/role/%s/mostWinning?api_key=%s&page=%i&limit=%i", url, params.role, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function roleLeastWins(role, options, cb) {
  var params = utils.cleanParams(role, options, cb);
  needle.get(printf("%s/role/%s/leastWinning?api_key=%s&page=%i&limit=%i", url, params.role, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function roleBestPerformance(role, options, cb) {
  var params = utils.cleanParams(role, options, cb);
  needle.get(printf("%s/role/%s/bestPerformance?api_key=%s&page=%i&limit=%i", url, params.role, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function roleWorstPerformance(role, options, cb) {
  var params = utils.cleanParams(role, options, cb);
  needle.get(printf("%s/role/%s/worstPerformance?api_key=%s&page=%i&limit=%i", url, params.role, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

var champs = {
  specific: champData,
  general: {
    winning: {
      most: champMostWins,
      least: champLeastWins
    },
    played: {
      most: champMostPlayed,
      least: champLeastPlayed
    },
    banned: {
      most: champMostBanned
    },
    rating: {
      best: champBestRated,
      worst: champWorstRated
    }
  }
};

function champData(name, cb) {
  if (!name) throw new Error('Champion name required');
  needle.get(printf("%s/champs/%s?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function champMostWins(options, cb) {
  var params = utils.cleanParams(null, options, cb);

  needle.get(printf("%s/champs/mostWinning?api_key=%s&page=%i&limit=%i", url, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function champLeastWins(options, cb) {
  var params = utils.cleanParams(null, options, cb);

  needle.get(printf("%s/champs/leastWinning?api_key=%s&page=%i&limit=%i", url, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function champMostPlayed(options, cb) {
  var params = utils.cleanParams(null, options, cb);

  needle.get(printf("%s/champs/mostPlayed?api_key=%s&page=%i&limit=%i", url, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function champLeastPlayed(options, cb) {
  var params = utils.cleanParams(null, options, cb);

  needle.get(printf("%s/champs/leastPlayed?api_key=%s&page=%i&limit=%i", url, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function champMostBanned(options, cb) {
  var params = utils.cleanParams(null, options, cb);

  needle.get(printf("%s/champs/mostBanned?api_key=%s&page=%i&limit=%i", url, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function champBestRated(options, cb) {
  var params = utils.cleanParams(null, options, cb);

  needle.get(printf("%s/champs/bestRated?api_key=%s&page=%i&limit=%i", url, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

function champWorstRated(options, cb) {
  var params = utils.cleanParams(null, options, cb);

  needle.get(printf("%s/champs/worstRated?api_key=%s&page=%i&limit=%i", url, _key, params.options.page, params.options.limit), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, params.cb);
  });
}

module.exports.init = init;
module.exports.all = general;
module.exports.role = role;
module.exports.champs = champs;
