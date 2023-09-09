const express = require('express');
const router = express.Router();

module.exports = (countryController) => {
    router.route('/').post(countryController.createCountry.bind(countryController));

    router.route('/:countryId')
        .get(countryController.getCountryById.bind(countryController))
        .put(countryController.updateCountry.bind(countryController))
        .delete(countryController.deleteCountry.bind(countryController));

    router.post("/state", countryController.createState.bind(countryController));
    router.get("/state/:id", countryController.getStateById.bind(countryController));
    router.put("/state/:id", countryController.updateState.bind(countryController));
    router.delete("/state/:id", countryController.deleteState.bind(countryController));

    return router;
};
