import User from "../models/User.js";

// Create new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to create, try again" });
  }
};

// Update user
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// Get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Found user",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      success: true,

      message: "Successful",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// Get users by search
export const getUserBySearch = async (req, res) => {
  const name = new RegExp(req.query.name, "i"); // Case-insensitive search
  const email = new RegExp(req.query.email, "i");

  try {
    const users = await User.find({
      name,
      email,
    });

    res.status(200).json({
      success: true,
      message: "Successful",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// Get featured users (e.g., users with a specific role)
export const getFeaturedUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "featured" }).limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: users,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// Get user count
export const getUserCount = async (req, res) => {
  try {
    const userCount = await User.estimatedDocumentCount();

    res.status(200).json({ success: true, data: userCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch" });
  }
};
