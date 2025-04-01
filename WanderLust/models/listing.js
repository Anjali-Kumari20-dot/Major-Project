const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  ImageTrack: {
    type: {
      filename: String,
      url: String,
    },
    default:{
      filename: "",
      url: "/images/ken-cheung-KonWFWUaAuk-unsplash.jpg",
    },
    set: (v) => 
      v === "" 
        ? "/images/ken-cheung-KonWFWUaAuk-unsplash.jpg" 
        : v,
  },
  // image: String,
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
