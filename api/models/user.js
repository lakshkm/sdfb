const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  pwd: String,
  //isActivated: Boolean,
  status: String,
  activationCode: String,
  authSalt: String,
  authIterations: Number,
  isFederated: Boolean,
  fedProvider: String,
  fedSubject: String,
  fedName: String,
  regsecret: String,
  version: Number,
  createdat: Date,
  modifiedat: Date,
  createdby: String,
  modifiedby: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
