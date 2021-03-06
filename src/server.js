'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const errorHandler404 = require('./error-handlers/404.js');
const errorHandler500 = require('./error-handlers/500.js');

app.use(express.json());

// ========= Routes =========
app.get('/', (req, res) => {
  res.status(200).send('You have hit the home route');
});

app.get('/person', logger, validator, getPersonHandler);

app.use(errorHandler500);
app.use(errorHandler404);

// ========= Route Handlers =========
function getPersonHandler(request, response) {
  const person = {
    name: request.query.name,
  };
  response.json(person);
}

module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on port : ' + port);
    });
  },
};