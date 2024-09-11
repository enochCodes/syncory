import EventService from "../services/EventService.js";
import Event from "../models/event.js";
/**
 * Adds a user as an attendee to an event.
 * @param {number} userId - The ID of the user.
 * @param {number} eventId - The ID of the event.
 * @returns {Promise<Object>} - The created event attendee entry.
 */
class EventController {
  static async getAllEvents(__, res) {
    try {
      const events = await Event.findAll();
      return res.status(200).json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  }

  static async getEventById(req, res) {
    try {
      const eventId = req.params.id; // Extract the event ID from the request parameters
      const event = await EventService.getEventById(eventId);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      return res.status(200).json(event);
    } catch (error) {
      console.error("Error fetching event:", error);
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  }

  static async createEvent(req, res) {
    const {
      title,
      date,
      location,
      capacity,
      categoryId,
      description,
      price,
      organizerId,
      creatorId,
      thumbnail,
    } = req.body;

    try {
      const event = await Event.create({
        title,
        date,
        location,
        capacity,
        categoryId,
        description,
        price,
        thumbnail,
        organizerId,
        creatorId,
      });
      return res
        .status(201)
        .json({ message: "Event created successfully", event });
    } catch (error) {
      console.error("Error creating event:", error);
      return res
        .status(500)
        .json({ message: "Server error", error: error.message });
    }
  }

  static async deleteEvent(req, res) {
    try {
      const eventId = req.params.id; // Extract the event ID from the request parameters
      await EventService.deleteEvent({ id: eventId });
      return res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while deleting the event", error });
    }
  }

  static async addAttendee(req, res) {
    try {
      const { eventId } = req.params.id;
      const userId = req.user.id;
      const attendee = await EventService.addAttendee({ eventId, userId });
      return res.status(201).json(attendee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "An error occurred while adding the attendee",
        error,
      });
    }
  }
}

export default EventController;
