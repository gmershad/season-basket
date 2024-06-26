const express = require("express");
const cors = require("cors");
const configureRoutes = require('../../routes/configure-routes');
const path = require('path');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

module.exports = async (app) => {
    app.use(express.json());
    app.use(cors());

    app.use(
        helmet.noSniff(),
        //helmet.hsts({ maxAge: 31536000, includeSubDomains: true }),
        // helmet.frameguard({ action: 'sameorigin' }),
        //helmet.referrerPolicy({ policy: 'same-origin' })
    );
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000, // 1 minute
        max: 100,
    });

    app.use(limiter);
    app.use("/images", express.static(path.join(__dirname, '../../../images')));
    configureRoutes(app);
};
