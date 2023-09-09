const express = require('express');
const router = express.Router();

const countryRoutes = require('./countryRoutes');
const productRoutes = require('./productRoutes');
const seasonRoutes = require("./seasonRoutes");
const diseaseRoutes = require("./diseaseRoutes");
const authRoutes = require("./authRoutes");
const authentication = require('./../infrastructure/middlewares/authenticatation');

module.exports = (controllers) => {
    router.use('/api', (req, res, next) => {
        if (req.path.startsWith('/auth')) {
            return next('route');
        }
        authentication(req, res, next);
    });

    router.use('/api/country', countryRoutes(controllers.countryController));
    router.use('/api/season', seasonRoutes(controllers.seasonController));
    router.use('/api/product', productRoutes(controllers.productController));
    router.use('/api/disease', diseaseRoutes(controllers.diseaseController));
    router.use('/api/auth', authRoutes(controllers.authController));
    return router;
};

