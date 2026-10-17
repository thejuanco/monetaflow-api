
import { DataTypes } from "sequelize";
import { db } from "../config/database.js";

const Account = db.define(
  "Account",
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(
        "CHECKING",
        "SAVINGS",
        "CREDIT",
        "INVESTMENT"
      ),
      allowNull: false,
    },
    bank_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    account_number: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    initial_balance: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: false,
      defaultValue: 0,
    },
    credit_limit: {
      type: DataTypes.DECIMAL(14, 2),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    tableName: "accounts",
  }
);

export default Account;
