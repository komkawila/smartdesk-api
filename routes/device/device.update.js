const express = require('express');
const db = require('../../util/db.config');
const route = express.Router();

route.get('/status/:cardid/:timeout/:state', async (req, res, next) => {
    const cardid = req.params.cardid;
    const timeout = req.params.timeout;
    const state = req.params.state;
    await db.query("UPDATE smartdesk_tb SET timeout = ?,state=? WHERE DATE(`timecreate`) = DATE(CURDATE()) AND cardid = ?", [timeout, state, cardid], function (err, result, fields) {
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