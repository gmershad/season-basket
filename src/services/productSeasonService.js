class ProductSeasonService {
    constructor(productSeasonRepository) {
        this.productSeasonRepository = productSeasonRepository;
    }

    async createProductSeason(productSeasonData) {
        try {
            const newProductSeason = await this.productSeasonRepository.createProductSeason(productSeasonData);
            return newProductSeason;
        } catch (error) {
            throw error;
        }
    }

    async getAllProductSeasons() {
        try {
            const productSeasons = await this.productSeasonRepository.getAllProductSeasons();
            return productSeasons;
        } catch (error) {
            throw error;
        }
    }

    async getProductSeasonById(productSeasonId) {
        try {
            const productSeason = await this.productSeasonRepository.getProductSeasonById(productSeasonId);
            return productSeason;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductSeasonService;
