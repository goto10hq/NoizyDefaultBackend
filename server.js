const express = require('express');
const app = express();
const config = {
  title: (!process.env.title ? '404' : process.env.title),
  message: (!process.env.message ? '404' : process.env.message) 
};

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(404).render('pages/index', config);
});

app.get('/healthz', (req, res) => {
  res.send('Healthy!').end();
});

app.listen(8080, () => console.log('App listening on port 8080'));
