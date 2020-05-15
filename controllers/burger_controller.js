// Dependencies and Variables
let express = require("express");

let router = express.Router();

// Import the model to use its database functions.
let burger = require("..models/burger.js")


// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

 // Export routes for server.js to use.
module.exports = router; 