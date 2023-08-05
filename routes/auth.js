const express = require('express');
const controllers = require('../controllers/auth.controller');
const router = express.Router();

router.post('/login', controllers.login);
router.put('/registration', controllers.registration);

module.exports = router;