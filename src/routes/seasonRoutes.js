const express = require('express');
const router = express.Router();

module.exports = (seasonController) => {
    router.post('/seasons', seasonController.createSeason.bind(seasonController));
    router.get('/seasons', seasonController.getAllSeasons.bind(seasonController));
    router.get('/seasons/:seasonId', seasonController.getSeasonById.bind(seasonController));
    router.put('/seasons/:seasonId', seasonController.updateSeason.bind(seasonController));
    router.delete('/seasons/:seasonId', seasonController.deleteSeason.bind(seasonController));

    return router;
};
