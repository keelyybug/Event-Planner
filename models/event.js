const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
//! if messes up look at line23
class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    event_date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;