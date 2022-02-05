// inspirado na aula do Roz tribo 14-C

const validateWithJoi = (schema, object) => {
  const { error } = schema.validate(object);
  if (error) {
    console.log(`ERRO JOI
    `, error);
  const { details: [{ message }] } = error;
    error.code = 400;
    error.message = message;
    throw error;
  }
};

const throwError = (code, message) => {
  const error = new Error();
  error.message = message;
  error.code = code;
  console.log('ERRO NO ERRORS', error);
  throw error;
};

module.exports = {
  validateWithJoi,
  throwError,
};