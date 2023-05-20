const express = require('express');
const app = express();

app.listen(7865, 'localhost', () => console.log('API available on localhost port 7865'));

app.get('/', (req, res, next) => res.send('Welcome to the payment system'));
