require("dotenv").config();
const express = require("express");
const app = express();

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("*", (req, res) => {
  // Let's have our 404 page route legitimately return a status code 404. We can do this by calling .status(404) on the response. You can chain this call together with .send(), and it will look like the code below.
  // res.send('<h1>404 Page</h1>')
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
