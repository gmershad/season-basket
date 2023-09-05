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
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getCountryById(req, res) {
        try {
            const countryId = req.params.countryId;
            const country = await this.countryService.getCountryById(countryId);
            if (!country) {
                return res.status(404).json({ error: 'Country not found' });
            }
            return res.status(200).json(country);
        } catch (error) {
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
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = CountryController;
