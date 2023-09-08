const Sequelize = require('sequelize');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = require("../../config");

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

const dbConnect = new Sequelize('mysql://admin_user:P0i9Ct5Zw3TEz+w2d1q@34.136.29.169:3306/season_basket');

module.exports = dbConnect;
