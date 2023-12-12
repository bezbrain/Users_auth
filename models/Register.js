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
    required: [true, "Password cannot be empty"],
    validate: {
      validator: (password) => {
        return password.length >= 6;
      },
      message: "Password must be at least 6 characters long",
    },
  },
});

module.exports = mongoose.model("Register", RegisterSchema);
