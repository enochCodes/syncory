import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const EventAttendees = sequelize.define("EventAttendees", {
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
});

export default EventAttendees;
