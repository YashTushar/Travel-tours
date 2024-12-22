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

const router = express.Router();

//create new tour
router.post("/", createTour);

//update new tour
router.put("/:id", updateTour);

//delete tour
router.delete("/:id", deleteTour);

//getsingle new tour
router.get("/:id", getSingleTour);

//getAll new tour
router.get("/", getAllTour);

//gettour by search
router.get("/search/getTourBySearch", getTourBySearch);

router.get("/search/getFeaturedTours", getFeaturedTour);

router.get("/search/getTourCount", getTourCount);

export default router;
