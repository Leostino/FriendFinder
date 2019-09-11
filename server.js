// Dependencies

const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Requiring the routes to html and api

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

// start port listening

app.listen(PORT, function() {

    console.log("App listening on PORT: " + PORT);

});
  