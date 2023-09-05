class StateService {
    constructor(stateRepository) {
        this.stateRepository = stateRepository;
    }

    async createState(stateData) {
        try {
            const newState = await this.stateRepository.createState(stateData);
            return newState;
        } catch (error) {
            throw error;
        }
    }

    async getAllStates() {
        try {
            const states = await this.stateRepository.getAllStates();
            return states;
        } catch (error) {
            throw error;
        }
    }

    async getStateById(stateId) {
        try {
            const state = await this.stateRepository.getStateById(stateId);
            return state;
        } catch (error) {
            throw error;
        }
    }

    async updateState(stateId, stateData) {
        try {
            const updatedState = await this.stateRepository.updateState(
                stateId,
                stateData
            );
            return updatedState;
        } catch (error) {
            throw error;
        }
    }

    async deleteState(stateId) {
        try {
            const isDeleted = await this.stateRepository.deleteState(stateId);
            return isDeleted;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = StateService;
