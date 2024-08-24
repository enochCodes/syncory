import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js";
import categories from "./categories.js";
import EventAttendees from "./EventAttendees.js";

const Event = sequelize.define(
    "Event",
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
        },
        attendeesIds: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: true,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            references: {
                model: categories,
                key: 'id',
            },
            allowNull: false,
        },
    },
    {
        timestamps: true,
    }
);

Event.belongsTo(User, { as: 'organizer', foreignKey: 'organizerId' });
Event.belongsToMany(User, { as: 'attendees', through: EventAttendees, foreignKey: 'eventId' });

export default Event;
