const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    usrname: {type: String, required:true, trim:true}, //required and trim property
    password: {type: String, required:true, trim:true},
    phone: {type: Number, require:true}
});

const User = mongoose.mode('User', userSchema);

module.exports = User;