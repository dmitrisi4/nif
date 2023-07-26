const db = require('../models');
const Orders = db.orders;
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = function(req, res) {
	Orders.findAll()
	.then(data => {
		if (data) {
			res.send(data);
		} else {
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
		res.send(data);
	})
	.catch(err => {
		errorHandler(res, err);
	});
}

module.exports.update = function(req, res) {

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