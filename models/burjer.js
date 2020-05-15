// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
          cb(res);
        });
    },
    // The variables cols and vals are arrays.
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
          cb(res);
        });
    },  
}

// Export the database functions for the controller (catsController.js).
module.exports = cat;
