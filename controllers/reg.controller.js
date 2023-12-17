const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const RegCollection = require("../models/Register");
const BadRequestError = require("../errors/bad-request");

const handleRegister = async (req, res) => {
  const { username, email } = req.body;
  const existingUsername = await RegCollection.findOne({
    username,
  });
  // Check if username already exists in the db
  if (existingUsername) {
    throw new BadRequestError("Username already existed");
  }

  // Check if email already exists in the db
  const existingEmail = await RegCollection.findOne({
    email,
  });
  if (existingEmail) {
    throw new BadRequestError("Email already existed");
  }
  // console.log(existingUsername);
  const user = await RegCollection.create(req.body);

  const { _id } = user;

  // Sign/encode token
  const token = jwt.sign({ _id, username, email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    message: "User successfully created",
    token,
  });
};

module.exports = { handleRegister };
