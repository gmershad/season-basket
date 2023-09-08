const { Product, ProductSeason, ProductNutrition, ProductHealth, ProductImage } = require('../../models');

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

    async getProductSeasonByProductId(productId) {
        try {
            const productSeasons = await ProductSeason.findAll({
                where: {
                    ProductId: productId
                }
            });
            return productSeasons;
        } catch (error) {
            throw new Error(`Error getting product seasons: ${error.message}`);
        }
    }

    async updateProductSeason(productSeasonId, productSeasonData) {
        try {
            const [updatedRowsCount] = await ProductSeason.update(
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

            const updatedProductSeason = await ProductSeason.findByPk(productSeasonId);
            return updatedProductSeason;
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

    async getProductNutritionByProductId(productId) {
        try {
            const productNutritionEntries = await ProductNutrition.findAll({
                where: { ProductId: productId },
            });
            return productNutritionEntries;
        } catch (error) {
            throw error;
        }
    }

    async updateProductNutrition(nutritionId, updates) {
        try {
            const [updatedCount] = await ProductNutrition.update(updates, {
                where: { NutritionId: nutritionId },
                returning: true,
            });
            if (updatedCount === 0) {
                return null;
            }

            const updatedProductSeason = await ProductNutrition.findByPk(nutritionId);
            return updatedProductSeason;
        } catch (error) {
            throw error;
        }
    }

    async deleteProductNutrition(nutritionId) {
        try {
            const deletedCount = await ProductNutrition.destroy({
                where: { NutritionId: nutritionId },
            });
            return deletedCount > 0;
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

    async getProductHealth(productId) {
        try {
            const productHealth = await ProductHealth.findAll({
                where: { ProductId: productId }
            });
            return productHealth;
        } catch (error) {
            throw new Error(`Error getting product health: ${error.message}`);
        }
    }

    async updateProductHealth(productHealthId, productHealthData) {
        try {
            const [updatedCount] = await ProductHealth.update(
                productHealthData,
                {
                    where: { ProductHealthId: productHealthId },
                    returning: true,
                }
            );

            if (updatedCount === 0) {
                return null;
            }

            const updatedProductHealth = await ProductHealth.findByPk(productHealthId);
            return updatedProductHealth;
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

    async createProductImage(productId, imgUrls, imageFileNames) {
        try {
            const productImage = await ProductImage.create({
                ProductId: productId,
                ImgUrls: imgUrls,
                ImageFileName: imageFileNames
            });
            return productImage;
        } catch (error) {
            throw error;
        }
    }

    async getImageDetailsById(imageId) {
        try {
            const imageDetails = await ProductImage.findByPk(imageId);
            return imageDetails;
        } catch (error) {
            throw error;
        }
    }

    async deleteImageById(imageId) {
        try {
            const deletedRowCount = await ProductImage.destroy({
                where: {
                    ImageId: imageId,
                },
            });

            return deletedRowCount > 0;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductRepository;
