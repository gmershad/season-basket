const { ProductNutrition, Product } = require('../models');

class ProductNutritionRepository {

    static async createProductNutrition(productNutritionData) {
        try {
            const productNutrition = await ProductNutrition.create(productNutritionData);
            return productNutrition;
        } catch (error) {
            throw error;
        }
    }

    static async findProductNutritionByProductId(productId) {
        try {
            const productNutritionEntries = await ProductNutrition.findAll({
                where: { ProductId: productId },
            });
            return productNutritionEntries;
        } catch (error) {
            throw error;
        }
    }

    static async updateProductNutritionByNutritionId(nutritionId, updates) {
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

    static async deleteProductNutritionByNutritionId(nutritionId) {
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
