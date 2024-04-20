import express from "express";
import {
    updateDoctor,
    deleteDoctor,
    getSingleDoctor,
    getAllDoctor,
    getDoctorProfile
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

router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

export default router;
