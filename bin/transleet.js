#!/usr/bin/env node

if (!process.argv[2]) {
  return console.log('Usage: transleet [whatever]');
}

var transleet = require('../src/transleet.js'),
    query = process.argv.splice(2).join(' '),
    sourceLang = 'en',
    targetLang = 'pt',
    url = 'http://translate.google.com/translate_a/t?client=p&ie=UTF-8&oe=UTF-8&sl=' + sourceLang + '&tl=' + targetLang + '&q=' + query;

function translated(trans) {
  console.log(trans);
}

transleet(url, translated);
