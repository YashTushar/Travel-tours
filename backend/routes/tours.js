import express from "express";
import {
  createTour,
  deleteTour,
  updateTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "./../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post("/", verifyAdmin, createTour);

//update new tour
router.put("/:id", verifyAdmin, updateTour);

//delete tour
router.delete("/:id", verifyAdmin, deleteTour);

//getsingle new tour
router.get("/:id", verifyAdmin, getSingleTour);

//getAll new tour
router.get("/", getAllTour);

//gettour by search
router.get("/search/getTourBySearch", getTourBySearch);

router.get("/search/getFeaturedTours", getFeaturedTour);

router.get("/search/getTourCount", getTourCount);

export default router;
