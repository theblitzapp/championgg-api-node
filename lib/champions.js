const { request, resolve, error } = require('./utils');

const base = '/champion';

function all (cb) {
    request(base, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function specific(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function general(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    resolve(`${base}/${name}/general`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function generalMatchup (name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/matchup`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function specificMatchup (name, enemy, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);
    if (!enemy || typeof enemy !== 'string') throw new Error(error.enemy);

    request(`${base}/${name}/matchup/${enemy}`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostPopularFinishedItems(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/items/finished/mostPopular`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostWinsFinishedItems(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/items/finished/mostWins`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostWinsStartingItems(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/items/starters/mostWins`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostPopularStartingItems(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/items/starters/mostPopular`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function skillsInfo(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/skills`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostWinsSkills(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/skills/mostWins`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostPopularSkills(name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/skills/mostPopular`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostPopularRunes (name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/runes/mostPopular`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function mostWinningRunes (name, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);

    request(`${base}/${name}/runes/mostWins`, module.key, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

module.exports = {
    init: key => module.key = key,
    all: all,
    data: {
        general: general,
        specific: specific
    },
    skills: {
        info: skillsInfo,
        order: {
            popular: mostPopularSkills,
            winning: mostWinsSkills
        }
    },
    items: {
        starting: {
            popular: mostPopularStartingItems,
            winning: mostWinsStartingItems
        },
        finished: {
            popular: mostPopularFinishedItems,
            winning: mostWinsFinishedItems
        }
    },
    runes: {
        popular: mostPopularRunes,
        winning: mostWinningRunes
    },
    matchups: {
        general: generalMatchup,
        specific: specificMatchup
    }
}
