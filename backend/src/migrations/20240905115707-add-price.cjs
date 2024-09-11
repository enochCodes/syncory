"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("events", "price", {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    });

    await queryInterface.addColumn("events", "isFree", {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("events", "price");
    await queryInterface.removeColumn("events", "isFree");
  },
};
