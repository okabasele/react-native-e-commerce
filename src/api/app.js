require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {Stripe} = require('stripe');

const stripe = new Stripe(process.env.SECRET_STRIPE_KEY);
const app = express();
app.use(express.json());
app.use(cors());

app.post('/api/v1/create-payment-intent', async (req, res) => {
  console.log(req.body);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount * 100,
    currency: 'eur',
  });
  // Pass the client secret to the client
  res.send({clientSecret: paymentIntent.client_secret});
});

app.listen(3000, console.log('API Serveur running'));
