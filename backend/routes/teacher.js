const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const Teacher = require("../models/teacher");
const Subjects = require("../models/subject");
const jwt = require("jsonwebtoken");
const { Subject } = require("rxjs");


router.post("/signup",(req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const teacher = new Teacher({
      name: req.body.name,
      age: req.body.age,
      dept: req.body.dept,
      email: req.body.email,
      password: hash,
      subjects: []
    });
    teacher.save()
    .then(result => {
      res.status(201).json({
        message: "Teacher created!",
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
  Teacher.findOne({email: req.body.email})
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
          userId: fetchedUser._id,
          user: fetchedUser
        });
  })
    .catch(err => {
      return res.status(401).json({message: "Auth failed!"});
  });
});


router.get("/:id", (req, res, next) => {
  Teacher.findById(req.params.id).then (teacher => {
    if(teacher)
    {
      res.status(200).json(teacher);
    }
    else
    {
      res.status(404).json({message: 'teacher not found!'});
    }
  });
});


router.put("/:id", (req, res, next) => {
  Teacher.findById(req.params.id).then (teacher1 => {
  const teacher = new Teacher({
    _id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    dept: req.body.dept,
    email: req.body.email,
    password: req.body.password,
    subjects: teacher1.subjects
  });
  Teacher.updateOne({_id: req.params.id}, teacher).then(result => {
    if(result.nModified > 0){
   res.status(200).json({message: "update successful!"});
    }else{
      res.status(401).json({message: "not authorized!"});
    }
  });
});
});

router.put("/create/:id", (req,res,next) => {
  Teacher.updateOne({_id: req.params.id}, { $addToSet: {
    subjects: {
    sname: req.body.subname,
    scode: req.body.subcode,
    subid: req.body._id
  }
}
}).then(result1 => {
    if(result1.nModified > 0){
res.status(201).json({
  message: "update successful",
});
    }
  });
});

router.put("/password/:id", (req, res, next) => {
  Teacher.findById(req.params.id).then (teacher => {
    if(teacher && bcrypt.compare(teacher.password, req.body.password))
    {
      bcrypt.hash(req.body.newpassword, 10)
      .then(hash => {
        Teacher.updateOne({_id: req.params.id}, {password: hash}).then(result => {
          if(result.nModified > 0){
         res.status(200).json({message: "update successful!"});
          }else{
            res.status(401).json({message: "not authorized!"});
          }
        });
    });
  }
    else
    {
      res.status(404).json({message: 'Teacher not found!'});
    }
  });
});


module.exports = router;
