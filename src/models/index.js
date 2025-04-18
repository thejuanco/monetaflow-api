//Aqui se hacen las relaciones de los modelos
import User from "./Users.js";
import Transactions from "./Transactions.js";
import Categories from "./Categories.js";
import Financial_Budget from "./Financial_Budget.js";

User.hasMany(Categories, {foreignKey: 'userId'});
Categories.belongsTo(User, {foreignKey: 'userId'})

User.hasMany(Financial_Budget, {foreignKey: 'userId'})
Financial_Budget.belongsTo(User, {foreignKey: 'userId'})

Categories.hasMany(Financial_Budget, {foreignKey: 'categoryId'})
Financial_Budget.belongsTo(Categories, {foreignKey: 'categoryId'})

User.hasMany(Financial_Budget, {foreignKey: 'userId'})
Transactions.belongsTo(User, {foreignKey: 'userId'})

Categories.hasMany(Financial_Budget, {foreignKey: 'categoryId'})
Transactions.belongsTo(Categories, {foreignKey: 'categoryId'})

export {
    User,
    Transactions,
    Categories,
    Financial_Budget
}