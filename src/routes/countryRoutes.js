const express = require('express');
const router = express.Router();

module.exports = (countryController) => {
    router.post('/countries', countryController.createCountry.bind(countryController));
    router.get('/countries/:countryId', countryController.getCountryById.bind(countryController));
    router.put('/countries/:countryId', countryController.updateCountry.bind(countryController));
    router.delete('/countries/:countryId', countryController.deleteCountry.bind(countryController));
    router.get('/countries', countryController.getAllCountries.bind(countryController));

    return router;
};
