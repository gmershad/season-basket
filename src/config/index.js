const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: 8080 || process.env.PORT,
    DB_HOST: "localhost",
    DB_USER: "root",
    DB_PASSWORD: "123456",
    DB_DATABASE: "season_basket",
};
