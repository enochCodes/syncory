"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Events", "price", {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    });

    await queryInterface.addColumn("Events", "isFree", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Events", "price");
    await queryInterface.removeColumn("Events", "isFree");
  },
};
