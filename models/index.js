const User = require('./User');
const Expenses = require('./Expenses');
const Category = require('./Categories');

// User Model Associations
User.hasMany(Expenses, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Expenses Model Associations
Expenses.belongsTo(User, {
  foreignKey: 'user_id',
});

Expenses.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Categories Model Associations
Category.hasMany(Expenses, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Expenses, Category };
