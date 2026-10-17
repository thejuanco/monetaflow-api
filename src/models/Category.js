
import { DataTypes } from "sequelize";
import { db } from "../config/database.js";

const Category = db.define(
  "Category",
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
      type: DataTypes.ENUM("INCOME", "EXPENSE", "TRANSFER"),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("ACTIVE", "INACTIVE"),
      allowNull: false,
      defaultValue: "ACTIVE",
    },
  },
  {
    tableName: "categories",
  }
);

export default Category;
