
// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all 
  app.get("/api/all", function(req, res) {

    var dbQuery = "SELECT * FROM places";

    connection.query(dbQuery, function(err, result) {
      res.json(result);
    });

  });

};
