const express = require("express");
const logger = require("morgan");
const routes = require("./routes")
// **passport code**//
const session = require("express-session");
const passport = require("passport");
const flash = require('connect-flash');

const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
// **passport code**//
app.use(flash())
app.use(express.static("public"));
app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
