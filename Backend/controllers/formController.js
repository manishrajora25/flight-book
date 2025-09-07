import Form from "../models/formModel.js";


export const addForm = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      from,
      to,
      departureDate,
      returnDate,
      passengers,
      travelClass,
    } = req.body;

    const newForm = new Form({
      name,
      email,
      phone,
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
      message: "✈️ Flight search saved successfully",
      data: newForm,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "❌ Failed to save search",
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
