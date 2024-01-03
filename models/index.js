const User = require('./User');
const Expenses = require('./Expenses');
const Categories = require('./Categories');

User.hasMany(Expenses, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Expenses.belongsTo(User, {
  foreignKey: 'user_id',
});

Expenses.belongsTo(Categories, {
  foreignKey: 'category_id',
});

Categories.hasMany(Expenses, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

//q: what does the code above do?
//a: creates a one-to-many relationship between the user and expenses models
//q: what does onDelete: 'CASCADE' do?

module.exports = { User, Expenses, Categories };
