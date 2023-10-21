const nodemailer = require('nodemailer');
const errorHandler = require('./errorHandler');
const logger = require('./loggerService');
const {mailServiceConfig} = require('../env');


function mailSender(type, userName, userEmail, msg, userPhone, socialNetwork, country, plan) {
	const transporter = nodemailer.createTransport({
		host: mailServiceConfig.host,
		port: mailServiceConfig.port,
		secure: mailServiceConfig.secure,
		auth: {
				user: mailServiceConfig.auth.user,
				pass: mailServiceConfig.auth.pass,
		},
	});

	const themeMsg = type === 'contact' ? `Contact order <${userName}> Email: <${userEmail}> `: 
	`Order <${userName.name} ${userName.lastName}> Email: <${userEmail}>`;
	const textMsg = type === 'contact' ? `Name: <${userName}> Email: <${userEmail}> Message: <${msg}>`: 
	`Name: <${userName.name} ${userName.lastName}> Email: <${userEmail}> Phone: <${userPhone}> 
	Social Network: <${socialNetwork}> Country: <${country}> Plan: <${plan}>`;

	transporter.sendMail({
		from: mailServiceConfig.from,
		to: mailServiceConfig.to,
		subject: themeMsg,
		text: textMsg
	}, function (error, info) {
		if(error) {
			console.log(error);
			errorHandler(info, error);
		} else {
      logger.http('Email sent');
			console.log('Email sent');
		}
	});
}





module.exports = mailSender;