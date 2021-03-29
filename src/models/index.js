// 'use strict';使用嚴謹模式
// 這是一個進入點
// 讀取服務器的文件,使用fs模塊
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import _ from 'lodash';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config,
);
// const sequelize = new Sequelize('node', 'root', '0000', {
//   host: '127.0.0.1',
//   dialect: 'mysql'
// });

// const config = require(__dirname + '/../config/config.json')[env];
fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // 一張表一個model
    const model = _.invoke(sequelize, 'import', path.resolve(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// console.log(config);
// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//
// }
// sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
