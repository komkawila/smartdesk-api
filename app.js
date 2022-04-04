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

app.use('/device', require('./routes/device/device'));
app.use('/configs', require('./routes/configs/configs'));

app.listen(port, () =>
    console.log(`smartdesk app listening on port ${port}!`)
);