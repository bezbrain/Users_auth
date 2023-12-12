const express = require("express");
const router = express.Router();

const { handleRegister } = require("../controllers/reg.controller");
const authMiddleware = require("../middleware/auth");

router.post("/register", handleRegister);

module.exports = router;
