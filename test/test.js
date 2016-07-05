const assert = require('chai').assert;
const GG = require('../index.js');

context('API Key Testing', function () {
    specify('Missing key', function (done) {
        assert.throws(GG.init, Error, 'API Key Required');
        done();
    });

    specify('Empty key', function (done) {
        assert.throws(GG.init.bind(GG, ''), Error, 'API Key Required');
        done();
    });
});
