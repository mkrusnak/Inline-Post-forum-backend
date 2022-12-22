const express = require("express");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const router = express.Router();
const {
  addDiyController,
  getDiyPosts,
  getSingleDiy,
  deleteDiyPost,
} = require("../controllers/diy.controller");

router.post("/add", isAuthenticated, addDiyController);

router.get("/", isAuthenticated, getDiyPosts);

router.get("/:diyId", isAuthenticated, getSingleDiy);

router.delete("/delete/:diyId", isAuthenticated, deleteDiyPost);

module.exports = router;
