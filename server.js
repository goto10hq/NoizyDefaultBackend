const express = require('express');
const app = express();
const machine = process.env['COMPUTERNAME'];
const config = {  
  title: (!machine ? '404' : '404 :: ' + machine),
  message: '404',
  message2: machine
};

app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(404).render('pages/index', config);
});

app.get('/healthz', (req, res) => {
  res.send('Healthy!').end();
});

app.listen(8080, () => console.log('Noizy listening on port 8080'));
