import express from "express";
import {
    updateDoctor,
    deleteDoctor,
    getSingleDoctor,
    getAllDoctor
} from "../Controllers/doctorController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";
import revierRouter from './review.js';

const router = express.Router();

//nested routes

router.use('/:doctorId/reviews', revierRouter);
router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);

export default router;
