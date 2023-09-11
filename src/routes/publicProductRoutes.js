const express = require('express');
const router = express.Router();

module.exports = (productController) => {
    router.get('/:productId', productController.getProductDetails.bind(productController));
    router.get('/:pageNumber/:pageSize/:seasonId', productController.getPaginatedProductDetails.bind(productController));
    router.get('/hints/:searchText', productController.getProductHints.bind(productController));
    return router;
};

