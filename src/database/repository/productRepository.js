const { Product, ProductSeason, ProductNutrition, ProductHealth } = require('../models');

class ProductRepository {
    async createProduct(productData) {
        try {
            const product = await Product.create(productData);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async findProductById(productId) {
        try {
            const product = await Product.findOne({ where: { ProductId: productId } });
            return product;
        } catch (error) {
            throw error;
        }
    }

    async updateProductById(productId, updates) {
        try {
            const [updatedCount, updatedProducts] = await Product.update(updates, {
                where: { ProductId: productId },
                returning: true,
            });
            return [updatedCount, updatedProducts];
        } catch (error) {
            throw error;
        }
    }

    async deleteProductById(productId) {
        try {
            const deletedCount = await Product.destroy({ where: { ProductId: productId } });
            return deletedCount;
        } catch (error) {
            throw error;
        }
    }

    async createProductSeason(productSeasonData) {
        try {
            const newProductSeason = await ProductSeason.create(productSeasonData);
            return newProductSeason;
        } catch (error) {
            throw error;
        }
    }

    async getAllProductSeasons() {
        try {
            const productSeasons = await ProductSeason.findAll();
            return productSeasons;
        } catch (error) {
            throw error;
        }
    }

    async getProductSeasonById(productSeasonId) {
        try {
            const productSeason = await ProductSeason.findByPk(productSeasonId);
            return productSeason;
        } catch (error) {
            throw error;
        }
    }

    async updateProductSeason(productSeasonId, productSeasonData) {
        try {
            const [updatedRowsCount, updatedProductSeasons] = await ProductSeason.update(
                productSeasonData,
                {
                    where: {
                        ProductSeasonId: productSeasonId,
                    },
                    returning: true,
                }
            );

            if (updatedRowsCount === 0) {
                return null;
            }

            return updatedProductSeasons[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteProductSeason(productSeasonId) {
        try {
            const deletedRowCount = await ProductSeason.destroy({
                where: {
                    ProductSeasonId: productSeasonId,
                },
            });

            return deletedRowCount > 0;
        } catch (error) {
            throw error;
        }
    }

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

    async createProductHealth(productHealthData) {
        try {
            const newProductHealth = await ProductHealth.create(productHealthData);
            return newProductHealth;
        } catch (error) {
            throw error;
        }
    }

    async getProductHealthById(productHealthId) {
        try {
            const productHealth = await ProductHealth.findByPk(productHealthId);
            return productHealth;
        } catch (error) {
            throw error;
        }
    }

    async updateProductHealth(productHealthId, productHealthData) {
        try {
            const [updatedRowsCount, updatedProductHealth] = await ProductHealth.update(
                productHealthData,
                {
                    where: {
                        ProductHealthId: productHealthId,
                    },
                    returning: true,
                }
            );

            if (updatedRowsCount === 0) {
                return null;
            }

            return updatedProductHealth[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteProductHealth(productHealthId) {
        try {
            const deletedRowCount = await ProductHealth.destroy({
                where: {
                    ProductHealthId: productHealthId,
                },
            });

            return deletedRowCount > 0;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductRepository;
