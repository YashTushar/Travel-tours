import { data } from "react-router-dom";
import User from "../models/User.js";

//create new tour
export const createUser = async (req, res) => {
  const newTour = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res
      .status(200)
      .json({ success: true, message: "Sucessfully Created", data: savedUser });
  } catch (err) {
    res
      .status(200)
      .json({ success: false, message: "Failed To Create Try again" });
  }
};

//update user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the tour by ID and update it with the provided body
    const updatedUser = await User.findByIdAndUpdate(
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
      data: updatedUser,
    });
  } catch (err) {
    // Log the error to the console for debugging
    console.error("Error updating User:", err);

    // Send a 500 status with a failure message
    res.status(500).json({
      success: false,
      message: "Failed to Update",
    });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User successfully deleted",
    });
  } catch (err) {
    console.error("Error deleting tour:", err);

    res.status(500).json({
      success: false,
      message: "Failed to delete tour",
    });
  }
};

// Get single User
export const getSingleUser = async (req, res) => {
  const { id } = req.params; // Extract the ID from the request parameters

  try {
    const user = await User.findById(id); // Find the User by ID

    if (!User) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User successfully retrieved",
      data: User,
    });
  } catch (err) {
    console.error("Error retrieving User:", err);

    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving the User",
    });
  }
};

//getAll tour
// Get all tours
export const getAllUser = async (req, res) => {
  //for pagination

  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,
      message: "All tours retrieved successfully",
      data: users,
    });
  } catch (err) {
    console.error("Error retrieving Users:", err);

    res.status(404).json({
      success: false,
      message: "An error occurred while retrieving the Users",
    });
  }
};
