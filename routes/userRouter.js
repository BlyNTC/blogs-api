const Router = require('express').Router();
const rescue = require('express-rescue');

Router.post('/', rescue((req, res) => {
  if (req.body.error) {
    const error = new Error();
    error.message = 'ERROR Xablau';
    throw error;
  }
  res.status(200).json({
    message: 'XABLAU',
  });
}));

module.exports = Router;