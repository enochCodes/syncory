import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const categories = sequelize.define(
  "categories",
  {
	id: {
	  type: DataTypes.INTEGER,
	  autoIncrement: true,
	  primaryKey: true,
	},
	name: {
	  type: DataTypes.STRING,
	  allowNull: false,
	},
	description: {
	  type: DataTypes.TEXT,
	  allowNull: true,
	},
  },
  {
	timestamps: true,
  }
);

export default categories;