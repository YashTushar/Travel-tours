import { data } from "react-router-dom";
import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();

    res
      .status(200)
      .json({ success: true, message: "Sucessfully Created", data: savedTour });
  } catch (err) {
    res
      .status(200)
      .json({ success: false, message: "Failed To Create Try again" });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the tour by ID and update it with the provided body
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    ); // `new: true` returns the updated document

    // If the tour is updated successfully, return the response
    res.status(200).json({
      success: true,
      message: "Successfully Updated",
      data: updatedTour,
    });
  } catch (err) {
    // Log the error to the console for debugging
    console.error("Error updating tour:", err);

    // Send a 500 status with a failure message
    res.status(500).json({
      success: false,
      message: "Failed to Update",
    });
  }
};

export const deleteTour = async (req, res) => {
  const id = req.params.id;

  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Tour successfully deleted",
    });
  } catch (err) {
    console.error("Error deleting tour:", err);

    res.status(500).json({
      success: false,
      message: "Failed to delete tour",
    });
  }
};

// Get single tour
export const getSingleTour = async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters

  try {
    const tour = await Tour.findById(id); // Find the tour by ID

    if (!tour) {
      return res.status(404).json({
        success: false,
        message: "Tour not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Tour successfully retrieved",
      data: tour,
    });
  } catch (err) {
    console.error("Error retrieving tour:", err);

    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the tour",
    });
  }
};

//getAll tour
// Get all tours
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "All tours retrieved successfully",
      data: tours,
    });
  } catch (err) {
    console.error("Error retrieving tours:", err);

    res.status(404).json({
      success: false,
      message: "An error occurred while retrieving the tours",
    });
  }
};

export const getTourBySearch = async (req, res) => {
  const { city, distance, maxGroupSize } = req.query;

  // Validate query parameters
  if (!city || !distance || !maxGroupSize) {
    return res.status(400).json({
      success: false,
      message: "City, distance, and maxGroupSize are required parameters.",
    });
  }

  // Create a RegExp for city search, with case-insensitivity
  const cityRegex = new RegExp(city, "i");

  // Parse distance and maxGroupSize to integers
  const parsedDistance = parseInt(distance, 10);
  const parsedMaxGroupSize = parseInt(maxGroupSize, 10);

  if (isNaN(parsedDistance) || isNaN(parsedMaxGroupSize)) {
    return res.status(400).json({
      success: false,
      message: "Distance and maxGroupSize must be valid numbers.",
    });
  }

  try {
    const tours = await Tour.find({
      city: cityRegex,
      distance: { $gte: parsedDistance },
      maxGroupSize: { $gte: parsedMaxGroupSize },
    });

    res.status(200).json({
      success: true,
      message: "All tours retrieved successfully",
      data: tours,
    });
  } catch (err) {
    console.error("Error retrieving tours:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the tours",
    });
  }
};

//getAll tour
// Get featured tours
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).limit(8);

    res.status(200).json({
      success: true,

      message: "All tours retrieved successfully",
      data: tours,
    });
  } catch (err) {
    console.error("Error retrieving tours:", err);

    res.status(404).json({
      success: false,
      message: "An error occurred while retrieving the tours",
    });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ sucess: true, data: tourCount });
  } catch (error) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
