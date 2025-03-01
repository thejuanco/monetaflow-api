//Archivo para definir el modelo de la base de datos
import { DataTypes } from "sequelize";
import db from "../config/db.js";

const User = db.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: DataTypes.STRING,
    confirm: DataTypes.BOOLEAN
})

export default User;