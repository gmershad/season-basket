class ProductNutritionService {
    constructor(productNutritionRepository) {
        this.productNutritionRepository = productNutritionRepository;
    }

    async createProductNutrition(productNutritionData) {
        try {
            const newProductNutrition = await this.productNutritionRepository.createProductNutrition(productNutritionData);
            return newProductNutrition;
        } catch (error) {
            throw error;
        }
    }

    async findProductNutritionByProductId(productId) {
        try {
            const productNutritionEntries = await this.productNutritionRepository.findProductNutritionByProductId(productId);
            return productNutritionEntries;
        } catch (error) {
            throw error;
        }
    }

    async updateProductNutritionByNutritionId(nutritionId, updates) {
        try {
            const [updatedCount, updatedProductNutrition] = await this.productNutritionRepository.updateProductNutritionByNutritionId(nutritionId, updates);
            return [updatedCount, updatedProductNutrition];
        } catch (error) {
            throw error;
        }
    }

    async deleteProductNutritionByNutritionId(nutritionId) {
        try {
            const deletedCount = await this.productNutritionRepository.deleteProductNutritionByNutritionId(nutritionId);
            return deletedCount;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductNutritionService;
