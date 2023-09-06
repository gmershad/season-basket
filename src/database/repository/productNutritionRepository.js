const { ProductNutrition } = require('../models');

class ProductNutritionRepository {

    async createProductNutrition(productNutritionData) {
        try {
            const newProductNutrition = await ProductNutrition.create(productNutritionData);
            return newProductNutrition;
        } catch (error) {
            throw error;
        }
    }

    async findProductNutritionByProductId(productId) {
        try {
            const productNutritionEntries = await ProductNutrition.findAll({
                where: { ProductId: productId },
            });
            return productNutritionEntries;
        } catch (error) {
            throw error;
        }
    }

    async updateProductNutritionByNutritionId(nutritionId, updates) {
        try {
            const [updatedCount, updatedProductNutrition] = await ProductNutrition.update(updates, {
                where: { NutritionId: nutritionId },
                returning: true,
            });
            return [updatedCount, updatedProductNutrition];
        } catch (error) {
            throw error;
        }
    }

    async deleteProductNutritionByNutritionId(nutritionId) {
        try {
            const deletedCount = await ProductNutrition.destroy({
                where: { NutritionId: nutritionId },
            });
            return deletedCount;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductNutritionRepository;
