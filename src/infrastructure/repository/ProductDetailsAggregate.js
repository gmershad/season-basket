const { Product, ProductSeason, ProductHealth, ProductNutrition, ProductImage, ProductDisease, Season, Disease } = require('../../models');

class ProductDetailsAggregate {
    constructor() {
        Product.hasMany(ProductSeason, { foreignKey: 'ProductId' });
        Product.hasOne(ProductHealth, { foreignKey: 'ProductId' });
        Product.hasOne(ProductNutrition, { foreignKey: 'ProductId' });
        Product.hasOne(ProductImage, { foreignKey: 'ProductId' });
        Product.hasMany(ProductDisease, { foreignKey: 'ProductId' });

        ProductSeason.belongsTo(Season, { foreignKey: 'SeasonId' });
        ProductDisease.belongsTo(Disease, { foreignKey: 'DiseaseId' });
    }

    async getPaginatedProductDetails(pageNumber, pageSize, seasonId) {
        try {
            const offset = (pageNumber - 1) * pageSize;
            const excludeAttributes = ['Description', 'CreatedAt', 'UpdatedAt'];

            const whereClause = seasonId === -1 ? {} : {
                '$season_id$': seasonId
            };

            const products = await Product.findAndCountAll({
                limit: pageSize,
                offset: offset,
                attributes: { exclude: excludeAttributes },
                include: [
                    {
                        model: ProductSeason,
                        required: seasonId !== -1,
                        attributes: { exclude: excludeAttributes },
                        where: whereClause
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
                        attributes: { exclude: excludeAttributes }
                    },
                    {
                        model: ProductDisease,
                        required: false,
                        attributes: { exclude: excludeAttributes },
                        include: [
                            {
                                model: Disease,
                                attributes: ['name'],
                                required: false,
                            },
                        ],
                    },
                ],
            });

            const { rows: items, count: total } = products;
            const totalPages = Math.ceil(total / pageSize);
            const result = {
                items,
                total,
                totalPages,
                currentPage: pageNumber,
            };

            return result;
        } catch (error) {
            throw new Error(`Error retrieving paginated product details: ${error.message}`);
        }
    }


    async getProductDetails(productId) {
        try {
            const excludeAttributes = ['CreatedAt', 'UpdatedAt'];

            const product = await Product.findByPk(productId, {
                attributes: { exclude: excludeAttributes },
                include: [
                    {
                        model: ProductSeason,
                        required: false,
                        attributes: { exclude: excludeAttributes },
                        include: [
                            {
                                model: Season,
                                attributes: ['name'],
                                required: false,
                            },
                        ],
                    },
                    {
                        model: ProductHealth,
                        required: false,
                        attributes: { exclude: excludeAttributes },
                    },
                    {
                        model: ProductNutrition,
                        required: false,
                        attributes: { exclude: excludeAttributes },
                    },
                    {
                        model: ProductImage,
                        required: false,
                        attributes: { exclude: excludeAttributes },
                    },
                    {
                        model: ProductDisease,
                        required: false,
                        attributes: {
                            exclude: excludeAttributes,
                        },
                        include: [
                            {
                                model: Disease,
                                attributes: ['name'],
                                required: false,
                            },
                        ],
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
