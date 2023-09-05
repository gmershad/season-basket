const createApp = require('./app');
const { PORT } = require('./config');

async function startServer() {
    const app = await createApp();
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}

startServer();
