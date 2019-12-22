const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/api", (req, res, next) => {
  console.log(req.body);
  User.find().then(users => {
    return res.json(users);
  })
  .catch(err => {
    next(err);
  })
});

module.exports = router;
