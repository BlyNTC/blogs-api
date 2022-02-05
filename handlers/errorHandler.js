const errorHandler = (err, _req, res, _next) => {
  console.log(`ERRO CABULOSO
  `, err);
  res.status(err.code)
    .json({ message: err.message });
};

module.exports = errorHandler;