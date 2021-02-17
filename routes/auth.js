const { Router } = require("express");
const express = require("express");
const router = express.Router();

const authController = require("../app/controllers/authController");

router.route("/").get(authController.index).post(authController.login);

module.exports = router;
