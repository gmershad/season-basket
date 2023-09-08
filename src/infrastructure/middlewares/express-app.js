const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../../swagger-config');
const configureRoutes = require('../../routes/configure-routes');
const path = require('path')

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());
    app.use("/images", express.static(path.join(__dirname, '../../../images')));

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    configureRoutes(app);
};
