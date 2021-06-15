const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  name:{type: String, required: true},
  age:{type: Number, required: true},
  dept:{type: String, required: true},
  email:{type: String, required: true, unique: true},
  password:{type: String, required: true},
  subjects:[{
    sname:{type: String},
    scode:{type: String},
    subid:{type: mongoose.Types.ObjectId}
  }]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('teacher', userSchema);
