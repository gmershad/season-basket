const { ProductSeason } = require('../models');

class ProductSeasonRepository {
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
}

module.exports = ProductSeasonRepository;
