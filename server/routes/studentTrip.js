import express from 'express';
import { getTrip, reserveTrip } from '../controllers/studentTrip.js';
const router= express.Router();

router.get('/',getTrip);
router.post('/reserve', reserveTrip);

export default router;