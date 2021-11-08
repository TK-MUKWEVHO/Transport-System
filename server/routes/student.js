import express from 'express';
import { getStudent,getTrip, reserveTrip } from '../controllers/student.js';
const router= express.Router();

router.get('/',getStudent);
router.get('/trip',getTrip);
router.post('/reserve', reserveTrip);

export default router;