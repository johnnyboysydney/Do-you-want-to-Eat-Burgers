// Dependencies & Variables
const express = require("express");
const exphbs = require("express-handlebars")

// Initalise Express Server
const app = express();

let PORT = process.env.PORT || 9080; // Set Default Port for Express and Heroku
app.use(bodyParser.urlencoded({ extended: false })); // Add Additional Functionality to Express Using Middleware body-parser
app.use(express.static("public")); // Serve Static Content Such as CSS, JS, for the App from the "public" Directory in the Application Directory.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgersController.js");
app.use("/", routes);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

