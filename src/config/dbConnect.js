const { Sequelize } = require("sequelize");
const config = require('./database')[process.env.node_ENV || 'development']
console.log(config)

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
});

module.exports = sequelize;
