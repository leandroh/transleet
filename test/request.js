var transleet = require('../src/transleet.js');
var assert = require('assert');

describe('Google Translate for query translation', function () {
  it('returns translation of the query', function (done) {
    var query = 'hello world',
        sourceLang = 'en',
        targetLang = 'pt',
        url = 'http://translate.google.com/translate_a/t?client=p&ie=UTF-8&oe=UTF-8&sl=' + sourceLang + '&tl=' + targetLang + '&q=' + query;

    function translated(trans) {
      assert.equal(trans, 'Olá mundo');
      done();
    }

    transleet(url, translated);
  });
});
