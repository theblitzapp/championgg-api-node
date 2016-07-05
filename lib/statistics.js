const { request, resolve, sanitize, error } = require('./utils');

const base = '/stats';
const dq = {
    page: 1,
    limit: 10
}


function general (cb) {
    request(base, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function all(cb) {
    request(`${base}/role`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function roleLeastImproved(role, query, cb) {
    if (!role || typeof role !== 'string') throw new Error(error.role);

    ({ query, cb } = sanitize(query, cb));

    request(`${base}/role/${role}/leastImproved`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function roleMostImproved(role, query, cb) {
    if (!role || typeof role !== 'string') throw new Error(error.role);

    ({ query, cb } = sanitize(query, cb));

    request(`${base}/role/${role}/mostImproved`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function roleMostWins(role, query, cb) {
    if (!role || typeof role !== 'string') throw new Error(error.role);

    ({ query, cb } = sanitize(query, cb));

    request(`${base}/role/${role}/mostWinning`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function roleLeastWins(role, query, cb) {
    if (!role || typeof role !== 'string') throw new Error(error.role);

    ({ query, cb } = sanitize(query, cb));

    request(`${base}/role/${role}/leastWinning`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function roleBestPerformance(role, query, cb) {
    if (!role || typeof role !== 'string') throw new Error(error.role);

    ({ query, cb } = sanitize(query, cb));

    request(`${base}/role/${role}/bestPerformance`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function roleWorstPerformance(role, query, cb) {
    if (!role || typeof role !== 'string') throw new Error(error.role);

    ({ query, cb } = sanitize(query, cb));

    request(`${base}/role/${role}/worstPerformance`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function champData(name, cb) {
    if (!name || typeof name != 'string') throw new Error(error.champ);

    request(`${base}/champs/${name}`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
  });
}

function champMostWins(query, cb) {
    ({ query, cb } = sanitize(query, cb));

    request(`${base}/champs/mostWinning`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function champLeastWins(query, cb) {
    ({ query, cb } = sanitize(query, cb));

    request(`${base}/champs/leastWinning`, module.key, Object,assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function champMostPlayed(query, cb) {
    ({ query, cb } = sanitize(query, cb));

    request(`${base}%s/champs/mostPlayed`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function champLeastPlayed(query, cb) {
    ({ query, cb } = sanitize(query, cb));

    request(`${base}/champs/leastPlayed`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function champMostBanned(query, cb) {
    ({ query, cb } = sanitize(query, cb));

    request(`${base}/champs/mostBanned`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function champBestRated(query, cb) {
    ({ query, cb } = sanitize(query, cb));

    request(`${base}/champs/bestRated`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function champWorstRated(query, cb) {
    ({ query, cb } = sanitize(query, cb));

    request(`${base}/champs/worstRated`, module.key, Object.assign(dq, query), (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

module.exports = {
    init: key => module.key = key,
    all: general,
    role: {
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
    },
    champs: {
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
    }
}
