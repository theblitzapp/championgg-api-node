const { request, resolve } = require('./utils');

async function general (query) {
    const res = await request(`/general`, module.key, query);
    return resolve(res);
}

async function overall (query) {
    const res = await request(`/overall`, module.key, query);
    return resolve(res);
}

module.exports = {
    init: key => module.key = key,
    general,
    overall
}
