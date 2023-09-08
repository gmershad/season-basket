const express = require('express');
const router = express.Router();

module.exports = (diseaseController) => {
    router.post('/', diseaseController.createDisease.bind(diseaseController));
    router.get('/:diseaseId', diseaseController.getDiseaseById.bind(diseaseController));
    router.put('/:diseaseId', diseaseController.updateDisease.bind(diseaseController));
    router.delete('/:diseaseId', diseaseController.deleteDisease.bind(diseaseController));

    return router;
};
