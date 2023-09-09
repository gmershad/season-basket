const express = require('express');
const router = express.Router();

module.exports = (seasonController) => {
    router.get('/', seasonController.getAllSeasons.bind(seasonController));
    return router;
};

