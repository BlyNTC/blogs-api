const statusCode = require('http-status-codes');

const errorHandler = (err, _req, res, _next) => {
  res.status(statusCode.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};

module.exports = errorHandler;