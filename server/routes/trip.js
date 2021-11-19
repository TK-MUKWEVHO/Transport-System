import express from 'express';
import {getTrip,reserveTrip,confirmTrip} from '../controllers/trip.js';

const router=express.Router();

router.get('/fetchtrip',getTrip);
router.post('/reserve',reserveTrip);
router.patch('/confirm',confirmTrip);

export default router;