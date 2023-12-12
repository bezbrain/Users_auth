const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

const { handleLogin } = require("../controllers/login.controller");

router.post("/login", authMiddleware, handleLogin);

module.exports = router;
