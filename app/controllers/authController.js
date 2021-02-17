function index(req, res) {
   res.render("login");
}

function login(req, res) {
   res.send("estas tratando de iniciar sesion");
}

module.exports = {
   index,
   login,
};
