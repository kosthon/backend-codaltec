const { Model, DataTypes, Sequelize } = require('sequelize');

const SLIDERS_TABLE = 'sliders';

const SliderSchema = {
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

class Slider extends Model {
  static associate(models) {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: SLIDERS_TABLE,
      modelName: 'Slider',
      timestamps: false,
    };
  }
}

module.exports = { SLIDERS_TABLE, SliderSchema, Slider };
