const express = require("express");
const cors = require("cors");

const createCountryController = require('./controllers/countryController');
const createCountryService = require('./services/countryService');
const createCountryRepository = require('./database/repository/countryRepository');
const countryRoutes = require('./routes/countryRoutes');

const createStateController = require("./controllers/stateController");
const createStateService = require("./services/stateService");
const createStateRepository = require("./database/repository/stateRepository");
const stateRoutes = require("./routes/stateRoutes");

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + "/public"));
    const countryRepository = new createCountryRepository();
    const countryService = new createCountryService(countryRepository);
    const countryController = new createCountryController(countryService);
    app.use('/api', countryRoutes(countryController));

    const stateRepository = new createStateRepository();
    const stateService = new createStateService(stateRepository);
    const stateController = new createStateController(stateService);

    app.use("/api", stateRoutes(stateController));
};
