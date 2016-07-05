const champions = require('./lib/champions');
const statistics = require('./lib/statistics');

function init(key) {
  if (!key) throw new Error('API Key Required');

  statistics.init(key);
  champions.init(key);

  return {
    statistics: statistics,
    champions: champions
  };
}

module.exports.init = init;
