import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import EventController from '../controllers/eventController.js';
import upload from "../middlewares/upload.js";
import UploadController from '../controllers/uploadController.js';

const router = express.Router();

// GET /events - Get all events
router.get('/events', EventController.getAllEvents);

// GET /events/:id - Get event by ID
router.get('/events/:id', EventController.getEventById);

// POST /events - Create a new event by an attendee
router.post(
    '/events',
    authMiddleware,
    EventController.createEvent
);

router.post(
  '/upload',
  authMiddleware,
  upload.single('thumbnail'),
  UploadController.uploadThumbnail
);

// router.put('/events/:id', authMiddleware, EventController.updateEvent)

router.delete('/events/:id', authMiddleware, EventController.deleteEvent)

router.post('/events/:id/attend', authMiddleware, EventController.addAttendee);
export default router;
