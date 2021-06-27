const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const Student = require("../models/student");
const jwt = require("jsonwebtoken");


router.post("/signup",(req, res, next) => {
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const student = new Student({
      name: req.body.name,
      age: req.body.age,
      batch: req.body.batch,
      dept: req.body.dept,
      regn: req.body.regn,
      roll: req.body.roll,
      email: req.body.email,
      password: hash
    });


    student.save()
    .then(result => {
      res.status(201).json({
        message: "Student created!",
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
  Student.findOne({email: req.body.email})
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


router.get("/:id", (req, res, next) => {
  Student.findById(req.params.id).then (student => {
    if(student)
    {
      res.status(200).json(student);
    }
    else
    {
      res.status(404).json({message: 'Student not found!'});
    }
  });
});


router.put("/:id", (req, res, next) => {
  Student.findOne(req.params.id).then(result => {
  const student = new Student({
    _id: req.body.id,
    name: req.body.name,
    age: req.body.age,
    batch: req.body.batch,
    dept: req.body.dept,
    regn: req.body.regn,
    roll: req.body.roll,
    email: req.body.email,
    password: req.body.password,
    subjects: result.subjects
  });
  Student.updateOne({_id: req.params.id}, student).then(result => {
    if(result.nModified > 0){
   res.status(200).json({message: "update successful!"});
    }else{
      res.status(401).json({message: "not authorized!"});
    }
  });
});
});

router.put("/join/:id", (req,res,next) => {
  Student.updateOne({_id: req.params.id}, { $addToSet: {
    subjects: {
    sname: req.body.sname,
    scode: req.body.scode,
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
  Student.findById(req.params.id).then (student => {
    if(student && bcrypt.compare(student.password, req.body.password))
    {
      bcrypt.hash(req.body.newpassword, 10)
      .then(hash => {
        Student.updateOne({_id: req.params.id}, {password: hash}).then(result => {
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
      res.status(404).json({message: 'Student not found!'});
    }
  });
});


module.exports = router;
