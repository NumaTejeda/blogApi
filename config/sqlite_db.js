import { Sequelize } from "sequelize";

export const sequelize_db = new Sequelize({
    dialect: 'sqlite',
    storage: './config/database.sqlite'
})