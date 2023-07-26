const keys = require('../config/keys');
const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const errorHandler = require('../utils/errorHandler');


exports.login = (req, res) => {
	const candidate = req.body.email;
	const condition = candidate ? {email: {[Op.like]: `${candidate}`}} : null;
	User.findAll({where: condition})
	.then(data => {
		if (data && data[0].email === candidate) {
			const user = data[0];
			const passwordResult = data[0].password === req.body.password;
			if (passwordResult) {
				const token = jwt.sign({
					email: user.email,
					userId: user.id
				}, keys.jwt, {expiresIn: 60 * 60});
				
				res.status(200).json({
					token: `Bearer ${token}`
				});
			} else {
				res.status(401).json({
					message: 'Incorrect password'
				});
			}
			// res.send(data[0].email);
		} else {
			res.status(404).send({
				message: `Cannot find user with email=${candidate}.`
			});
		}
	})
	.catch(err => {
		// res.status(500).send({
		// 	// message: "Error retrieving user with email=" + candidates
		// });
		errorHandler(res, err);
	});
};