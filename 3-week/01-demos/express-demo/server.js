'use strict';

const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const jsonParser = require('body-parser').json();
const debug = require('debug')('note:server');
const Note = require('./model/note.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));

app.get('/test', function(req, res) {
  debug('GET: /test');
  res.json({ msg: 'hello from /test'});
});

app.post('/api/note', jsonParser, function(req, res, next) {
  debug('POST: /api/note');

  // build wrapper for creating a note
  Note.createNote(req.body)
  .then( note => res.json(note))
  .catch( err => next(err));
  next();
});

app.get('/api/note', function(req, res, next) {
  debug('GET: /api/note');

  Note.fetchNote(req.query.id)
  .then( note => res.json(note))
  .catch( err => next(err));
});

app.listen(PORT, () => {
  debug(`server listening on: ${PORT}`);
});

