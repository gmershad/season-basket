const express = require('express');
const router = express.Router();

module.exports = (productController) => {
    router.post('/products', productController.createProduct.bind(productController));
    router.get('/products/:productId', productController.getProductById.bind(productController));
    router.put('/products/:productId', productController.updateProductById.bind(productController));
    router.delete('/products/:productId', productController.deleteProductById.bind(productController));
    return router;
};

