const { Model, DataTypes, Sequelize } = require('sequelize');

const NEWS_TABLE = 'news';

const NewSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  esTitle: {
    allowNull: false,
    field: 'es_title',
    type: DataTypes.STRING,
  },
  enTitle: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'en_title',
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
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class New extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: NEWS_TABLE,
      modelName: 'New',
      timestamps: false,
    };
  }
}

module.exports = { NEWS_TABLE, NewSchema, New };
