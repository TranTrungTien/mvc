const express = require("express");
const User = require("../model/user.model");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  const user1 = new User({ id: 1, name: "User _ 1" });
  const user2 = new User({ id: 2, name: "User _ 2" });
  const user3 = new User({ id: 3, name: "User _ 3" });
  res.render("user_view.ejs", { users: [user1, user2, user3] });
});

module.exports = router;
