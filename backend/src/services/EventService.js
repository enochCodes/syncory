import Event from "../models/event.js";
import User from "../models/user.js";

class EventService {
  static async getAllEvents() {
    return Event.findAll();
  }

  static async getEventById(id) {
    return Event.findByPk(id);
  }

  static async createEvent({
    title,
    description,
    date,
    location,
    capacity,
    categoryId,
    organizerId,
    creatorId,
  }) {
    const creator = await User.findByPk(creatorId);
    if (!creator) {
      throw new Error("Invalid creator ID");
    }

    if (creator.role === "organizer") {
      organizerId = creator.id;
    } else {
      if (organizerId) {
        const organizer = await User.findOne({
          where: { id: organizerId, role: "organizer" },
        });
        if (!organizer) {
          throw new Error("Invalid organizer ID");
        }
      } else {
        throw new Error("Invalid organizer ID");
      }
    }

    return Event.create({
      title,
      description,
      date,
      location,
      capacity,
      categoryId,
      organizerId,
      attendeesIds: [creatorId],
    });
  }

  static async updateEvent({
    id,
    title,
    description,
    date,
    location,
    capacity,
    categoryId,
  }) {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error("Event not found");
    }
    return event.update({
      title,
      description,
      date,
      location,
      capacity,
      categoryId,
    });
  }

  static async deleteEvent({
    id
  }) {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error("Event not found");
    }
    return event.destroy();
  }
}

export default EventService;
