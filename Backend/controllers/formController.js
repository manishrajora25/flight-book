import Form from "../models/formModel.js";
import User from "../models/User.js"; 



export const addForm = async (req, res) => {
  try {
    const {
      name,
      phone,
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      travelClass,
    } = req.body;

    const form = await Form.create({
      user: req.user._id,          // logged-in user
      name,
      email: req.user.email,       // ✅ FIX HERE
      phone,
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      travelClass,
    });

    res.status(201).json({
      success: true,
      message: "Booking saved successfully",
      form,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to save booking",
      error: error.message,
    });
  }
};



export const getForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json({
      success: true,
      message: "✅ Flight bookings fetched successfully",
      data: forms,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Failed to fetch bookings",
      error: error.message,
    });
  }
};
