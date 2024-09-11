import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js";

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organizerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0,
    },
    isFree: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  {
    sequelize,
    modelName: "Event",
    timestamps: true,
  }
);

export default Event;
