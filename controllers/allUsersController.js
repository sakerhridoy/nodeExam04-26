const Registration = require('../models/registrationModel');

const allUsersController = async (req, res) => {
  let allUsers = await Registration.find()
  res.send(allUsers);
};

module.exports = allUsersController;