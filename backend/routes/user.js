const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/signup",(req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
      password: hash
    });
    user.save()
    .then(result => {
      res.status(201).json({
        message: "user created!",
        result: result
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({email: req.body.email})
  .then(user => {
    fetchedUser = user;
    if(!user){
      return res.status(401).json({message: "Auth failed!"});
    }
    return bcrypt.compare(req.body.password, user.password);
  })
    .then(result => {
      if(!result){
        return res.status(401).json({message: "Auth failed!"});
      }
      const token = jwt.sign({email: fetchedUser.email, userId: fetchedUser._id},
        "secret_this_should_be_longer",
        {expiresIn: "1hr"});
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id
        });
  })
    .catch(err => {
      return res.status(401).json({message: "Auth failed!"});
  });
});

module.exports = router;
