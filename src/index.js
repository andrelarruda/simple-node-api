const express = require('express');
const app = express();
const PORT = 3000;
require('./database');

const routes = require("./routes")

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}...`));

module.exports = app;