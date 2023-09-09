const express = require('express');
const router = express.Router();

module.exports = (countryController) => {
    router.get('/', countryController.getAllCountries.bind(countryController));
    router.get("/:countryId/state", countryController.getAllStatesByCountry.bind(countryController));
    return router;
};

