const express = require('express');
const router = express.Router();

module.exports = (productController) => {
    router.get('/:productId', productController.getProductDetails.bind(productController));
    router.get('/:pageNumber/:pageSize', productController.getPaginatedProductDetails.bind(productController));
    return router;
};

