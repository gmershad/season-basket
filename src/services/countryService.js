class CountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }

    async createCountry(countryData) {
        try {
            const country = await this.countryRepository.createCountry(countryData);
            return country;
        } catch (error) {
            throw new Error('Error creating country: ' + error.message);
        }
    }

    async getCountryById(countryId) {
        try {
            const country = await this.countryRepository.getCountryById(countryId);
            return country;
        } catch (error) {
            throw new Error('Error getting country by ID: ' + error.message);
        }
    }

    async updateCountry(countryId, countryData) {
        try {
            const country = await this.countryRepository.updateCountry(countryId, countryData);
            return country;
        } catch (error) {
            throw new Error('Error updating country: ' + error.message);
        }
    }

    async deleteCountry(countryId) {
        try {
            await this.countryRepository.deleteCountry(countryId);
        } catch (error) {
            throw new Error('Error deleting country: ' + error.message);
        }
    }
}

module.exports = CountryService;
