const { Model, DataTypes, Sequelize } = require('sequelize');

const FINANCIAL_TABLE = 'financial';

const FinancialSchema = {
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

class Financial extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: FINANCIAL_TABLE,
      modelName: 'Financial',
      timestamps: false,
    };
  }
}

module.exports = { FINANCIAL_TABLE, FinancialSchema, Financial };
