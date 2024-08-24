import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";
import Event from "./event.js";
import EventAttendees from "./EventAttendees.js";

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("attendee", "organizer", "admin"),
      allowNull: false,
      defaultValue: "attendee",
    },
    brandName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    timestamps: true,
  }
);

// Associations
User.hasMany(Event, { as: "organizedEvents", foreignKey: "organizerId" });
User.belongsToMany(Event, {
  through: EventAttendees,
  as: "attendedEvents",
  foreignKey: "userId",
});

export default User;
