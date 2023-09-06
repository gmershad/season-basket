const { Product, ProductSeason, ProductHealth, ProductNutrition } = require('../models');

class ProductDetailsAggregate {
    constructor() {
        this.product = Product;
        this.productSeason = ProductSeason;
        this.productHealth = ProductHealth;
        this.productNutrition = ProductNutrition;
    }

    async getProductDetails(productId) {
        try {
            const productInfo = await this.product.findOne({
                where: { ProductId: productId },
            });

            const productSeasons = await this.productSeason.findAll({
                where: { ProductId: productId },
            });

            const productHealthAttributes = await this.productHealth.findAll({
                where: { ProductId: productId },
            });

            const productNutrition = await this.productNutrition.findOne({
                where: { ProductId: productId },
            });

            return {
                productInfo,
                productSeasons,
                productHealthAttributes,
                productNutrition,
            };
        } catch (error) {
            throw new Error(`Error retrieving product details: ${error.message}`);
        }
    }
}

module.exports = ProductDetailsAggregate;
