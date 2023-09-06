class ProductNutritionController {
    constructor(productNutritionService) {
        this.productNutritionService = productNutritionService;
    }

    async createProductNutrition(req, res) {
        try {
            const productNutritionData = req.body;
            const productNutrition = await this.productNutritionService.createProductNutrition(productNutritionData);
            res.status(201).json(productNutrition);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async findProductNutritionByProductId(req, res) {
        try {
            const productId = req.params.productId;
            const productNutritionEntries = await this.productNutritionService.findProductNutritionByProductId(productId);
            res.status(200).json(productNutritionEntries);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateProductNutritionByNutritionId(req, res) {
        try {
            const nutritionId = req.params.nutritionId;
            const updates = req.body;
            const [updatedCount, updatedProductNutrition] = await this.productNutritionService.updateProductNutritionByNutritionId(
                nutritionId,
                updates
            );
            res.status(200).json({ updatedCount, updatedProductNutrition });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteProductNutritionByNutritionId(req, res) {
        try {
            const nutritionId = req.params.nutritionId;
            const deletedCount = await this.productNutritionService.deleteProductNutritionByNutritionId(nutritionId);
            res.status(200).json({ deletedCount });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = ProductNutritionController;
