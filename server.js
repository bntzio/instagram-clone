const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { title: 'Instagram Clone' });
});

app.get('/signup', (req, res) => {
  res.render('index', { title: 'Instagram Clone - Signup' });
});

app.get('/signin', (req, res) => {
  res.render('index', { title: 'Instagram Clone - Signin' });
});

app.listen(3000, (err) => {
  if (err) {
    return console.log('Hubo un error') && process.exit(1);
  }

  return console.log('Escuchando en el puerto 3000');
});
