import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createSession,
  getUserSessions,
  getSession,
  updateSession,
  deleteSession
} from '../controllers/schedule.js';

const router = express.Router();

router.use(protect); // Protect all schedule routes

router.route('/')
  .post(createSession)
  .get(getUserSessions);

router.route('/:id')
  .get(getSession)
  .put(updateSession)
  .delete(deleteSession);

export { router as default };
