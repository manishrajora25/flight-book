


import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    name: { type: String },  // optional if search me nahi hoga
    email: { type: String },
    phone: { type: String },
    from: { type: String, required: true },
    to: { type: String, required: true },
    departureDate: { type: String, required: true },
    returnDate: { type: String },
    passengers: { type: Number, required: true },
    travelClass: {
      type: String,
      enum: ["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"],
      default: "ECONOMY",
    },
  },
  { timestamps: true }
);

const Form = mongoose.model("Form", formSchema);

export default Form;





