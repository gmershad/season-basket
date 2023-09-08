const Sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = require("../../config");

// const dbConnect = new Sequelize(
//     {
//         dialect: 'mysql',
//         host: DB_HOST,
//         username: DB_USER,
//         password: DB_PASSWORD,
//         database: DB_DATABASE,
//         define: {
//             timestamps: false,
//         },
//     }
// );

const dbConnect = new Sequelize(
    `mysql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`
);

module.exports = dbConnect;


module.exports = dbConnect;
