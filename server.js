// server.js
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Project = require('./models/project');
const bodyParser     = require('body-parser');
const app            = express();
let db             = require('./config/db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8000;
/*
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
  db = database.db("qweb_dashboard");
  require('./routes')(app, db);
  app.listen(port, () => {
    console.log('We are live on ' + port);
  });
})
*/
mongoose.connect(db.url, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
require('./routes')(app, db);
app.listen(port, () => {
  console.log('We are live on ' + port);
});
