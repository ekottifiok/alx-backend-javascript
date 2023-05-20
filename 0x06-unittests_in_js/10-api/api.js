const express = require('express');
const app = express();
app.use(express.json());

app.listen(7865, 'localhost', () => console.log('API available on localhost port 7865'));

app.get('/', (_, res) => res.send('Welcome to the payment system'));
app.get('/cart/:id(\\d+)', (req, res) => res.send(`Payment methods for cart ${parseInt(req.params.id)}`));
app.get('/available_payments', (_, res) => res.send({ payment_methods: { credit_cards: true, paypal: false } }));
app.post('/login', (req, res) => res.send(`Welcome ${req.body ? req.body.userName : ''}`));
