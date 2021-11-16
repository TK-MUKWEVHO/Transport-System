import express from 'express';
import { getTrip, reserveTrip} from '../controllers/studentTrip.js';
import {getStudent,createStudent} from '../controllers/student.js';

const router= express.Router();

router.get('/student',getStudent);
router.get('/trip',getTrip);
router.post('/reserve', reserveTrip);
router.post('/createStudent',createStudent);


export default router;