const { Model, DataTypes, Sequelize } = require('sequelize');

const INTERNAL_CONTROL_TABLE = 'internal_control';

const InternaControlSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  date: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  file: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class InternalControl extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: INTERNAL_CONTROL_TABLE,
      modelName: 'InternalControl',
      timestamps: false,
    };
  }
}

module.exports = {
  INTERNAL_CONTROL_TABLE,
  InternaControlSchema,
  InternalControl,
};
