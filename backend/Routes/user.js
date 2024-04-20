// Final User issue resolved on authentication

import express from "express";
import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser
} from "../Controllers/userController.js";
// import { authenticate, restrict } from "../auth/verifyToken.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();


// Prev no auth and restriction here 
// router.get('/:id', getSingleUser);
// router.get('/', getAllUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);


// We will use below restricts only after AUTH creation
router.get('/:id', authenticate, restrict(['patient']), getSingleUser);
router.get('/', authenticate, restrict(['admin']),getAllUser);
router.put('/:id', authenticate, restrict(['patient']), updateUser);
router.delete('/:id', authenticate, restrict(['patient']), deleteUser);

export default router;
