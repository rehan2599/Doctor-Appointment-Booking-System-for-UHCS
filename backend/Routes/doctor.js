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


// Prev no auth and restriction here 
// router.get('/:id', getSingleDoctor);
// router.get('/', getAllDoctor);
// router.put('/:id', updateDoctor);
// router.delete('/:id', deleteDoctor);


// We will use below restricts only after AUTH creation

// ++ nested routes
router.use('/:doctorId/reviews', reviewRouter);

router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

export default router;
