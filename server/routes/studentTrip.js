import express from 'express';
import { getTrip, reserveTrip,getStudent } from '../controllers/studentTrip.js';
const router= express.Router();

router.get('/student',getStudent);
router.get('/',getTrip);
router.post('/reserve', reserveTrip);


export default router;