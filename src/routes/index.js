const express = require('express');
const router = express.Router();

const countryRoutes = require('./countryRoutes');
const stateRoutes = require('./stateRoutes');
const productRoutes = require('./productRoutes');
const productNutritionRoutes = require("./productNutritionRoutes");

module.exports = (controllers) => {
    router.use('/api', countryRoutes(controllers.countryController));
    router.use('/api', stateRoutes(controllers.stateController));
    router.use('/api', productRoutes(controllers.productController));
    router.use('/api', productNutritionRoutes(controllers.productNutritionController));

    return router;
};
