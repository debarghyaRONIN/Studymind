import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  createDocument,
  getUserDocuments,
  getDocument,
  updateDocument,
  deleteDocument
} from '../controllers/documents.js';

const router = express.Router();

router.use(protect); // Protect all document routes

router.route('/')
  .post(createDocument)
  .get(getUserDocuments);

router.route('/:id')
  .get(getDocument)
  .put(updateDocument)
  .delete(deleteDocument);

export { router as default };
