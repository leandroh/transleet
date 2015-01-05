'use strict';

var request = require('request');

function parseBody(body) {
  var translate = JSON.parse(body),
      sentences = translate.sentences,
      translation = sentences.shift().trans;

  return translation;
}

function transleet(url, callback) {
  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      return callback(parseBody(body));
    }
  });
}

module.exports = transleet;
