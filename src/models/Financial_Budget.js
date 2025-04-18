import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Financial_Budget = db.define("Financial_Budget", {
    amount : {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    month: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default Financial_Budget;