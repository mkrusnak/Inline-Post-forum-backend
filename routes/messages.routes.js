const express = require("express");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const router = express.Router();
const {
  sendMessagePostController,
  getMessagesController,
} = require("../controllers/messages.controller");

router.post("/send", isAuthenticated, sendMessagePostController);

router.get("/:userId", isAuthenticated, getMessagesController);

module.exports = router;
