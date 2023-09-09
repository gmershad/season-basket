class SeasonController {

    constructor(seasonService) {
        this.seasonService = seasonService;
    }

    async createSeason(req, res) {
        try {
            const seasonData = req.body;
            const newSeason = await this.seasonService.createSeason(seasonData);
            res.status(201).json(newSeason);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllSeasons(req, res) {
        try {
            const seasons = await this.seasonService.getAllSeasons();
            res.status(200).json(seasons);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getSeasonById(req, res) {
        try {
            const seasonId = req.params.seasonId;
            const season = await this.seasonService.getSeasonById(seasonId);
            if (!season) {
                res.status(404).json({ error: 'Season not found' });
                return;
            }
            res.status(200).json(season);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async updateSeason(req, res) {
        try {
            const seasonId = parseInt(req.params.seasonId);
            const updates = req.body;
            const updatedSeason = await this.seasonService.updateSeason(seasonId, updates);
            if (!updatedSeason) {
                res.status(404).json({ error: 'Season not found' });
                return;
            }
            res.status(200).json(updatedSeason);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async deleteSeason(req, res) {
        try {
            const seasonId = req.params.seasonId;
            const isDeleted = await this.seasonService.deleteSeason(seasonId);
            if (!isDeleted) {
                res.status(404).json({ error: 'Season not found' });
                return;
            }
            res.status(204).send();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

module.exports = SeasonController;
