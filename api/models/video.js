const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  id: String,
  name: String,
  link: String,
  path: String,
  category: String,
  filename: String,
  createdat: Date,
  modifiedat: Date,
  createdby: String,
  modifiedby: String,
  status: String,
});

const Form = mongoose.model("Video", VideoSchema);

module.exports = Form;
