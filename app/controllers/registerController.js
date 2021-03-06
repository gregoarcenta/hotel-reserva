const User = require("../models/User");

function index(req, res) {
   res.render("register");
}

async function register(req, res) {
   const { name, apellido, email, telefono, password } = req.body;
   try {
      const user = await User.create({
         name,
         apellido,
         email,
         telefono,
         password,
      });
      res.status(200).json({ user });
   } catch (error) {
      //console.log(error);
      res.status(500).json({ error });
   }
}

async function verifyEmail(req, res) {
   const { email } = req.body;
   try {
      const result = await User.findOne({ email });
      //console.log(result);
      if (result === null) {
         res.json({ result });
      } else {
         res.status(405).json({ result });
      }
   } catch (error) {
      //console.log(error);
      res.status(500).json({ error });
   }
}

module.exports = {
   index,
   register,
   verifyEmail,
};
