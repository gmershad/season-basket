const dotEnv = require("dotenv");

if (process.env.NODE_ENV !== "prod") {
    const configFile = `./.env.${process.env.NODE_ENV}`;
    dotEnv.config({ path: configFile });
} else {
    dotEnv.config();
}

module.exports = {
    PORT: process.env.PORT || 8080,
    DB_PORT: process.env.DB_PORT || 3306,
    DB_HOST: process.env.DB_HOST || "34.136.29.169",
    DB_USER: process.env.DB_USER || "admin_user",
    DB_PASSWORD: process.env.DB_PASSWORD || "P0i9Ct5Zw3TEz+w2d1q",
    DB_DATABASE: process.env.DB_PORT || "season_basket",
    SECRET_KEY: process.env.SECRET_KEY || "seasonbasket456"
};
