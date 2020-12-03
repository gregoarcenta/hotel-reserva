const express = require("express");
const router = express.Router();

const usersController = require("../app/controllers/usersController");

router.route("/").get(usersController.index).post(usersController.create);

module.exports = router;
