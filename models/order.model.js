module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define('orders', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false
    },
    social_network: {
      type: Sequelize.STRING,
      allowNull: true 
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false
    },
    plan: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Orders;
}