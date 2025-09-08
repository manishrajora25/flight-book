
// import mongoose from "mongoose";

// const formSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     phone: { type: String, required: true },
//     from: { type: String, required: true },
//     to: { type: String, required: true },
//     date: { type: String, required: true },
//   },
//   { timestamps: true }
// );  

// const Form = mongoose.model("Form", formSchema);

// export default Form;





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







// // models/formModel.js
// import mongoose from "mongoose";

// const formSchema = new mongoose.Schema(
//   {
//     user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // NEW: who booked
//     name: { type: String },
//     email: { type: String },
//     phone: { type: String },
//     from: { type: String, required: true },
//     to: { type: String, required: true },
//     departureDate: { type: String, required: true },
//     returnDate: { type: String },
//     passengers: { type: Number, required: true },
//     travelClass: {
//       type: String,
//       enum: ["ECONOMY", "PREMIUM_ECONOMY", "BUSINESS", "FIRST"],
//       default: "ECONOMY",
//     },
//   },
//   { timestamps: true }
// );

// const Form = mongoose.model("Form", formSchema);
// export default Form;
