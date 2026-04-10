import { Sequelize, DataTypes, INTEGER } from "sequelize";
import { db } from "../database/configDB";

const Budgets = db.define(
    'Budgets',
    {
        idTransaction : {
            DataTypes: INTEGER,
            primaryKey: true
        }
    }
)