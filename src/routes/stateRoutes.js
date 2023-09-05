const express = require("express");

function createStateRoutes(stateController) {
    const router = express.Router();

    router.post("/states", stateController.createState.bind(stateController));
    router.get("/states", stateController.getAllStates.bind(stateController));
    router.get("/states/:id", stateController.getStateById.bind(stateController));
    router.put("/states/:id", stateController.updateState.bind(stateController));
    router.delete("/states/:id", stateController.deleteState.bind(stateController));

    return router;
}

module.exports = (stateController) => {
    const stateRoutes = createStateRoutes(stateController);
    return stateRoutes;
};
