const Project = require('../models/project');
const mongoose = require('mongoose');
module.exports = function(app, db) {
  app.post('/projects', (req, res) => {
    // You'll create your note here.
    newProj = new Project({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description
    });
    newProj.save().then(() => console.log('New Project Added'));

  });
  app.get('/projects', (req, res) => {
    Project.find(function (err, docs) {
      if (err) throw err;
      res.send(docs);
    });
  });
};
