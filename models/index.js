const {dbConfig} = require("../env");
const Sequelize = require("sequelize");
const logger = require('../utils/loggerService');


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: (msg) => logger.info(msg)
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.orders = require("./order.model.js")(sequelize, Sequelize);
db.contacts = require("./contacts.model.js")(sequelize, Sequelize);

module.exports = db;