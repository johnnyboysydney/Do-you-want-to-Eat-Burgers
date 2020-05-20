var express = require("express");
var router = express.Router();

//import the burger model
var burger = require("../models/burger.js");

//routes
//get burgers
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});
//post new burger
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    //send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});
//put updated burger
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        //return 404 if no rows were changed, 
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

//export routes for server.js to use
module.exports = router;