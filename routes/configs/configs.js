const express = require('express');
const route = express.Router();

route.use('/camera', require('./configs.camara'));

module.exports = route;