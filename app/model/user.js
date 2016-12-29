'use strict';

const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

let userSchema = mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true, unique: false}
});

// userSchema.methods.generateHash = function(password) {
//   bcrypt.hash(password, 6)
//     .then((hash) => {
//       this.password = hash;
//     }).catch(console.log('error'));
// };
//
// userSchema.methods.comparePassword = function(password) {
//   bcrypt.compare(password, this.password)
//     .then(() => {
//       console.log('password match');
//     }).catch(console.log('error'));
// };

module.exports = mongoose.model('User', userSchema);
