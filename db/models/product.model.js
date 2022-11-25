const { Model, DataTypes, Sequelize } = require('sequelize');
const { BUSINESS_TABLE } = require('./business.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
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
  image: {  
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
  businessId: {
    field: 'business_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: BUSINESS_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Business, {
      as: 'business',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
