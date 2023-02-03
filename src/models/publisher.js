'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Book, {
        foreignKey: 'id_publisher',
      });
    }
  }
  Publisher.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      code: {
        allowNull: false,
        type: DataTypes.CHAR(4),
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      address: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
      phoneNumber: {
        allowNull: false,
        field: 'phone_number',
        type: DataTypes.STRING(15),
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
      modelName: 'Publisher',
      tableName: 'publisher',
    }
  );

  return Publisher;
};
