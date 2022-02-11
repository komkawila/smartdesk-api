// Header
const express = require('express');
const cors = require("cors");
const config = require('./util/config');
const app = express();
const port = config.PORT;

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use(express.json());

const deviceRoute = require('./routes/device/device');
app.use('/device', deviceRoute);

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);