
import { DataTypes } from "sequelize";
import { db } from "../config/database.js";

const ScheduledTransaction = db.define(
  "ScheduledTransaction",
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
      allowNull: false,
    },
    frequency: {
      type: DataTypes.ENUM("ONCE", "WEEKLY", "MONTHLY"),
      allowNull: false,
      defaultValue: "ONCE",
    },
    next_execution: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "PAUSED", "FINISHED"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    tableName: "scheduled_transactions",
  }
);

export default ScheduledTransaction;
