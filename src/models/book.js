'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Publisher, {
        foreignKey: 'id_publisher',
      });
    }
  }
  Book.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      code: {
        allowNull: false,
        type: DataTypes.CHAR(5),
        unique: true,
      },
      category: {
        allowNull: false,
        type: DataTypes.ENUM('Keilmuan', 'Bisnis', 'Novel'),
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      stock: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      idPublisher: {
        allowNull: false,
        field: 'id_publisher',
        references: {
          model: 'publisher',
          key: 'id',
        },
        type: DataTypes.INTEGER.UNSIGNED,
      },
      createdAt: {
        allowNull: false,
        field: 'created_at',
        type: 'TIMESTAMP',
      },
      updatedAt: {
        allowNull: false,
        field: 'updated_at',
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Book',
      tableName: 'book',
    }
  );

  return Book;
};
