const fs = require("fs");

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

    async getProductSeasonByProductId(productId) {
        const productSeason = await this.productRepository.getProductSeasonByProductId(productId);
        return productSeason;
    }

    async updateProductSeason(productSeasonId, productSeasonData) {
        const productSeason = await this.productRepository.updateProductSeason(productSeasonId, productSeasonData);
        return productSeason;
    }

    async deleteProductSeason(productSeasonId) {
        await this.productRepository.deleteProductSeason(productSeasonId);
    }

    async getProductDetails(productId) {
        const product = await this.productDetailAggregate.getProductDetails(productId);
        return product;
    }

    async getPaginatedProductDetails(pageNumber, pageSize) {
        const products = await this.productDetailAggregate.getPaginatedProductDetails(pageNumber, pageSize);
        return products;
    }

    async createProductNutrition(productNutritionData) {
        const newProductNutrition = await this.productRepository.createProductNutrition(productNutritionData);
        return newProductNutrition;
    }

    async getProductNutritionByProductId(productId) {
        const productNutritionEntries = await this.productRepository.getProductNutritionByProductId(productId);
        return productNutritionEntries;
    }

    async updateProductNutrition(nutritionId, updates) {
        const updatedProductNutrition = await this.productRepository.updateProductNutrition(nutritionId, updates);
        return updatedProductNutrition;
    }

    async deleteProductNutrition(nutritionId) {
        const deletedCount = await this.productRepository.deleteProductNutrition(nutritionId);
        return deletedCount;
    }


    async createProductHealth(productHealthData) {
        const newProductHealth = await this.productRepository.createProductHealth(productHealthData);
        return newProductHealth;
    }

    async getProductHealth(productId) {
        const productHealth = await this.productRepository.getProductHealth(productId);
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

    async createProductWithImages(productId, imgUrls, imageFileNames) {
        return await this.productRepository.createProductImage(productId, imgUrls, imageFileNames);
    }

    async createProductImage(productId, req) {
        try {
            const uploadedFiles = req.files;

            if (!uploadedFiles || uploadedFiles.length === 0) {
                throw new Error("No files uploaded");
            }

            let imageFileNames = [];
            const imageUrls = req.files.map((file) => {
                imageFileNames.push(file.filename);
                return `${req.protocol}://${req.get("host")}/images/${file.filename}`;
            });

            const product = await this.createProductWithImages(productId, imageUrls, imageFileNames);

            return product;
        } catch (error) {
            console.error("Error creating product with images:", error);
            throw error;
        }
    }

    async getImageDetailsById(imageId) {
        const imageDetail = await this.productRepository.getImageDetailsById(imageId);
        return imageDetail;
    }

    async deleteImageById(imageId) {
        return await this.productRepository.deleteImageById(imageId);
    }

    async deleteProductImage(imageId) {
        try {
            const imageDetails = await this.getImageDetailsById(imageId);

            if (!imageDetails) {
                return false;
            }

            const imageFileNames = JSON.parse(imageDetails.ImageFileName);

            for (const fileName of imageFileNames) {
                const imagePath = `images/${fileName}`;
                try {
                    await fs.promises.unlink(imagePath);
                } catch (error) {
                    console.error(`Error deleting file ${fileName}:`, error);
                }
            }

            const isDeleted = await this.deleteImageById(imageId);
            return isDeleted;
        } catch (error) {
            console.error("Error deleting product image:", error);
            throw error;
        }
    }
}

module.exports = ProductService;
