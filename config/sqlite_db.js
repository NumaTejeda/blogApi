import { Sequelize } from "sequelize";


// Instanciacion de bd
export const sequelize_db = new Sequelize({
    dialect: 'sqlite',
    storage: './config/database.sqlite'
})