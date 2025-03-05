//Archivo para definir el modelo de la base de datos
import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
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
}, {
    hooks: {
        // Encriptar la contraseña antes de guardarlo en la base de datos
        beforeCreate: (User) => {
            const salt =  bcrypt.genSaltSync(10);
            User.password = bcrypt.hashSync(User.password, salt);
        }
    }
})

//Metodos personalizados
User.prototype.validatePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

export default User;