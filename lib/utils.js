const http = require('http');
const qs = require('querystring');

const hostname = 'api.champion.gg';
const port = 80;

function request(route, key, query, cb) {
    if (!key) throw 'API Key Required';

    ({ query, cb } = sanitize(query, cb));

    const path = `${route}?api_key=${key}&${qs.stringify(query)}`;
    const req = http.request({
        hostname: hostname,
        port: port,
        path: path,
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);

        res.on('end', () => {
            if (cb) cb(null, {
                body: data,
                headers: res.headers,
                hostname: hostname,
                method: 'GET',
                port: port,
                route: route,
                status: res.statusCode,
                url: `${hostname}${path}`
            });
        });

        res.on('error', (e) => {
            if (cb) cb(e);
        });
    });

    req.end();
}

function resolve(res, cb) {
    if (!res) cb({
        error: 'API Failure - No Response'
    });

    switch(res.status) {
    case 200:
        return cb(null, JSON.parse(res.body));
    case 403:
        return cb({
            status: res.status,
            error: 'Authentication Error'
        });
    case 400:
    case 404:
    case 500:
        console.log(res.url)
        return cb({
            status: res.status,
            error: res.body
        });
    default:
        console.trace();
        return cb({
            status: res.status,
            error: 'Unknown Error'
        });
    }
}

function sanitize(query, cb) {
    if (query instanceof Function) {
        cb = query;
        query = {};
    }

    return {
        cb: cb,
        query: query
    }
}

module.exports = {
    request: request,
    resolve: resolve,
    sanitize: sanitize,
    error: {
        champ: 'Champion name missing (must be a string)',
        enemy: 'Enemy champion name missing (must be a string)',
        role: 'Role missing (must be a string)'
    }
}
