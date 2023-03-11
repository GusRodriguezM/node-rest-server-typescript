import dotenv from 'dotenv';
import { Sequelize } from "sequelize";

//dot.evn configuration
dotenv.config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

//Connection to our Database
const db = new Sequelize( 'curso_node', <string>db_username, db_password, {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;