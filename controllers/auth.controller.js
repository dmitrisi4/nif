const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const {keys} = require('../env');
const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;
const errorHandler = require('../utils/errorHandler');
const logger = require('../utils/loggerService');

exports.login = (req, res) => {
	const candidate = req.body.email;
	const condition = candidate ? {email: {[Op.like]: `${candidate}`}} : null;
	User.findAll({where: condition})
	.then(data => {
		if (data.length && data[0].email === candidate) {
			const user = data[0];
			const passwordResult = bcrypt.compareSync(req.body.password, user.password);
			if (passwordResult) {
				const token = jwt.sign({
					email: user.email,
					userId: user.id
				}, keys.jwt, {expiresIn: 60 * 60});
				
				logger.http('Auth OK');
				res.status(200).json({
					token: `Bearer ${token}`,
				});
			} else {
				const textError = `Incorrect password`;
				logger.http(textError);
				res.status(401).json({
					message: textError
				});
			}
		} else {
			const textError = `Cannot find user with email=${candidate}.`;
			logger.http(textError);
			res.status(404).send({
				message: textError
			});
		}
	})
	.catch(err => {
		errorHandler(res, err);
	});
};

exports.registration = (req, res) => {
	const candidate = req.body.email;
	const candidatePassword = req.body.password;
	const condition = candidate ? {email: {[Op.like]: `${candidate}`}} : null;

	User.findAll({where: condition})
	.then(data => {
		if (data.length && data[0].email === candidate) {
			const textError =  `User with this (${candidate}) email exists`;
			res.status(409).send({
				message: textError
			});
			logger.http(textError);
			const user = data[0];
		} else {
			// Create a user
			const salt = bcrypt.genSaltSync(10);
			const user = {
				email: candidate,
				password: bcrypt.hashSync(candidatePassword, salt),
			};

			User.create(user).then(data => {
				logger.http(`User ${JSON.stringify(data)} created!`);
				res.status(201).send(data);
			})
			.catch(err => {
				errorHandler(res, err);
			});
		
		}
	})
	.catch(err => {
		errorHandler(res, err);
	});
};