const router = require("express").Router();
const db = require("../models");

router.get("/", (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render("places/index", { places });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .populate("comments")
    .then((place) => {
      console.log(place.comments);
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  // ternary operator:
  // req.body.rant = req.body.rant ? true : false
  // conditional:
  // if (req.body.rant) {
  //   req.body.rant = true;
  // } else {
  //   req.body.rant = false;
  // }
  db.Place.findById(req.params.id)
    .then((place) => {
      db.Comment.create(req.body)
        .then((comment) => {
          //the save() method takes any changes we've made to the object since I fetched it with findById and writes them back to the Mongo database
          place.comments.push(comment.id);
          place.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
  // res.send("GET /places/:id/comment stub");
});

router.put("/:id", (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then((place) => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
  // res.send("DELETE /places/:id stub");
});

router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      res.render("error404");
    });
  // res.send("GET edit form stub");
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;

// const router = require("express").Router();
// const places = require("../models/places.js");
// // const express = require("express");
// // const app = express();

// //PLACES INDEX PAGE
// router.get("/", (req, res) => {
//   res.render("places/index", { places });
// });

// router.post("/", (req, res) => {
//   // console.log(req.body);
//   if (!req.body.pic) {
//     // Default image if one is not provided
//     req.body.pic = "http://placekitten.com/400/400";
//   }
//   if (!req.body.city) {
//     req.body.city = "Anytown";
//   }
//   if (!req.body.state) {
//     req.body.state = "USA";
//   }
//   places.push(req.body);
//   res.redirect("/places");
// });

// // NEW
// router.get("/new", (req, res) => {
//   res.render("places/new");
// });

// router.get("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     // places.splice(id, 1);
//     // res.redirect("/places");
//     res.render("places/show", { place: places[id], id });
//   }
// });

// router.get("/:id/edit", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/edit", { place: places[id], id });
//   }
// });

// router.delete("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     places.splice(id, 1);
//     res.redirect("/places");
//   }
//   // res.send("DELETE /places/:id stub");
// });

// router.put("/:id", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     // Dig into req.body and make sure data is valid
//     if (!req.body.pic) {
//       // Default image if one is not provided
//       req.body.pic = "http://placekitten.com/400/400";
//     }
//     if (!req.body.city) {
//       req.body.city = "Anytown";
//     }
//     if (!req.body.state) {
//       req.body.state = "USA";
//     }

//     // Save the new data into places[id]
//     places[id] = req.body;
//     res.redirect(`/places/${id}`);
//   }
// });

// router.get("/:id/edit", (req, res) => {
//   let id = Number(req.params.id);
//   if (isNaN(id)) {
//     res.render("error404");
//   } else if (!places[id]) {
//     res.render("error404");
//   } else {
//     res.render("places/edit", { place: places[id] });
//   }
// });

// module.exports = router;
