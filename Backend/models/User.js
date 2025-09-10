import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
   
  },

  password: {
    type: String,
  
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









