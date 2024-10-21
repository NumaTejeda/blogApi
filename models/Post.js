import  { DataTypes } from 'sequelize'
import { sequelize_db } from '../config/sqlite_db.js'

//Modelo/estructura base de datos del post.

export const Post = sequelize_db.define('Post', {
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    //Guardo la direccion de la imagen
    urlImagen:{
        type: DataTypes.STRING(255),
        allowNull: true //puede no llevar imagen
    },
    content: {
        type: DataTypes.TEXT,
        alowNull: false
    },
    mg: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
   
})