const logger = require("lib-logger");
const express = require("express");
const utils = require("expressjs-utils");
const { errorHandler } = require("./src/utils");
const catalog = require("./src/Catalog")
const path = require('path');
const cors = require('cors');

const app = express()
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'src', 'Data', 'Images')));

app.get('/', function (req, res) {
    res.send(`Welcome to Season Basket Integration`);
})


app.get("/public/api/catalog", async (req, res) => {
    const data = await catalog.getCatalog(req);
    res.json(data);
});

app.use(errorHandler);
utils.hc(app);
utils.start(app, logger, 8080);