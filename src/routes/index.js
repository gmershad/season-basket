const express = require('express');
const router = express.Router();

const countryRoutes = require('./countryRoutes');
const productRoutes = require('./productRoutes');
const seasonRoutes = require("./seasonRoutes");

module.exports = (controllers) => {
    router.use('/api', countryRoutes(controllers.countryController));
    router.use('/api', seasonRoutes(controllers.seasonController));
    router.use('/api', productRoutes(controllers.productController));
    return router;
};
