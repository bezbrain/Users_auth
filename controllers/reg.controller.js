const { StatusCodes } = require("http-status-codes");
const RegCollection = require("../models/Register");

const handleRegister = async (req, res) => {
  console.log(req.body);
  const user = await RegCollection.create(req.body);
  res.send("Registration is successful");
};

module.exports = { handleRegister };
