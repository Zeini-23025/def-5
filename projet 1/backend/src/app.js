
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { connectDB } = require('./config/database');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();


connectDB();


app.use(cors({ origin: process.env.CLIENT_URL || '*', credentials: true }));
app.use(express.json());
app.use(morgan('dev'));


app.use('/api', routes);


app.use(errorHandler);

module.exports = app;
