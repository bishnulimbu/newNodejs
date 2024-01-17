module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("item", {
    name: {
      type: Sequelize.STRING,
    },
    desc: {
      type: Sequelize.STRING,
    },
  });

  return Item;
};
