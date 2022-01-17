require ('dotenv').config();
const { Sequelize } = require("sequelize");

const connection = new Sequelize (process.env.CC_DB);

// const connection = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host: process.env.DB_HOST,
//         dialect: process.env.DB_DIALECT
//     }
// );


// connection.authenticate().then(() => {
//     console.log('Connection Established')
// }).catch((err) => {
//     console.log(err)
// });

module.exports = { connection };