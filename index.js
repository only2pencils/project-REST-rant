// Modules and Globals
require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Controllers & Routes // PLACES //
// app.use("/index", require("./controllers/places/index"));
app.use("/places", require("./controllers/places"));

// HOME PAGE ROUTE
app.get("/", (req, res) => {
  res.render("home");
});

// WILDCARD ROUTE
app.get("*", (req, res) => {
  res.render("error404");
});

// Listen for Connections
app.listen(process.env.PORT);

// old code
// //  Modules and Globals
// require("dotenv").config();
// const express = require("express");
// const app = express();

// // Express Settings
// app.set("views", __dirname + "/views");
// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

// // Controllers & Routes
// app.use("/places", require("./controllers/places"));

// // Home Page
// app.get("/", (req, res) => {
//   res.render("home");
// });

// app.get("*", (req, res) => {
//   res.render("error404");
// });

// // Listen for Connections
// app.listen(process.env.PORT);
