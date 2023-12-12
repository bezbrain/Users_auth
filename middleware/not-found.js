const { StatusCodes } = require("http-status-codes");

const notFoundMiddleware = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({
    success: true,
    message: "This route does not exist",
  });
};

module.exports = notFoundMiddleware;
