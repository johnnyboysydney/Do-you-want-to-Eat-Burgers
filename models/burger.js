// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
    all: function(cb) {
      orm.SelectAll("burgers", function(res) {
          cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;