const { StatusCodes } = require("http-status-codes");
const RegCollection = require("../models/Register");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  // console.log(req.body);
  const authHeader = req.headers.authorization;

  const { username, password } = req.body;
  const existingUser = await RegCollection.findOne({
    username,
    password,
  });

  const token = authHeader.split(" ")[1];

  // Check if user and password in the db are correct
  if (existingUser) {
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "You have been logged in successfully",
      token,
    });
  }
  res.status(StatusCodes.BAD_REQUEST).json({
    success: false,
    message: "Username and password do not match",
  });
};

module.exports = { handleLogin };
