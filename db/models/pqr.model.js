const { Model, DataTypes, Sequelize } = require('sequelize');

const PQR_TABLE = 'pqr';

const PqrSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  state: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  answer: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  typePerson: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'type_person',
  },
  name: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  apellidos: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  typeDocument: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'type_document',
  },
  document: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  subject: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  file: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Pqr extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: PQR_TABLE,
      modelName: 'Pqr',
      timestamps: false,
    };
  }
}

module.exports = { PQR_TABLE, PqrSchema, Pqr };
