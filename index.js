var stats = require('./lib/stats');
var champs = require('./lib/champs');

var key = null;

function init(_key) {
  if (!_key) throw new Error('API Key required');
  key = _key;
  stats.init(key);
  champs.init(key);
  return {
    statistics: stats,
    champions: champs
  };
}

module.exports.init = init;
