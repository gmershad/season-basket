const { Product } = require('../models');

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

}

module.exports = ProductRepository;
