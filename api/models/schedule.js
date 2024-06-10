const mongoose = require("mongoose");

const ScheduleSchema = new mongoose.Schema({
  id: String,
  name: Boolean,
  link: String,
  photo: File,
  createdat: Date,
  modifiedat: Date,
  createdby: String,
  modifiedby: String,
  status: String,
});

const Form = mongoose.model("Schedule", ScheduleSchema);

module.exports = Form;
