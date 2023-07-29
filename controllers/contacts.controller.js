const db = require('../models');
const Contacts = db.contacts;
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = function(req, res) {
	Contacts.findAll()
	.then(data => {
		if (data) {
			res.send(data);
		} else {
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
        res.send({
          message: "Contacts was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Contacts with id=${id}. Maybe Contacts was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
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
        res.send({
          message: "Contacts was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Contacts with id=${id}. Maybe Contacts was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Contacts with id=" + id
      });
    });
}