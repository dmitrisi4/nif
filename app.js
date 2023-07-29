const express = require('express');
const app = express();
const passport = require('passport');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const contactsRoutes = require('./routes/contacts');
const db = require('./models/index');
const {keys} = require('./env');

var corsOptions = {
  origin: keys.cors
};

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(require('morgan')('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require('cors')(corsOptions));

app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/contacts', contactsRoutes);

db.sequelize.sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  })

module.exports = app;