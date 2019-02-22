const { request, resolve, error } = require('./utils');

const base = '/champions';

async function all (query) {
    const res = await request(base, module.key, query);
    return resolve(res);
}

async function specific(id, fields) {
    if (!id || typeof id !== 'number') throw new Error(error.champ);

    const res = await request(`${base}/${id}`, module.key, fields);
    return resolve(res);
}

async function specificRole(id, role, fields) {
    if (!id || typeof id !== 'number') throw new Error(error.champ);
    if (['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'].indexOf(role) === -1) throw new Error(error.role);

    const res = await request(`${base}/${id}/${role}`, module.key, fields);
    return resolve(res);
}

async function specificMatchup (champ1, champ2, role, fields) {
    if (!champ1 || typeof name !== 'number') throw new Error(error.champ);
    if (!champ2 || typeof enemy !== 'number') throw new Error(error.enemy);
    if (['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'].indexOf(role) === -1) throw new Error(error.role);

    const res = await request(`${base}/${champ1}/matchups/${champ2}/${role}`, module.key, fields);
    return resolve(res);
}

module.exports = {
    init: key => module.key = key,
    all,
    specific,
    specificRole,
    specificMatchup
}
