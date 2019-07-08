const routes = require('express').Router();
require('dotenv').config();

routes.use('/api', require('./api'));

module.exports = routes;
