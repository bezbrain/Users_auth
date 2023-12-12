const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
  },
  password: {
    type: String,
    minlength: [6, "Password must be at least 6 characters long"],
    required: [true, "Password cannot be empty"],
  },
});

module.exports = mongoose.model("Register", RegisterSchema);
