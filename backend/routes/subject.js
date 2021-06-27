const express = require("express");
const router = express.Router();
const Subject = require("../models/subject");
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const jwt = require("jsonwebtoken");


router.post("/:id",(req, res, next) => {
  Teacher.findById(req.params.id).then( Teacher => {
    if(!Teacher){
      return res.status(401).json({message: "Not Authorized!"});
    }
    Subject.findOne({subname: req.body.subname, subcode: req.body.subcode}).then(result => {
      if(result){
        return res.status(401).json({message:"Already added!"});
      }
    const sub = new Subject({
      subname: req.body.subname,
      subcode: req.body.subcode,
      marks: []
    });
    sub.save()
    .then(result => {
      res.status(201).json({
        message: "Subject created!",
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
});


router.put("/:id", (req, res, next) => {
  Subject.findById(req.params.id).then( subject => {
    const sub = new Subject({
      _id: req.params.id,
      subname: req.body.subname,
      subcode: req.body.subcode,
      marks: req.body.marks
    });
    Subject.updateOne({_id: req.params.id}, sub).then(result => {
      if(result.nModified > 0){
     res.status(200).json({message: "update successful!"});
      }else{
        res.status(401).json({message: "not authorized!"});
      }
    });
  });
  });


router.put("/join/:id", (req, res, next) => {
  Student.findById(req.params.id).then( student => {
    if(!student){
      return res.status(401).json({message: "Not Authorized!"});
    }
    Subject.findOne({"marks.sid": req.params.id, subcode: req.body.scode}).then(subject =>{
      if(subject)
      {
        return res.status(401).json({message: "already joined"});
      }

    Subject.updateOne({subcode: req.body.scode}, { $addToSet: {
      marks: {
        sid: req.params.id,
        sname: req.body.sname
      }
    }
    }).then(result1 => {
      if(result1.nModified > 0){
        Student.updateOne({ _id: req.params.id, "subjects.scode": req.body.scode}, {$set:{ "subjects.$.join": true}}).then(result => {
          if(result.nModified > 0){
      res.status(200).json({message: "update successful!"});
          }});
      }else{
         res.status(401).json({message: "can not join"});
      }
    });
    });
  });
});


router.get("/:id",(req, res, next) => {
  Subject.findById(req.params.id).then (subject => {
    if(subject)
    {
      res.status(200).json(subject);
    }
    else
    {
      res.status(404).json({message: 'Subject not found!'});
    }
  });
})


module.exports = router;
