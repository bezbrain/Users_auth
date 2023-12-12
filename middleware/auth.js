const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const authMiddleware = (req, res, next) => {
  console.log(req.headers);
};

module.exports = authMiddleware;
