'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//Connecta ao banco
mongoose.connect('mongodb://EdsonSobrinho:120647R@ds018268.mlab.com:18268/ndstr')

//Carrega os Models
const Product = require('./models/product');

//Carrega as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));




app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;
