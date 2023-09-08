const { Product, ProductSeason, ProductHealth, ProductNutrition } = require('../models');

// class ProductDetailsAggregate {
//     constructor() {
//         this.product = Product;
//         this.productSeason = ProductSeason;
//         this.productHealth = ProductHealth;
//         this.productNutrition = ProductNutrition;
//     }

//     async getProductDetails(productId) {
//         try {
//             const productInfo = await this.product.findOne({
//                 where: { ProductId: productId },
//             });

//             const productSeasons = await this.productSeason.findAll({
//                 where: { ProductId: productId },
//             });

//             const productHealthAttributes = await this.productHealth.findAll({
//                 where: { ProductId: productId },
//             });

//             const productNutrition = await this.productNutrition.findOne({
//                 where: { ProductId: productId },
//             });

//             return {
//                 productInfo,
//                 productSeasons,
//                 productHealthAttributes,
//                 productNutrition,
//             };
//         } catch (error) {
//             throw new Error(`Error retrieving product details: ${error.message}`);
//         }
//     }
// }

//module.exports = ProductDetailsAggregate;


// ProductDetailsAggregate.js

class ProductDetailsAggregate {
    constructor() {
        Product.hasMany(ProductSeason, { foreignKey: 'ProductId' });
        Product.hasMany(ProductHealth, { foreignKey: 'ProductId' });
        Product.hasOne(ProductNutrition, { foreignKey: 'ProductId' });
    }

    async getPaginatedProductDetails(pageNumber, pageSize) {
        try {
            const offset = (pageNumber - 1) * pageSize;
            const products = await Product.findAll({
                limit: pageSize,
                offset: offset,
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

            return products;
        } catch (error) {
            throw new Error(`Error retrieving paginated product details: ${error.message}`);
        }
    }
}

module.exports = ProductDetailsAggregate;

