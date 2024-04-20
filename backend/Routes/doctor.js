// Final Doctor issue resolved on authentication

import express from "express";
import {
    updateDoctor,
    deleteDoctor,
    getSingleDoctor,
    getAllDoctor
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from './review.js';

const router = express.Router();

//nested routes
// Prev no auth and restriction here 
// router.get('/:id', getSingleDoctor);
// router.get('/', getAllDoctor);
// router.put('/:id', updateDoctor);
// router.delete('/:id', deleteDoctor);


// We will use below restricts only after AUTH creation
// router.use('/:doctorId/reviews', revierRouter);
router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

export default router;
