const { StatusCodes } = require("http-status-codes");

const errorHandlingMiddleware = (err, req, res, next) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err,
  });
};

module.exports = errorHandlingMiddleware;
