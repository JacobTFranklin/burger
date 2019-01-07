var express = require("express");
var app = express();
var PORT = process.env.PORT || 3030;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public/"));

// Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

//Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

