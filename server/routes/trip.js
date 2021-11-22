import express from 'express';
import {getTrip,reserveTrip,confirmTrip} from '../controllers/trip.js';
import authentication from '../middleware/authentication.js';

const router= express.Router();

router.post('/reserve',reserveTrip);
router.get('/fetchtrip',getTrip);
router.patch('/confirm/:id',confirmTrip);

export default router;