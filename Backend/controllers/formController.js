import Form from "../models/formModel.js";


export const addForm = async (req, res) => {
  try {
    const { name, email, phone, from, to, date } = req.body;

    const newForm = new Form({ name, email, phone, from, to, date });
    await newForm.save();

    res.status(201).json({
      success: true,
      message: "✈️ Flight booking saved successfully",
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
