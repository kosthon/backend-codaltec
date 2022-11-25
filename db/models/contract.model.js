const { Model, DataTypes, Sequelize } = require('sequelize');

const CONTRACT_TABLE = 'contract';

const ContractSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  processNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'process_number',
  },
  processType: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'process_type',
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  purpose: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  amount: {
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

class Contract extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTRACT_TABLE,
      modelName: 'Contract',
      timestamps: false,
    };
  }
}

module.exports = { CONTRACT_TABLE, ContractSchema, Contract };
