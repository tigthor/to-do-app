const express = require('express');
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({
    extended: false
});

const app = express();

const port = 3000
require("./Routes/index")(app);

app.listen(port, () => console.log(`Example app listening on port port!`));