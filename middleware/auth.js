const jwt = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

const authMiddleware = (req, res, next) => {
  // console.log(req.headers);
  const authHeader = req.headers.authorization;

  // Verify if the token is available and in the right structure
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "No token provided",
    });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { _id, username, email } = decoded;
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: "Not authorized to access this route",
    });
  }

  next();
};

module.exports = authMiddleware;
