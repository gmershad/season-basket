const express = require('express');
const router = express.Router();

const countryRoutes = require('./countryRoutes');
const productRoutes = require('./productRoutes');
const seasonRoutes = require("./seasonRoutes");

module.exports = (controllers) => {
    router.use('/api/country', countryRoutes(controllers.countryController));
    router.use('/api/season', seasonRoutes(controllers.seasonController));
    router.use('/api/product', productRoutes(controllers.productController));
    return router;
};

