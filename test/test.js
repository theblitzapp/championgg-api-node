var assert = require('assert');
var GG = require('../index.js');
var chai = require('chai');
var expect = chai.expect;

describe('Failed calls', function () {
  it('Missing key', function (done) {
    expect(GG.init).to.throw('API Key required');
    done();
  });

  it('Empty key', function (done) {
    expect(GG.init.bind(GG, '')).to.throw('API Key required');
    done();
  });

  it('Wrong key', function (done) {
    var gg = GG.init('12345');
    gg.statistics.all(function (err, res) {
      expect(err).to.exist;
      expect(err.error).to.equal('AuthError');
      done();
    });
  });
});

//All working calls are simple http gets, no need to throttle servers on test
