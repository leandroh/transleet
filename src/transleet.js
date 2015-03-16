'use strict';

var http = require('http');

function parseBody(body) {
  var translate = JSON.parse(body),
      sentences = translate.sentences,
      translation = sentences.shift().trans;

  return translation;
}

function transleet(url, callback) {
  var req = http.get(url, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(body) {
      if (response.statusCode === 200) {
        return callback(parseBody(body));
      }
    });
  });

  req.on('error', function(e) {
    console.log('Error while trying to make request: ' + e.message);
  });
}

module.exports = transleet;
