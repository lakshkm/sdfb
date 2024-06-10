const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema({
  id: String,
  name: String,
  codes: [String],
  createdat: Date,
  modifiedat: Date,
  createdby: String,
  modifiedby: String,
  status: String,
});

const Data = mongoose.model("DataSet", datasetSchema);

module.exports = Data;
