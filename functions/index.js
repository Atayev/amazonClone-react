const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { request, response } = require("express");

const stripe = require("stripe")("sk_test_51LaomoBX9LWjlI5RA3AhbVIjtfQYjIeqWQHFH5YcmAUlZbE7C8PnxsoB9UrZmrXxiZabttn7eSl9MPqZysUZ5Ml400GaohjGld")


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/finish', (request, response) => response.status(200).send('helloworld'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('payment request recieved', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:'usd',
    })
    response.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})

exports.api=functions.https.onRequest(app)

