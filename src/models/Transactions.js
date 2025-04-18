import db from "../config/db.js";
import { DataTypes } from "sequelize";

const Transactions = db.define("Transactions", {
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default Transactions;