import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const EventAttendees = sequelize.define(
  "EventAttendees",
  {
    eventId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Events",
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    timestamps: false, // If you don't need createdAt/updatedAt timestamps
  }
);

export default EventAttendees;
