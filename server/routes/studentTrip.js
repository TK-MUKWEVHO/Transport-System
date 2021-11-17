import express from 'express';
import { confirmTrip,getTrip, reserveTrip} from '../controllers/studentTrip.js';
import authentication from '../middleware/authentication.js';

const router= express.Router();

router.post('/',authentication, reserveTrip);
router.patch('/:id',authentication,confirmTrip);
router.get('/:id',authentication,getTrip);

export default router;