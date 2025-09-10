import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    required: true,
    // unique: true,
  },

  password: {
    type: String,
    // required: true,
    minlength: 6,
  },


  image: {
    type: String, 
  default: ""
  },



role:{ type: String, default: "User", enum: ["User", "admin"]},


}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);
export default User;











// import mongoose from "mongoose";

// // Traveller details schema (subdocument)
// const travellerSchema = new mongoose.Schema({
//   fname: { type: String, required: true },
//   lname: { type: String, required: true },
//   age: { type: Number, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true },
// });

// // Booking details schema (subdocument)
// const bookingSchema = new mongoose.Schema({
//   from: { type: String, required: true },
//   to: { type: String, required: true },
//   date: { type: Date, required: true },
//   returndate: { type: Date }, // optional
//   passengers: { type: Number, required: true },
//   ticketClass: { type: String, enum: ["Economy", "Business", "First"], default: "Economy" },
//   travellers: [travellerSchema], // travellers list
// });

// // Main User schema
// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },

//   bookings: [bookingSchema], // ek user ke multiple bookings ho sakti hain
// });

// const User = mongoose.model("User", userSchema);

// export default User;










// // models/User.js (add bookings)
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String,  },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true, minlength: 6 },
//   image: { type: String, default: "" },
//   role: { type: String, default: "User", enum: ["User", "admin"] },
//   bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Form" }], // NEW
// }, {
//   timestamps: true,
// });

// const User = mongoose.model("User", userSchema);
// export default User;
