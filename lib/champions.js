const { request, resolve, error } = require('./utils');

const base = '/champions';

function all (query, cb) {
    request(base, module.key, query, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function specific(id, fields, cb) {
    if (!id || typeof id !== 'number') throw new Error(error.champ);

    request(`${base}/${id}`, module.key, fields, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function specificRole(id, role, fields, cb) {
    if (!id || typeof id !== 'number') throw new Error(error.champ);
    if (['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'].indexOf(role) === -1) throw new Error(error.role);

    request(`${base}/${id}/${role}`, module.key, fields, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function specificMatchup (champ1, champ2, role, fields, cb) {
    if (!name || typeof name !== 'string') throw new Error(error.champ);
    if (!enemy || typeof enemy !== 'string') throw new Error(error.enemy);
    if (['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'].indexOf(role) === -1) throw new Error(error.role);

    request(`${base}/${name}/matchups/${enemy}/${role}`, module.key, fields, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

module.exports = {
    init: key => module.key = key,
    all: all,
    specific: specific,
    specificRole: specificRole,
    specificMatchup: specificMatchup
}
