const { Product, ProductSeason, ProductHealth, ProductNutrition, ProductImage } = require('../../models');

class ProductDetailsAggregate {
    constructor() {
        Product.hasMany(ProductSeason, { foreignKey: 'ProductId' });
        Product.hasOne(ProductHealth, { foreignKey: 'ProductId' });
        Product.hasOne(ProductNutrition, { foreignKey: 'ProductId' });
        Product.hasOne(ProductImage, { foreignKey: 'ProductId' });
    }

    async getPaginatedProductDetails(pageNumber, pageSize) {
        try {
            const offset = (pageNumber - 1) * pageSize;
            const totalCount = await Product.count();

            const products = await Product.findAll({
                limit: pageSize,
                offset: offset,
                attributes: { exclude: ['Description'] },
                include: [
                    {
                        model: ProductSeason,
                        required: false,
                    },
                    {
                        model: ProductHealth,
                        required: false,
                    },
                    {
                        model: ProductNutrition,
                        required: false,
                    },
                    {
                        model: ProductImage,
                        required: false,
                    },
                ],
            });

            const totalPages = Math.ceil(totalCount / pageSize);
            const result = {
                products: products,
                total: totalCount,
                totalPages: totalPages,
                currentPage: pageNumber,
            };

            return result;
        } catch (error) {
            throw new Error(`Error retrieving paginated product details: ${error.message}`);
        }
    }

    async getProductDetails(productId) {
        try {
            const product = await Product.findByPk(productId, {
                include: [
                    {
                        model: ProductSeason,
                        required: false,
                    },
                    {
                        model: ProductHealth,
                        required: false,
                    },
                    {
                        model: ProductNutrition,
                        required: false,
                    },
                ],
            });

            if (!product) {
                throw new Error(`Product with productId ${productId} not found.`);
            }

            return product;
        } catch (error) {
            throw new Error(`Error retrieving product details: ${error.message}`);
        }
    }
}

module.exports = ProductDetailsAggregate;

