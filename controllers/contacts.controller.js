const db = require('../models');
const Contacts = db.contacts;
const errorHandler = require('../utils/errorHandler');
const logger = require('../utils/loggerService');

module.exports.getAll = function(req, res) {
	Contacts.findAll()
	.then(data => {
		if (data) {
			res.send(data);
		} else {
      logger.http('Cannot find contacts');
			res.status(404).send({
				message: `Cannot find contacts`
			});
		}
	})
	.catch(err => {
		errorHandler(res, err);
	});
}

module.exports.create = function(req, res) {
	const bodyName = req.body.name,
			bodyEmail = req.body.email,
			bodyComment = req.body.comment


	// Validate request
  if (!bodyName && !bodyEmail && !bodyComment && !bodyCountry) {
    logger.http('Content can not be empty!');
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

	// Create a contact
	const contact = {
    name: bodyName,
    email: bodyEmail,
		comment: bodyComment 
  };

	Contacts.create(contact).then(data => {
    logger.http(`Contact ${data} created successfully.`);
		res.send(data);
	})
	.catch(err => {
		errorHandler(res, err);
	});
}

module.exports.update = function(req, res) {
  const id = req.params.id;

  Contacts.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        logger.http(`Contacts ${id} was updated successfully.`);
        res.send({
          message: 'Contacts was updated successfully.'
        });
      } else {
        logger.http(`Cannot update Contacts with id=${id}. Maybe Contacts was not found or req.body is empty!`);
        res.send({
          message: `Cannot update Contacts with id=${id}. Maybe Contacts was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      logger.http(`Error updating Contacts with id=" + ${id}`);
      res.status(500).send({
        message: "Error updating Contacts with id=" + id
      });
    });
}

module.exports.remove = function(req, res) {
	const id = req.params.id;

  Contacts.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        logger.http(`Contacts was deleted successfully!`);
        res.send({
          message: "Contacts was deleted successfully!"
        });
      } else {
        logger.http(`Cannot delete Contacts with id=${id}. Maybe Contacts was not found!`);
        res.send({
          message: `Cannot delete Contacts with id=${id}. Maybe Contacts was not found!`
        });
      }
    })
    .catch(err => {
      logger.http(`Could not delete Contacts with id= ${id}`);
      res.status(500).send({
        message: "Could not delete Contacts with id=" + id
      });
    });
}