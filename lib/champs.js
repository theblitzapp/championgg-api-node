var needle = require('needle');
var printf = require('sprintf-js').sprintf;
var utils = require('./utils');

var _key = null;
var url = 'http://api.champion.gg/champion';

function init(key) {
    _key = key;
}

function all (cb) {
  if (!_key) throw new Error('No API key');
  needle.get(printf("%s?api_key=%s", url, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function specific(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function general(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/general?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

var data = {
  specific: specific,
  general: general
};

var matchups = {
  general: generalMatchup,
  specific: specificMatchup
};

function generalMatchup (name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/matchup?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function specificMatchup (name, enemy, cb) {
  if (!name) throw new Error('Champion name missing');
  if (!enemy) throw new Error('Enemy champion name missing');
  needle.get(printf("%s/%s/matchup/%s?api_key=%s", url, name, enemy, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function matchups() {
  if (!_key) throw new Error('No API key');
  return {
    general: generalMatchup,
    specific: specificMatchup
  };
}

var items = {
  starting: {
    popular: mostPopularStartingItems,
    winning: mostWinsStartingItems
  },
  finished: {
    popular: mostPopularFinishedItems,
    winning: mostWinsFinishedItems
  }
};

function mostPopularFinishedItems(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/items/finished/mostPopular?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function mostWinsFinishedItems(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/items/finished/mostWins?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function mostWinsStartingItems(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/items/starters/mostWins?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function mostPopularStartingItems(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/items/starters/mostPopular?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

var skills = {
  info: skillsInfo,
  order: {
    popular: mostPopularSkills,
    winning: mostWinsSkills
  }
};

function skillsInfo(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/skills?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function mostWinsSkills(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/skills/mostWins?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}


function mostPopularSkills(name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/skills/mostPopular?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

var runes = {
  popular: mostPopularRunes,
  winning: mostWinningRunes
};

function mostPopularRunes (name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/runes/mostPopular?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

function mostWinningRunes (name, cb) {
  if (!name) throw new Error('Champion name missing');
  needle.get(printf("%s/%s/runes/mostWins?api_key=%s", url, name, _key), function (err, response) {
    if (err) {
      throw err;
    }
    utils.manageResponse(response, cb);
  });
}

module.exports.init = init;
module.exports.all = all;
module.exports.data = data;
module.exports.skills = skills;
module.exports.items = items;
module.exports.runes = runes;
module.exports.matchups = matchups;
