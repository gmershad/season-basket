class StateController {
    constructor(stateService) {
        this.stateService = stateService;
    }

    async createState(req, res) {
        try {
            const stateData = req.body;
            const newState = await this.stateService.createState(stateData);
            res.status(201).json(newState);
        } catch (error) {
            console.error("Error creating state:", error);
            res.status(500).json({ error: "Failed to create state" });
        }
    }

    async getAllStates(req, res) {
        try {
            const states = await this.stateService.getAllStates();
            res.status(200).json(states);
        } catch (error) {
            console.error("Error fetching states:", error);
            res.status(500).json({ error: "Failed to fetch states" });
        }
    }

    async getStateById(req, res) {
        try {
            const stateId = req.params.id;
            const state = await this.stateService.getStateById(stateId);
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
            const updatedState = await this.stateService.updateState(
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
            const isDeleted = await this.stateService.deleteState(stateId);
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

module.exports = StateController;
