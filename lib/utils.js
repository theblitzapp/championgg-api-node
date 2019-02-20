const axios = require('axios');
const qs = require('querystring');

const hostname = 'api.champion.gg';
const port = 80;

async function request(route, key, query, cb) {
    if (!key) throw 'API Key Required';

    ({ query, cb } = sanitize(query, cb));

    const path = `/v2${route}?api_key=${key}&${qs.stringify(query)}`;
    const response = await axios.get(`http://${hostname}:${port}/v2${path}`, {
        headers: { 'Content-Type': 'application/json' },
        validateStatus: () => true
    });

    return {
        body: response.data,
        headers: response.headers,
        status: response.status
    }
}

function resolve(res) {
    if (!res) throw 'API Failure - No Response'

    switch(res.status) {
    case 200:
        return res.body;
    case 403:
        throw 'Authentication Error';
    case 400:
    case 404:
    case 500:
        throw res.body;
    default:
        console.trace();
        throw 'Unknown Error';
    }
}

function sanitize(query, cb) {
    if (query instanceof Function) {
        cb = query;
        query = {};
    }

    return { cb, query };
}

module.exports = {
    request,
    resolve,
    sanitize,
    error: {
        champ: 'Champion id missing (must be a number)',
        enemy: 'Enemy champion id missing (must be a number)',
        role: 'Invalid or missing role (must be a string)'
    }
};
