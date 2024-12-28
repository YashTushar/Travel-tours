import express from "express";
import {
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
} from "../Controllers/userController.js";

const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

router.put("/:id", verifyUser, updateUser);

router.delete("/:id", verifyUser, deleteUser);

router.get("/:id", verifyUser, getSingleUser);

router.get("/", verifyAdmin, getAllUsers);

export default router;