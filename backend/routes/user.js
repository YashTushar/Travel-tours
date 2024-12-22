import express from "express";
import {
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyUser } from "../utils/verifyToken.js";

//update new user
router.put("/:id", updateUser);

//deleteuser
router.delete("/:id", deleteUser);

//getsingle new user
router.get("/:id", verifyUser, getSingleUser);

//getAll new user
router.get("/", getAllUser);

export default router;
