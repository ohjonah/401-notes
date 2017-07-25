'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  if (req.method === 'POST') {
    parseBody(req, function(err) {
      if (err) return console.error(err);
      console.log('POST req body:', req.body);
    });
  }

  if (req.method === 'GET' && req.url.pathname === '/cowsay') {
    let params = req.url.query;
    console.log('my params:', params);

    res.write(cowsay.say({ text: params.text }));
    res.end();
  }

  res.end();
  // console.log('req url:', req.url);
  // console.log('req query:', req.url.query);
  // console.log('req method:', req.method);
});

server.listen(PORT, function() {
  console.log('Server on:', PORT);
});

