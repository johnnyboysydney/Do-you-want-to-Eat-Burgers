//init express
const express = require("express");
const PORT = process.env.PORT || 9000;
const app = express();

//static files
app.use(express.static("public"));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template engine
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import and use routes
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

//start listening
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});