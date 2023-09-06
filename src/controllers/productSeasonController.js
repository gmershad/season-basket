class ProductSeasonController {
    constructor(productSeasonService) {
        this.productSeasonService = productSeasonService;
    }

    async createProductSeason(req, res) {
        try {
            const productSeasonData = req.body;
            const newProductSeason = await this.productSeasonService.createProductSeason(productSeasonData);
            res.status(201).json(newProductSeason);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllProductSeasons(req, res) {
        try {
            const productSeasons = await this.productSeasonService.getAllProductSeasons();
            res.status(200).json(productSeasons);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getProductSeasonById(req, res) {
        try {
            const productSeasonId = req.params.productSeasonId;
            const productSeason = await this.productSeasonService.getProductSeasonById(productSeasonId);
            res.status(200).json(productSeason);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = ProductSeasonController;
