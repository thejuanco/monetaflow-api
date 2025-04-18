import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Categories = db.define("Categories", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.ENUM('ingreso', 'gasto'),
        allowNull: false,
    },
}, {
    timestamps: true
})

export default Categories;