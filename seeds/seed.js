const sequelize = require('../config/connection');
const { User } = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  /**
   * DO SEEDS HERE
   */
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log(users);

  if (users) {
    console.log('Users were seeded');
  }

  process.exit(0);
};

seedDatabase();
