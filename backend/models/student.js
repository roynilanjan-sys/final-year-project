const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name:{type: String, required: true},
  age:{type: Number, required: true},
  batch:{type: String, required: true},
  dept:{type: String, required: true},
  regn:{type: String, required: true},
  roll:{type: String, required: true},
  email:{type: String, required: true, unique: true},
  password:{type: String, required: true},
  subjects:[{
    sname:{type: String},
    scode:{type: String},
    join:{type: Boolean, default: false}
  }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('student', userSchema);
