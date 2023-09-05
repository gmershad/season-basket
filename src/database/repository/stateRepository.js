const State = require('../models/state');

class StateRepository {

    async createState(stateData) {
        try {
            const newState = await State.create(stateData);
            return newState;
        } catch (error) {
            throw error;
        }
    }

    async getAllStates() {
        try {
            const states = await State.findAll();
            return states;
        } catch (error) {
            throw error;
        }
    }

    async getStateById(stateId) {
        try {
            const state = await State.findByPk(stateId);
            return state;
        } catch (error) {
            throw error;
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
            throw error;
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
            throw error;
        }
    }
}

module.exports = StateRepository;
