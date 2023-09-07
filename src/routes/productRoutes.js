const express = require('express');
const router = express.Router();

module.exports = (productController) => {
    router.post('/product', productController.createProduct.bind(productController));
    router.get('/product/:productId', productController.getProductById.bind(productController));
    router.put('/product/:productId', productController.updateProductById.bind(productController));
    router.delete('/product/:productId', productController.deleteProductById.bind(productController));
    router.get('/product/:productId', productController.getProductDetails.bind(productController));

    router.post('/product/season', productController.createProductSeason.bind(productController));
    router.get('/product/season', productController.getAllProductSeasons.bind(productController));
    router.get('/product/season/:productSeasonId', productController.getProductSeasonById.bind(productController));

    router.post('/product/nutrition', productController.createProductNutrition.bind(productController));
    router.get('/product/:productIdnutrition', productController.findProductNutritionByProductId.bind(productController));
    router.put('/product/nutrition/:nutritionId', productController.updateProductNutritionByNutritionId.bind(productController));
    router.delete('/product/nutrition/:nutritionId', productController.deleteProductNutritionByNutritionId.bind(productController));

    router.post('/product/health', productController.createProductHealth.bind(productController));
    router.get('/product/:productId/health', productController.getProductHealth.bind(productController));
    router.put('/product/health/:healthId', productController.updateProductHealth.bind(productController));
    router.delete('/product/health/:healthId', productController.deleteProductHealth.bind(productController));


    // router.get('/product/:pageNumber/:pageSize', productController.getPaginatedProductDetails.bind(productController));
    return router;
};

