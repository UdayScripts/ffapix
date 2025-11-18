const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const adminRoutes = require('./routes/admin');
const botRoutes = require('./routes/bot');
//const auth = require('./middlewares/auth');

const app = express();
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req,res)=> res.json({ok:true, message:'Free Fire Tournament API'}));

// public bot/webhook routes
app.use('/bot', botRoutes);

// admin routes (protected)
app.use('/api/admin', adminRoutes);

module.exports = app;
