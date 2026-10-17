
import { DataTypes } from "sequelize";
import { db } from "../config/database.js";

const Budget = db.define(
  "Budget",
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
    category_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: false,
      validate: {
        min: 0.01,
      },
    },
    period: {
      type: DataTypes.ENUM("WEEKLY", "MONTHLY"),
      allowNull: false,
      defaultValue: "MONTHLY",
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    tableName: "budgets",
  }
);

export default Budget;
