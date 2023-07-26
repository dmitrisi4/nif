const express = require('express');
const controllers = require('../controllers/contacts.controller');
const router = express.Router();
const passport = require('passport');

router.get('/', passport.authenticate('jwt', {session: false}), controllers.getAll);
router.put('/', controllers.create);
router.patch('/:id',  passport.authenticate('jwt', {session: false}) ,controllers.update);
router.delete('/:id',  passport.authenticate('jwt', {session: false}) , controllers.remove);

module.exports = router;