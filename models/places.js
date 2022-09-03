//  Moved the content of the places array temporary variable from the places index route
// module.exports = [
//   {
//     name: "H-Thai-ML",
//     city: "Seattle",
//     state: "WA",
//     cuisines: "Thai, Pan-Asian",
//     pic: "/images/h-thai-ml-tables.png",
//   },
//   {
//     name: "Coding Cat Cafe",
//     city: "Phoenix",
//     state: "AZ",
//     cuisines: "Coffee, Bakery",
//     pic: "/images/coffee-cat.jpg",
//   },
// ];

const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: "Anytown" },
  state: { type: String, default: "USA" },
  founded: Number,
});

placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
};

module.exports = mongoose.model("Place", placeSchema);
