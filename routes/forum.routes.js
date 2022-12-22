const express = require("express");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const router = express.Router();
const {
  AddForumPost,
  getForumPosts,
  getSingleForumPost,
  editForumPost,
  deleteForumPost,
} = require("../controllers/forum.controllers");

router.post("/add", isAuthenticated, AddForumPost);

router.get("/", isAuthenticated, getForumPosts);

router.get("/:forumId", isAuthenticated, getSingleForumPost);

router.put("/edit/:forumId", isAuthenticated, editForumPost);

router.delete("/delete/:forumId", isAuthenticated, deleteForumPost);

module.exports = router;
