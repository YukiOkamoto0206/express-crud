const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('login', (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
