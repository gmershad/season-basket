class ProductService {
    constructor(productRepository, productDetailAggregate) {
        this.productRepository = productRepository;
        this.productDetailAggregate = productDetailAggregate;
    }

    async createProduct(productData) {
        try {
            const product = await this.productRepository.createProduct(productData);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async findProductById(productId) {
        try {
            const product = await this.productRepository.findProductById(productId);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async updateProductById(productId, updates) {
        try {
            const [updatedCount, updatedProducts] = await this.productRepository.updateProductById(productId, updates);
            return { updatedCount, updatedProducts };
        } catch (error) {
            throw error;
        }
    }

    async deleteProductById(productId) {
        try {
            const deletedCount = await this.productRepository.deleteProductById(productId);
            return deletedCount;
        } catch (error) {
            throw error;
        }
    }

    async getProductDetails(productId) {
        try {
            const product = await this.productDetailAggregate.getProductDetails(productId);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async getPaginatedProductDetails(pageNumber, pageSize) {
        try {
            const products = await this.productDetailAggregate.getPaginatedProductDetails(pageNumber, pageSize);
            return products;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductService;
