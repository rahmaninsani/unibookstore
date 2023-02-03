'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('publisher', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED,
      },
      code: {
        allowNull: false,
        type: Sequelize.CHAR(4),
        unique: true,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      phoneNumber: {
        allowNull: false,
        field: 'phone_number',
        type: Sequelize.STRING(15),
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: 'TIMESTAMP',
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('publisher');
  },
};
