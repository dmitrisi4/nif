const express = require('express');
const app = express();
const passport = require('passport');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const contactsRoutes = require('./routes/contacts');
const db = require('./models/index');
const {keys} = require('./env');
const morganMiddleware = require("./middleware/morgan.middleware");
const logger = require('./utils/loggerService');


const whitelist = [keys.cors, keys.cors2]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(passport.initialize());
require('./middleware/passport')(passport);

//app.use(require('morgan')('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(require('cors')(corsOptions));

// Add the morgan middleware
app.use(morganMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/contacts', contactsRoutes);

db.sequelize.sync()
  .then(() => {
    logger.info('Synced db');
  })
  .catch((err) => {
    logger.error(`Failed to sync db: ${err.message}`);
  })

module.exports = app;