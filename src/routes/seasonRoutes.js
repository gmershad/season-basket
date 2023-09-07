const express = require('express');
const router = express.Router();

module.exports = (seasonController) => {
    router.post('/season', seasonController.createSeason.bind(seasonController));
    router.get('/season', seasonController.getAllSeasons.bind(seasonController));
    router.get('/season/:seasonId', seasonController.getSeasonById.bind(seasonController));
    router.put('/season/:seasonId', seasonController.updateSeason.bind(seasonController));
    router.delete('/season/:seasonId', seasonController.deleteSeason.bind(seasonController));

    return router;
};
