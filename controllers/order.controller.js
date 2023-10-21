const db = require('../models');
const Orders = db.orders;
const errorHandler = require('../utils/errorHandler');
const logger = require('../utils/loggerService');
const emailService = require('../utils/emailService');

module.exports.getAll = function(req, res) {
	Orders.findAll()
	.then(data => {
		if (data) {
			res.send(data);
		} else {
      logger.http('Cannot find orderss');
			res.status(404).send({
				message: `Cannot find orderss`
			});
		}
	})
	.catch(err => {
		errorHandler(res, err);
	});
}

module.exports.create = function(req, res) {
	const bodyName = req.body.name,
			bodyLastName = req.body.last_name,
			bodyEmail = req.body.email,
			bodyPhoneNumber = req.body.phone_number,
			bodySocial = req.body.social_network,
			bodyCountry = req.body.country,
			bodyPlan = req.body.plan

	// Validate request
  if (!bodyName && !bodyLastName && !bodyEmail && !bodyPhoneNumber && !bodyCountry &&
		!bodySocial && !bodyPlan) {
    logger.http('Content can not be empty!');
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

	// Create a order
	const order = {
    name: bodyName,
    last_name: bodyLastName,
    email: bodyEmail,
    phone_number: bodyPhoneNumber,
    social_network: bodySocial,
    country: bodyCountry,
    plan: bodyPlan,
  };

	Orders.create(order).then(data => {
    emailService('order', {name: order.name, lastName: order.last_name }, order.email, '', order.phone_number, order.social_network, order.country, order.plan);
    logger.http(`Order ${data} created!`);
		res.send(data);
	})
	.catch(err => {
		errorHandler(res, err);
	});
}

module.exports.update = function(req, res) {
  const id = req.params.id;

  Orders.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        logger.http(`Orders id=${id} was updated successfully.`);
        res.send({
          message: "Orders was updated successfully."
        });
      } else {
        logger.http(`Cannot update Orders with id=${id}. Maybe Orders was not found or req.body is empty!`);
        res.send({
          message: `Cannot update Orders with id=${id}. Maybe Orders was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      logger.http(`Error updating Orders with id=${id}`);
      res.status(500).send({
        message: "Error updating Orders with id=" + id
      });
    });
}

module.exports.remove = function(req, res) {
	const id = req.params.id;

  Orders.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Orders was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Orders with id=${id}. Maybe Orders was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Orders with id=" + id
      });
    });
}