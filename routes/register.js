const { Router } = require("express");
const express = require("express");
const router = express.Router();

const usersController = require("../app/controllers/registerController");

router.route("/").get(usersController.index).post(usersController.register);

router.route("/email").post(usersController.verifyEmail);

module.exports = router;
