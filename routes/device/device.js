const express = require('express');
const route = express.Router();

const checkRoute = require('./device.check');
route.use('/check', checkRoute);

const updateRoute = require('./device.update');
route.use('/update', updateRoute);

module.exports = route;