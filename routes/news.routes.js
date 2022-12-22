const express = require("express");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const router = express.Router();
const {
  addNewsController,
  getNewsController,
} = require("../controllers/news.controller");

router.post("/add", isAuthenticated, addNewsController);

router.get("/news", isAuthenticated, getNewsController);

module.exports = router;
