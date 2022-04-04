const express = require('express');
const route = express.Router();

route.use('/camera', require('./configs.camera'));

module.exports = route;