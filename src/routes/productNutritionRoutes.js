const express = require('express');
const router = express.Router();

module.exports = (productNutritionController) => {
    router.post('/product-nutrition', productNutritionController.createProductNutrition);
    router.get('/product-nutrition/:productId', productNutritionController.findProductNutritionByProductId);
    router.put('/product-nutrition/:nutritionId', productNutritionController.updateProductNutritionByNutritionId);
    router.delete('/product-nutrition/:nutritionId', productNutritionController.deleteProductNutritionByNutritionId);

    return router;
};


