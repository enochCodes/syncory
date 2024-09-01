import EventService from "../services/EventService.js";
import EventAttendees from "../models/EventAttendees.js";

/**
 * Adds a user as an attendee to an event.
 * @param {number} userId - The ID of the user.
 * @param {number} eventId - The ID of the event.
 * @returns {Promise<Object>} - The created event attendee entry.
 */
class EventController {
  static async getAllEvents(__, res) {
    try {
      const events = await EventService.getAllEvents();
      return res.status(200).json(events);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching events", error });
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
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while fetching the event", error });
    }
  }

  static async createEvent(req, res) {
    const {
      title,
      description,
      date,
      location,
      capacity,
      categoryId,
      organizerId,
    } = req.body;

    try {
      const event = await EventService.createEvent({
        title,
        description,
        date,
        location,
        capacity,
        categoryId,
        organizerId,
        creatorId: req.user.id, // The ID of the creator the event
      });

      return res
        .status(201)
        .json({ message: "Event created successfully", event });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while creating the event", error });
    }
  }

  static async updateEvent(req, res) {
    const { title, description, date, location, capacity, categoryId } = req.body;

    try {
      const eventId = req.params.id; // Extract the event ID from the request parameters
      const event = await EventService.updateEvent({
        id: eventId,
        title,
        description,
        date,
        location,
        capacity,
        categoryId,
      });

      return res
        .status(200)
        .json({ message: "Event updated successfully", event });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ message: "An error occurred while updating the event", error });
    }
  }

  static async deleteEvent(req, res) {
    try {
      const eventId = req.params.id; // Extract the event ID from the request parameters
      await EventService.deleteEvent({id: eventId});
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
      return res
        .status(500)
        .json({ message: "An error occurred while adding the attendee", error });
    }
  }
}

export default EventController;
