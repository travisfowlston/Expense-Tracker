const User = require('./User');
const Expenses = require('./Expenses');

// User Model Associations
User.hasMany(Expenses, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Expenses Model Associations
Expenses.belongsTo(User, {
  foreignKey: 'user_id',
});



module.exports = { User, Expenses};
