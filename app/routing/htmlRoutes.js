// Dependency

const path = require("path");


// Get html route function with app as parameter because no express dependency on this page

function htmlRoutes(app) {

  // display survey page to user if they type /survey in browser

  app.get("/survey", function(req, res) {

    res.sendFile(path.join(__dirname,"../public/survey.html"));

  });


  // If no matching route is found display home page

  app.get("*", function(req, res) {

    res.sendFile(path.join(__dirname, "../public/home.html"));

  });

};

// export html route

module.exports = htmlRoutes;