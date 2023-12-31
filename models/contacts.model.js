module.exports = (sequelize, Sequelize) => {
  const Contacts = sequelize.define('contacts', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    comment: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  return Contacts;
}