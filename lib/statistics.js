const { request, resolve, sanitize, error } = require('./utils');

const dq = {
    page: 1,
    limit: 10
}


function general (query, cb) {
    request(`/general`, module.key, query, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}

function overall(query, cb) {
    request(`/overall`, module.key, query, (err, res) => {
        if (err) throw err;
        resolve(res, cb);
    });
}


module.exports = {
    init: key => module.key = key,
    general: general,
    overall: overall
}
