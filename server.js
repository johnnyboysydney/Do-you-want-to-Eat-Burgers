// Dependencies & Variables
const express = require("express");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 9080; 

// Initalise Express Server
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("public")); 

// Template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
const routes = require("./controllers/burgersController.js");
app.use("/", routes);

// Starts listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

