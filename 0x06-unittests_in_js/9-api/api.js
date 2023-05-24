const express = require('express');
const app = express();

app.listen(7865, 'localhost', () => console.log('API available on localhost port 7865'));

app.get('/', (_, res) => res.send('Welcome to the payment system'));
app.get('/cart/:id(\\d+)', (req, res) => res.send(`Payment methods for cart ${parseInt(req.params.id)}`));

module.exports = app;
