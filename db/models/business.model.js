const { Model, DataTypes, Sequelize } = require('sequelize');

const BUSINESS_TABLE = 'business';

const BusinessSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  esName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'es_name',
  },
  enName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'en_name',
  },
  esDescription: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: 'es_description',
  },
  enDescription: {
    allowNull: false,
    type: DataTypes.TEXT,
    field: 'en_description',
  },
  icon: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  youtube: {
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

class Business extends Model {
  static associate(models) {
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'businessId',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: BUSINESS_TABLE,
      modelName: 'Business',
      timestamps: false,
    };
  }
}

module.exports = { BUSINESS_TABLE, BusinessSchema, Business };
