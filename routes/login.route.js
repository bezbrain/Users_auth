const express = require("express");
const router = express.Router();

const { handleLogin } = require("../controllers/login.controller");

router.post("/login", handleLogin);

module.exports = router;
