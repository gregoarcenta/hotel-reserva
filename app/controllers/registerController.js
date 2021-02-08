const User = require("../models/User");

function index(req, res) {
   res.render("auth/register");
}

function register(req, res) {
   const { name, email } = req.body;
   User.create({
      name: name,
      email: email,
   })
      .then((user) => res.json(user))
      .catch((err) => console.log(err));
}

module.exports = {
   index,
   register,
};
