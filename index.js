const express = require('express');

const errorHandler = require('./handlers/errorHandler');

const app = express();

const userRoute = require('./routes/userRouter');
const loginRoute = require('./routes/loginRouter');
const categorieRoute = require('./routes/categorieRouter');

app.use('/', require('body-parser').json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoute);

app.use('/login', loginRoute);

app.use('/categories', categorieRoute);

// app.use('/post');

app.use('/', errorHandler);