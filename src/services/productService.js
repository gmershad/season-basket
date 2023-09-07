class ProductService {

    constructor(productRepository, productDetailAggregate) {
        this.productRepository = productRepository;
        this.productDetailAggregate = productDetailAggregate;
    }

    async createProduct(productData) {
        return await this.productRepository.createProduct(productData);
    }

    async findProductById(productId) {
        return await this.productRepository.findProductById(productId);
    }

    async updateProductById(productId, updates) {
        const [updatedCount, updatedProducts] = await this.productRepository.updateProductById(productId, updates);
        return { updatedCount, updatedProducts };
    }

    async deleteProductById(productId) {
        const deletedCount = await this.productRepository.deleteProductById(productId);
        return deletedCount;
    }

    async createProductSeason(productSeasonData) {
        const newProductSeason = await this.productRepository.createProductSeason(productSeasonData);
        return newProductSeason;
    }

    async getAllProductSeasons() {
        const productSeasons = await this.productRepository.getAllProductSeasons();
        return productSeasons;
    }

    async getProductSeasonById(productSeasonId) {
        const productSeason = await this.productRepository.getProductSeasonById(productSeasonId);
        return productSeason;
    }

    async getProductDetails(productId) {
        const product = await this.productRepository.getProductDetails(productId);
        return product;
    }

    async getPaginatedProductDetails(pageNumber, pageSize) {
        const products = await this.productRepository.getPaginatedProductDetails(pageNumber, pageSize);
        return products;
    }

    async createProductNutrition(productNutritionData) {
        const newProductNutrition = await this.productRepository.createProductNutrition(productNutritionData);
        return newProductNutrition;
    }

    async findProductNutritionByProductId(productId) {
        const productNutritionEntries = await this.productRepository.findProductNutritionByProductId(productId);
        return productNutritionEntries;
    }

    async updateProductNutritionByNutritionId(nutritionId, updates) {
        const [updatedCount, updatedProductNutrition] = await this.productRepository.updateProductNutritionByNutritionId(nutritionId, updates);
        return [updatedCount, updatedProductNutrition];
    }

    async deleteProductNutritionByNutritionId(nutritionId) {
        const deletedCount = await this.productRepository.deleteProductNutritionByNutritionId(nutritionId);
        return deletedCount;
    }


    async createProductHealth(productHealthData) {
        const newProductHealth = await this.productRepository.createProductHealth(productHealthData);
        return newProductHealth;
    }

    async getProductHealth(productHealthId) {
        const productHealth = await this.productRepository.getProductHealth(productHealthId);
        return productHealth;
    }

    async updateProductHealth(productHealthId, productHealthData) {
        const updatedProductHealth = await this.productRepository.updateProductHealth(
            productHealthId,
            productHealthData
        );
        return updatedProductHealth;
    }

    async deleteProductHealth(productHealthId) {
        const isDeleted = await this.productRepository.deleteProductHealth(productHealthId);
        return isDeleted;
    }

}

module.exports = ProductService;
