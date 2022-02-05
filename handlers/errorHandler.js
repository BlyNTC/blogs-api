const errorHandler = (err, _req, res, _next) => {
  console.log(`ERRO CABULOSO
  `, err);
  if (err.message === 'invalid token' || err.message.includes('jwt')) {
 return res.status(401)
    .json({ message: 'Expired or invalid token' }); 
}
  res.status(err.code)
    .json({ message: err.message });
};

module.exports = errorHandler;