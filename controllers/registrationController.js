const Registration = require('../models/registrationModel');


const registrationController = (req, res) => {
  const { username, email, password } = req.body;
  let user = new Registration({
    username:username,
    email:email,
    password:password
  }).save()

  res.send('Registration successful');
}

module.exports = registrationController;