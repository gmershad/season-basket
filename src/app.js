const express = require('express');
const expressApp = require('./express-app');
require('./models');
const dbConnect = require('./infrastructure/database');

async function createApp() {
    try {
        await dbConnect.authenticate();
        await dbConnect.sync({ force: false });
        const app = express();
        await expressApp(app);
        return app;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1);
    }
}

module.exports = createApp;
