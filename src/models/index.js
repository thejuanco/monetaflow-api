import User from "./User.js";
import Account from "./Account.js";
import Category from "./Category.js";
import Transaction from "./Transaction.js";
import Budget from "./Budget.js";
import ScheduledTransaction from "./ScheduledTransaction.js";

// Un usuario tiene muchas cuentas.
User.hasMany(Account, {
  foreignKey: "user_id",
  as: "accounts",
});
Account.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Un usuario tiene muchas categorías.
User.hasMany(Category, {
  foreignKey: "user_id",
  as: "categories",
});
Category.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Un usuario tiene muchas transacciones.
User.hasMany(Transaction, {
  foreignKey: "user_id",
  as: "transactions",
});
Transaction.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Una cuenta tiene muchas transacciones.
Account.hasMany(Transaction, {
  foreignKey: "account_id",
  as: "transactions",
});
Transaction.belongsTo(Account, {
  foreignKey: "account_id",
  as: "account",
});

// Una categoría puede clasificar muchas transacciones.
Category.hasMany(Transaction, {
  foreignKey: "category_id",
  as: "transactions",
});
Transaction.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

// Un usuario puede crear muchos presupuestos.
User.hasMany(Budget, {
  foreignKey: "user_id",
  as: "budgets",
});
Budget.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Una categoría puede tener varios presupuestos.
Category.hasMany(Budget, {
  foreignKey: "category_id",
  as: "budgets",
});
Budget.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

// Un usuario tiene muchas transacciones programadas.
User.hasMany(ScheduledTransaction, {
  foreignKey: "user_id",
  as: "scheduledTransactions",
});
ScheduledTransaction.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

// Una cuenta puede tener muchos movimientos programados.
Account.hasMany(ScheduledTransaction, {
  foreignKey: "account_id",
  as: "scheduledTransactions",
});
ScheduledTransaction.belongsTo(Account, {
  foreignKey: "account_id",
  as: "account",
});

// Una categoría puede clasificar movimientos programados.
Category.hasMany(ScheduledTransaction, {
  foreignKey: "category_id",
  as: "scheduledTransactions",
});
ScheduledTransaction.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

export {
  User,
  Account,
  Category,
  Transaction,
  Budget,
  ScheduledTransaction,
};
