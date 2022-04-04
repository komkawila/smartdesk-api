const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/status', async (req, res, next) => {
    await db.query(`SELECT * FROM status_tb WHERE names = 'camera_capture'`, function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(result.length != 0 ? result[0] : '');
        }
    });
});

route.get('/setstatus/:value', async (req, res, next) => {
    const value = req.params.value;
    await db.query(`UPDATE status_tb SET value = ? WHERE names = 'camera_capture'`, [value], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(json);
        }
    });
});


module.exports = route;