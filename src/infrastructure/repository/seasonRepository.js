const { Season } = require('../../models');

class SeasonRepository {
    async createSeason(seasonData) {
        try {
            const newSeason = await Season.create(seasonData);
            return newSeason;
        } catch (error) {
            throw error;
        }
    }

    async getAllSeasons() {
        try {
            const seasons = await Season.findAll();
            return seasons;
        } catch (error) {
            throw error;
        }
    }

    async getSeasonById(seasonId) {
        try {
            const season = await Season.findByPk(seasonId);
            return season;
        } catch (error) {
            throw error;
        }
    }

    async updateSeason(seasonId, seasonData) {
        try {
            const [updatedRowsCount, updatedSeasons] = await Season.update(
                seasonData,
                {
                    where: {
                        SeasonId: seasonId,
                    },
                    returning: true,
                }
            );

            if (updatedRowsCount === 0) {
                return null;
            }

            return updatedSeasons[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteSeason(seasonId) {
        try {
            const deletedRowCount = await Season.destroy({
                where: {
                    SeasonId: seasonId,
                },
            });

            return deletedRowCount > 0;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = SeasonRepository;
