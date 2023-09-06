const express = require('express');
const router = express.Router();

module.exports = (productController) => {
    router.post('/product', productController.createProduct.bind(productController));
    // router.get('/product/:productId', productController.getProductById.bind(productController));
    router.put('/products/:productId', productController.updateProductById.bind(productController));
    router.delete('/product/:productId', productController.deleteProductById.bind(productController));
    router.get('/product/:productId', productController.getProductDetails.bind(productController));
    return router;
};

