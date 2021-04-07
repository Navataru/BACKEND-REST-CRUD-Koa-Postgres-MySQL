const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodejs_tasks', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  //dialect: 'mysql',
  operatorsAliases: false
})

module.exports = sequelize
