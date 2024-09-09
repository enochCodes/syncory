import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import EventController from '../controllers/eventController.js';
import upload from "../middlewares/upload.js";

const router = express.Router();
const eventController = new EventController();

// GET /events - Get all events
router.get('/events', EventController.getAllEvents);

// GET /events/:id - Get event by ID
router.get('/events/:id', EventController.getEventById);

// POST /events - Create a new event by an attendee
router.post(
    '/events',
    upload.single('thumbnail'),
    authMiddleware,
    eventController.createEvent
);

router.put('/events/:id', authMiddleware, EventController.updateEvent)

router.delete('/events/:id', authMiddleware, EventController.deleteEvent)

router.post('/events/:id/attend', authMiddleware, EventController.addAttendee);
export default router;
