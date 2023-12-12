const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password cannot be empty"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Login", LoginSchema);
