// productSeasonRoutes.js
const express = require('express');
const router = express.Router();

module.exports = (productSeasonController) => {
    router.post('/products/seasons', productSeasonController.createProductSeason.bind(productSeasonController));
    router.get('/products/seasons', productSeasonController.getAllProductSeasons.bind(productSeasonController));
    router.get('/products/seasons/:productSeasonId', productSeasonController.getProductSeasonById.bind(productSeasonController));
    return router;
};
