const express = require('express');

const errorHandler = require('./handlers/errorHandler');

const app = express();

const usersRoute = require('./routes/userRouter');

app.use('/', require('body-parser').json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', usersRoute);

app.use('/', errorHandler);

// app.use('/login');

// app.use('/category');

// app.use('/post');
