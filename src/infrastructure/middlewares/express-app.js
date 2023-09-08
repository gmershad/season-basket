const express = require("express");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../../swagger-config');
const configureRoutes = require('../../routes/configure-routes');
const path = require('path');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());

    app.use(
        helmet.contentSecurityPolicy({
            directives: {
                "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
            },
        }),
    );

    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 20,
    });

    app.use(limiter);
    app.use("/images", express.static(path.join(__dirname, '../../../images')));

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
    configureRoutes(app);
};
