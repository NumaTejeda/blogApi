import  { DataTypes } from 'sequelize'

import { sequelize_db } from '../config/sqlite_db.js'

export const Post = sequelize_db.define('Post', {
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        alowwNull: false
    },
    mg: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
   
})