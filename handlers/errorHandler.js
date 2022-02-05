const errorHandler = (err, _req, res, _next) => {
  let { code } = err;
  console.log(`ERRO CABULOSO
  `, err.details);
  if (err.message === 'invalid token' || err.message.includes('jwt')) {
 return res.status(401)
    .json({ message: 'Expired or invalid token' }); 
}
  if (!code) code = 500;
  res.status(code)
    .json({ message: err.message });
};

module.exports = errorHandler;