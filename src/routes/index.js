const express = require('express');
const router = express.Router();

const countryRoutes = require('./countryRoutes');
const productRoutes = require('./productRoutes');
const seasonRoutes = require("./seasonRoutes");
const diseaseRoutes = require("./diseaseRoutes");

const authRoutes = require("./authRoutes");
const publicProductRoutes = require("./publicProductRoutes");
const publicCountryRoutes = require("./publicCountryRoutes");
const publicSeasonRoutes = require("./publicSeasonRoutes");

const authentication = require('./../infrastructure/middlewares/authenticatation');

module.exports = (controllers) => {
    router.use('/api', (req, res, next) => {
        if (!req.path.startsWith('/public/api')) {
            authentication(req, res, next);
            return;
        }
        next('route');
    });

    router.use('/api/country', countryRoutes(controllers.countryController));
    router.use('/api/season', seasonRoutes(controllers.seasonController));
    router.use('/api/product', productRoutes(controllers.productController));
    router.use('/api/disease', diseaseRoutes(controllers.diseaseController));

    router.use('/public/api/auth', authRoutes(controllers.authController));
    router.use('/public/api/product', publicProductRoutes(controllers.productController));
    router.use('/public/api/country', publicCountryRoutes(controllers.countryController));
    router.use('/public/api/season', publicSeasonRoutes(controllers.seasonController));
    return router;
};

