class SeasonService {
    constructor(seasonRepository) {
        this.seasonRepository = seasonRepository;
    }

    async createSeason(seasonData) {
        try {
            const newSeason = await this.seasonRepository.createSeason(seasonData);
            return newSeason;
        } catch (error) {
            throw error;
        }
    }

    async getAllSeasons() {
        try {
            const seasons = await this.seasonRepository.getAllSeasons();
            return seasons;
        } catch (error) {
            throw error;
        }
    }

    async getSeasonById(seasonId) {
        try {
            const season = await this.seasonRepository.getSeasonById(seasonId);
            return season;
        } catch (error) {
            throw error;
        }
    }

    async updateSeason(seasonId, seasonData) {
        try {
            const updatedSeason = await this.seasonRepository.updateSeason(
                seasonId,
                seasonData
            );
            return updatedSeason;
        } catch (error) {
            throw error;
        }
    }

    async deleteSeason(seasonId) {
        try {
            const isDeleted = await this.seasonRepository.deleteSeason(seasonId);
            return isDeleted;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SeasonService;
