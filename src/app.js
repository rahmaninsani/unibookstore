require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');

const routes = require('./routes');

// Allow PUT and DELETE method on HTML Form
app.use(methodOverride('_method'));

// App Setup
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ejs Setup
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes Setup
app.use(routes);

module.exports = app;
