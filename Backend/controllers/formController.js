import Form from "../models/formModel.js";
import User from "../models/User.js"; 



export const addForm = async (req, res) => {
  try {
    const {
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      travelClass,
    } = req.body;

    // Ab yaha req.user available hai ✅
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ message: "Unauthorized" });

    const newForm = new Form({
      user: user._id,
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      travelClass,
    });

    await newForm.save();

    res.status(201).json({
      success: true,
      message: "✈️ Flight booked successfully",
      data: newForm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Failed to save booking",
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
