#!/usr/bin/env node

var transleet = require('../src/transleet.js'),
    args = process.argv.splice(2).join(' '),
    query = args || 'hello world',
    sourceLang = 'en',
    targetLang = 'pt',
    url = 'http://translate.google.com/translate_a/t?client=p&ie=UTF-8&oe=UTF-8&sl=' + sourceLang + '&tl=' + targetLang + '&q=' + query;

function translated(trans) {
  console.log(trans);
}

transleet(url, translated);
