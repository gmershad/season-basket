const express = require('express');
const router = express.Router();

module.exports = (productNutritionController) => {
    router.post('/product-nutrition', productNutritionController.createProductNutrition.bind(productNutritionController));
    router.get('/product-nutrition/:productId', productNutritionController.findProductNutritionByProductId.bind(productNutritionController));
    router.put('/product-nutrition/:nutritionId', productNutritionController.updateProductNutritionByNutritionId.bind(productNutritionController));
    router.delete('/product-nutrition/:nutritionId', productNutritionController.deleteProductNutritionByNutritionId.bind(productNutritionController));

    return router;
};
