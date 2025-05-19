import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  getStudyHabits,
  getTopicMastery,
  getLearningOverview,
  getKnowledgeGaps
} from '../controllers/analytics.js';

const router = express.Router();

router.use(protect); // Protect all analytics routes

router.get('/study-habits', getStudyHabits);
router.get('/topic-mastery', getTopicMastery);
router.get('/learning-overview', getLearningOverview);
router.get('/knowledge-gaps', getKnowledgeGaps);

export { router as default };
