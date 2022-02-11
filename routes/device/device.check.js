const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/card/:value', async (req, res, next) => {
    const value = req.params.value;
    await db.query("SELECT * FROM smartdesk_tb WHERE DATE(`timecreate`) = DATE(CURDATE()) AND cardid = ?", [value], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(result.length != 0 ? result[0] : '');
        }
    });
});

route.get('/addcard/:cardid/:value', async (req, res, next) => {
    const cardid = req.params.cardid;
    const value = req.params.value;
    await db.query("INSERT INTO smartdesk_tb(cardid, timeout, state) VALUES (?,?,0);", [cardid,value], function (err, result, fields) {
        if (err) {
            console.log(err);
            res.send({ err: true, message: err });
        } else {
            const json = { err: false, message: result };
            res.send(result.length != 0 ? result[0] : '');
        }
    });
});


module.exports = route;