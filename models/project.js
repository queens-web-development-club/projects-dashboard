var mongoose = require('mongoose');

let projectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: String,
  description: String
});

let Project = mongoose.model('Project', projectSchema);

module.exports = Project;
