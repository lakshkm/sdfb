const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  id: String,
  question: String,
  type: String,
  userinput: Boolean,
  optionset: String,
});

const SectionSchema = new mongoose.Schema({
  id: String,
  title: String,
  showtitle: Boolean,
  showdisclaimer: Boolean,
  questions: [QuestionSchema],
});

const FormSchema = new mongoose.Schema({
  id: String,
  title: String,
  showdisclaimer: Boolean,
  showfinaldisclaimer: Boolean,
  disclaimer: String,
  finaldisclaimer: String,
  sections: [SectionSchema],
  createdat: Date,
  modifiedat: Date,
  createdby: String,
  modifiedby: String,
  status: String,
});

const Form = mongoose.model("Form", FormSchema);

module.exports = Form;
