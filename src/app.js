const express = require('express');
const expressApp = require('./infrastructure/middlewares/express-app');
require('./models');
const dbConnect = require('./infrastructure/database');
const compression = require("compression");

async function createApp() {
    try {
        await dbConnect.authenticate();
        //await dbConnect.sync({ alter: true });
        await dbConnect.sync();
        const app = express();
        app.use(compression());
        await expressApp(app);
        return app;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

module.exports = createApp;
