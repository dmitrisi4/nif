const express = require('express');
const app = express();
const passport = require('passport');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');
const contactsRoutes = require('./routes/contacts');
const db = require('./models/index');

var corsOptions = {
  origin: "http://localhost:1234"
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


// async function connectToDatabase() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }
