const mongoose = require('mongoose');


const subjectSchema = mongoose.Schema({
  subname:{type: String, required: true},
  subcode:{type: String, required: true},
  marks:[
    {
      sid:{type: mongoose.Types.ObjectId},
      sname:{type: String},
      sroll:{type: String},
      ca1:{type: Number},
      test1:{type: Number},
      ca2:{type: Number},
      pca1:{type: Number},
      ca3:{type: Number},
      test2:{type: Number},
      ca4:{type: Number},
      pca2:{type: Number},
      final:{type: Number}

    }
  ]

});
module.exports = mongoose.model('subject', subjectSchema);
