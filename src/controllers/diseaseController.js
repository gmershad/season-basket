class DiseaseController {

    constructor(diseaseService) {
        this.diseaseService = diseaseService;
    }

    async createDisease(req, res) {
        try {
            const data = req.body;
            const disease = await this.diseaseService.createDisease(data);
            res.status(201).json(disease);
        } catch (error) {
            console.error('Error creating disease:', error);
            res.status(500).json({ error: 'Unable to create disease' });
        }
    }

    async getDiseaseById(req, res) {
        try {
            const diseaseId = parseInt(req.params.diseaseId);
            const disease = await this.diseaseService.findDiseaseById(diseaseId);

            if (!disease) {
                return res.status(404).json({ error: 'Disease not found' });
            }

            res.json(disease);
        } catch (error) {
            console.error('Error fetching disease:', error);
            res.status(500).json({ error: 'Unable to fetch disease' });
        }
    }

    async updateDisease(req, res) {
        try {
            const diseaseId = parseInt(req.params.diseaseId);
            const data = req.body;
            const updatedDisease = await this.diseaseService.updateDisease(diseaseId, data);

            if (!updatedDisease) {
                return res.status(404).json({ error: 'Disease not found' });
            }

            res.json(updatedDisease);
        } catch (error) {
            console.error('Error updating disease:', error);
            res.status(500).json({ error: 'Unable to update disease' });
        }
    }

    async deleteDisease(req, res) {
        try {
            const diseaseId = parseInt(req.params.diseaseId);
            const isDeleted = await this.diseaseService.deleteDisease(diseaseId);

            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: 'Disease not found' });
            }
        } catch (error) {
            console.error('Error deleting disease:', error);
            res.status(500).json({ error: 'Unable to delete disease' });
        }
    }
}

module.exports = DiseaseController;