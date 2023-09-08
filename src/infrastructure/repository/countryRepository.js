const { Country, State } = require('../../models');

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

    async getAllCountries() {
        try {
            const countries = await Country.findAll();
            return countries;
        } catch (error) {
            throw new Error('Error getting all countries: ' + error.message);
        }
    }


    async createState(stateData) {
        try {
            const existingState = await State.findOne({
                where: {
                    CountryId: stateData.CountryId,
                    Name: stateData.Name,
                },
            });

            if (existingState) {
                throw new Error('A state with the same name already exists for this country.');
            }

            const newState = await State.create(stateData);
            return newState;
        } catch (error) {
            throw new Error(`Error creating state: ${error.message}`);
        }
    }

    async getAllStatesByCountry(countryId) {
        try {
            const states = await State.findAll({
                where: {
                    CountryId: countryId,
                },
            });
            return states;
        } catch (error) {
            throw new Error(`Error getting states for country ${countryId}: ${error.message}`);
        }
    }

    async getStateById(stateId) {
        try {
            const state = await State.findByPk(stateId);
            return state;
        } catch (error) {
            throw new Error(`Error getting state by ID: ${error.message}`);
        }
    }

    async updateState(stateId, stateData) {
        try {
            const [updatedRowsCount, updatedStates] = await State.update(
                stateData,
                {
                    where: {
                        StateId: stateId,
                    },
                    returning: true,
                }
            );

            if (updatedRowsCount === 0) {
                return null;
            }

            return updatedStates[0];
        } catch (error) {
            throw new Error(`Error updating state: ${error.message}`);
        }
    }

    async deleteState(stateId) {
        try {
            const deletedRowCount = await State.destroy({
                where: {
                    StateId: stateId,
                },
            });

            return deletedRowCount > 0;
        } catch (error) {
            throw new Error(`Error deleting state: ${error.message}`);
        }
    }
}

module.exports = CountryRepository;
