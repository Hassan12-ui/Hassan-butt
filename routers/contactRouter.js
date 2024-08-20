import express from 'express';
import contactForm, { getAllContacts } from '../controllers/contactController.js';

const router = express.Router();
router.route('/contact').post(contactForm);
router.route('/allcontact').get(getAllContacts);

export default router;
