const router = require("express").Router();
const express = require("express");
// const app = express();

//PLACES INDEX PAGE
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.post("/", (req, res) => {
  console.log(req.body);
  if (!req.body.pic) {
    req.body.pic = "http://placekitten.com/250/250";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

module.exports = router;

// GET / places INDEX ROUTE
// app.get("/", (req, res) => {
//   let places = [
//     {
//       name: "H-Thai-ML",
//       city: "Seattle",
//       state: "WA",
//       cuisines: "Thai, Pan-Asian",
//       pic: "http://placekitten.com/250/250",
//     },
//     {
//       name: "Coding Cat Cafe",
//       city: "Phoenix",
//       state: "AZ",
//       cuisines: "Coffee, Bakery",
//       pic: "http://placekitten.com/250/250",
//     },
//   ];

//   res.render("places/index", { places });
// });

// old code
// const router = require("express").Router();
// const db = require("../models");

// router.get("/", (req, res) => {
//   db.Place.find()
//     .then((places) => {
//       res.render("places/index", { places });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render("error404");
//     });
// });

// router.post("/", (req, res) => {
//   db.Place.create(req.body)
//     .then(() => {
//       res.redirect("/places");
//     })
//     .catch((err) => {
//       console.log("err", err);
//       res.render("error404");
//     });
//   // res.send("POST /places stub");
// });

// // Get places/new
// router.get("/new", (req, res) => {
//   res.render("places/new");
// });

// router.get("/:id", (req, res) => {
//   db.Place.findById(req.params.id)
//     .then((place) => {
//       res.render("places/show", { place });
//     })
//     .catch((err) => {
//       console.log("err", err);
//       res.render("error404");
//     });
//   // res.send("GET /places/:id stub");
// });

// router.put("/id:", (req, res) => {
//   res.send("PUT /places/:id stub");
// });

// router.delete("/:id", (req, res) => {
//   res.send("DELETE /places/:id stub");
// });

// router.get("/:id/edit", (req, res) => {
//   res.send("GET /places/:id/rant stub");
// });

// router.post("/:id/rant", (req, res) => {
//   res.send("GET /places/:id/rant stub");
// });

// router.delete("/:id/rant/:rantId", (req, res) => {
//   res.send("GET /places/:id/rant/:rantId stub");
// });

// module.exports = router;
