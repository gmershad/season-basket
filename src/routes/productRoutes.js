const express = require('express');
const router = express.Router();

module.exports = (productController) => {
    router.post('/', productController.createProduct.bind(productController));
    router.put('/:productId', productController.updateProductById.bind(productController));
    router.delete('/:productId', productController.deleteProductById.bind(productController));
    router.get('/:productId', productController.getProductDetails.bind(productController));

    router.post('/season', productController.createProductSeason.bind(productController));
    router.get('/:productId/season', productController.getProductSeasonByProductId.bind(productController));
    router.put('/season/:productSeasonId', productController.updateProductSeason.bind(productController));
    router.delete('/season/:productSeasonId', productController.deleteProductSeason.bind(productController));

    router.post('/nutrition', productController.createProductNutrition.bind(productController));
    router.get('/:productId/nutrition', productController.getProductNutritionByProductId.bind(productController));
    router.put('/nutrition/:nutritionId', productController.updateProductNutrition.bind(productController));
    router.delete('/nutrition/:nutritionId', productController.deleteProductNutrition.bind(productController));

    router.post('/health', productController.createProductHealth.bind(productController));
    router.get('/:productId/health', productController.getProductHealth.bind(productController));
    router.put('/health/:healthId', productController.updateProductHealth.bind(productController));
    router.delete('/health/:healthId', productController.deleteProductHealth.bind(productController));


    router.get('/:pageNumber/:pageSize', productController.getPaginatedProductDetails.bind(productController));

    router.post('/image/:productId', productController.uploadProductImage.bind(productController));
    router.delete('/image/:imageId', productController.deleteProductImage.bind(productController));

    return router;
};

