"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
//dot.evn configuration
dotenv_1.default.config();
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;
//Connection to our Database
const db = new sequelize_1.Sequelize('curso_node', db_username, db_password, {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = db;
//# sourceMappingURL=connection.js.map