class CountryController {

    constructor(countryService) {
        this.countryService = countryService;
    }

    async createCountry(req, res) {
        try {
            const countryData = req.body;
            const createdCountry = await this.countryService.createCountry(countryData);
            return res.status(201).json(createdCountry);
        } catch (error) {
            console.error('Error creating state:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getCountryById(req, res) {
        try {
            const countryId = parseInt(req.params.countryId);
            const country = await this.countryService.getCountryById(countryId);
            if (!country) {
                return res.status(404).json({ error: 'Country not found' });
            }
            return res.status(200).json(country);
        } catch (error) {
            console.error('Error while getting country:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateCountry(req, res) {
        try {
            const countryId = req.params.countryId;
            const updatedData = req.body;
            const updated = await this.countryService.updateCountry(countryId, updatedData);
            if (!updated) {
                return res.status(404).json({ error: 'Country not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async deleteCountry(req, res) {
        try {
            const countryId = req.params.countryId;
            const deleted = await this.countryService.deleteCountry(countryId);
            if (!deleted) {
                return res.status(404).json({ error: 'Country not found' });
            }
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getAllCountries(req, res) {
        try {
            const countries = await this.countryService.getAllCountries();
            return res.status(200).json(countries);
        } catch (error) {
            console.error('Error while getting countries:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async createState(req, res) {
        try {
            const stateData = req.body;
            const newState = await this.countryService.createState(stateData);
            res.status(201).json(newState);
        } catch (error) {
            console.error("Error creating state:", error);
            res.status(500).json({ error: "Failed to create state" });
        }
    }

    async getAllStatesByCountry(req, res) {
        try {
            const countryId = parseInt(req.params.countryId);
            const states = await this.countryService.getAllStatesByCountry(countryId);
            res.status(200).json(states);
        } catch (error) {
            console.error("Error fetching states:", error);
            res.status(500).json({ error: "Failed to fetch states" });
        }
    }

    async getStateById(req, res) {
        try {
            const stateId = req.params.id;
            const state = await this.countryService.getStateById(stateId);
            if (state) {
                res.status(200).json(state);
            } else {
                res.status(404).json({ error: "State not found" });
            }
        } catch (error) {
            console.error("Error fetching state:", error);
            res.status(500).json({ error: "Failed to fetch state" });
        }
    }

    async updateState(req, res) {
        try {
            const stateId = req.params.id;
            const stateData = req.body;
            const updatedState = await this.countryService.updateState(
                stateId,
                stateData
            );
            if (updatedState) {
                res.status(200).json(updatedState);
            } else {
                res.status(404).json({ error: "State not found" });
            }
        } catch (error) {
            console.error("Error updating state:", error);
            res.status(500).json({ error: "Failed to update state" });
        }
    }

    async deleteState(req, res) {
        try {
            const stateId = req.params.id;
            const isDeleted = await this.countryService.deleteState(stateId);
            if (isDeleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ error: "State not found" });
            }
        } catch (error) {
            console.error("Error deleting state:", error);
            res.status(500).json({ error: "Failed to delete state" });
        }
    }
}

module.exports = CountryController;
