const projectRoutes = require('./projects_route');
module.exports = function(app, db) {
  projectRoutes(app, db);
  // Other route groups could go here, in the future
};
