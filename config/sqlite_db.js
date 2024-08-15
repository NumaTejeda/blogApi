import { Sequelize } from "sequelize";

export const sequelize_db = new Sequelize({
    dialect: 'sqlite',
    storage: './config/database.sqlite'
})

//Por el momento lo dejamos aca
try {
    await sequelize_db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}