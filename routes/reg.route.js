const express = require("express");
const router = express.Router();

const { handleRegister } = require("../controllers/reg.controller");

router.post("/register", handleRegister);

module.exports = router;
