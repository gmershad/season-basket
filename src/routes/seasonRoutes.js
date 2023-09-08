const express = require('express');
const router = express.Router();

module.exports = (seasonController) => {
    router.post('/', seasonController.createSeason.bind(seasonController));
    router.get('/', seasonController.getAllSeasons.bind(seasonController));
    router.get('/:seasonId', seasonController.getSeasonById.bind(seasonController));
    router.put('/:seasonId', seasonController.updateSeason.bind(seasonController));
    router.delete('/:seasonId', seasonController.deleteSeason.bind(seasonController));

    return router;
};
