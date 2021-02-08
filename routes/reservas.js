const express = require("express");
const router = express.Router();

const reservasControllers = require("../app/controllers/reservasControllers");

router.route("/").get(reservasControllers.index);

module.exports = router;
