const logger = require('../utils/loggerService');

module.exports = (res, error) => {
	logger.error(error.message ? error.message : error);
	res.status(500).json({
		success: false,
		message: error.message ? error.message : error
	})
}