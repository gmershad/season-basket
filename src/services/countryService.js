class CountryService {
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }

    async createCountry(countryData) {
        return this.countryRepository.createCountry(countryData);
    }

    async getCountryById(countryId) {
        return this.countryRepository.getCountryById(countryId);
    }

    async updateCountry(countryId, countryData) {
        return this.countryRepository.updateCountry(countryId, countryData);
    }

    async deleteCountry(countryId) {
        await this.countryRepository.deleteCountry(countryId);
    }

    async getAllCountries() {
        return this.countryRepository.getAllCountries();
    }

    async createState(stateData) {
        return this.countryRepository.createState(stateData);
    }

    async getAllStatesByCountry(countryId) {
        return this.countryRepository.getAllStatesByCountry(countryId);
    }

    async getStateById(stateId) {
        return this.countryRepository.getStateById(stateId);
    }

    async updateState(stateId, stateData) {
        return this.countryRepository.updateState(stateId, stateData);
    }

    async deleteState(stateId) {
        return this.countryRepository.deleteState(stateId);
    }
}

module.exports = CountryService;
