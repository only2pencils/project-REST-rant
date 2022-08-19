const router = require("express").Router();

// GET /places/new
router.get("/new", (req, res) => {
  res.render("places/new");
});
// POST
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/h-thai-ml-tables.png",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/coffee-cat.jpg",
    },
  ];
  res.render("places/index", { places });
});

module.exports = router;
