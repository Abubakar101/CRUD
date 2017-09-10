// Our dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const methodOverride = require("method-override");
// initialize the app
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// view templates
app.set("views", path.join(__dirname, "views"));
// templating engine
app.set("view engine", "ejs");

app.use("/static", express.static(path.join(__dirname, "public")));
//  index route!
app.get("/", (req, res) => {
  res.render("index");
});

// routes
const wealthRoutes = require("./routes/wealth-routes");
app.use("/wealths", wealthRoutes);

// set the port
const port = process.env.PORT || 3000;
// Port to listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Error handler!
app.get("*", (req, res) => {
  res.status(404).send("not found!");
});
