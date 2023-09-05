const Country = require('../models/country');

class CountryRepository {
    async createCountry(countryData) {
        try {
            const country = await Country.create(countryData);
            return country;
        } catch (error) {
            throw new Error('Error creating country: ' + error.message);
        }
    }

    async getCountryById(countryId) {
        try {
            const country = await Country.findByPk(countryId);
            return country;
        } catch (error) {
            throw new Error('Error getting country by ID: ' + error.message);
        }
    }

    async updateCountry(countryId, countryData) {
        try {
            const country = await Country.findByPk(countryId);
            if (!country) {
                throw new Error('Country not found');
            }
            await country.update(countryData);
            return country;
        } catch (error) {
            throw new Error('Error updating country: ' + error.message);
        }
    }

    async deleteCountry(countryId) {
        try {
            const country = await Country.findByPk(countryId);
            if (!country) {
                throw new Error('Country not found');
            }
            await country.destroy();
        } catch (error) {
            throw new Error('Error deleting country: ' + error.message);
        }
    }
}

module.exports = CountryRepository;


