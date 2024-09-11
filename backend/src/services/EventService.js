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
    thumbnail,
    price,
  }) {
    try {
      // Validate required fields
      if (
        !title ||
        !description ||
        !date ||
        !location ||
        !capacity ||
        !categoryId ||
        !creatorId
      ) {
        throw new Error("Missing required fields");
      }

      // Find the creator
      const creator = await User.findByPk(creatorId);
      if (!creator) {
        throw new Error("Invalid creator ID");
      }

      // Determine the organizer
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
          throw new Error(
            "Organizer ID is required for non-organizer creators"
          );
        }
      }

      // Create the event
      const event = await Event.create({
        title,
        description,
        date,
        location,
        capacity,
        categoryId,
        organizerId,
        thumbnail: thumbnail || null,
        price: price || 0.0,
        attendeesIds: [creatorId],
      });

      return event;
    } catch (error) {
      console.error("Error creating event:", error);
      throw new Error(`Error creating event: ${error.message}`);
    }
  }

  static async updateEvent({
    id,
    title,
    description,
    date,
    location,
    capacity,
    categoryId,
    thumbnail,
    price,
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
      thumbnail,
      price,
    });
  }

  static async deleteEvent({ id }) {
    const event = await Event.findByPk(id);
    if (!event) {
      throw new Error("Event not found");
    }
    return event.destroy();
  }

  static async addAttendee({ eventId, userId }) {
    const event = await Event.findByPk(eventId);
    if (!event) {
      throw new Error("Event not found");
    }

    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }

    if (event.attendeesIds.includes(userId)) {
      throw new Error("User already attending the event");
    }

    event.attendeesIds.push(userId);
    return event.save();
  }
}

export default EventService;
