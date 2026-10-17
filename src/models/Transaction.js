
import { DataTypes } from "sequelize";
import { db } from "../config/database.js";

const Transaction = db.define(
  "Transaction",
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    account_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: false,
      validate: {
        min: 0.01,
      },
    },
    type: {
      type: DataTypes.ENUM("INCOME", "EXPENSE", "TRANSFER"),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    transaction_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM(
        "CONFIRMED",
        "PENDING",
        "CANCELLED"
      ),
      allowNull: false,
      defaultValue: "CONFIRMED",
    },
  },
  {
    tableName: "transactions",
  }
);

export default Transaction;
