const express = require('express');
const router = express.Router();

module.exports = (countryController) => {
    router.route('/country')
        .post(countryController.createCountry.bind(countryController))
        .get(countryController.getAllCountries.bind(countryController));

    router.route('/country/:countryId')
        .get(countryController.getCountryById.bind(countryController))
        .put(countryController.updateCountry.bind(countryController))
        .delete(countryController.deleteCountry.bind(countryController));

    router.post("/country/state", countryController.createState.bind(countryController));
    router.get("/country/state/:id", countryController.getStateById.bind(countryController));
    router.put("/country/state/:id", countryController.updateState.bind(countryController));
    router.delete("/country/state/:id", countryController.deleteState.bind(countryController));

    router.get("/country/:countryId/state", countryController.getAllStatesByCountry.bind(countryController));

    return router;
};
