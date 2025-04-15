const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

// INDEX ROUTE
router.get("/", wrapAsync(listingController.index));


// NEW & CREATE ROUTE -> create
router.get("/new", isLoggedIn, listingController.renderNewForm);


// CREATE ROUTE
router.post(
  "/",
  isLoggedIn,
  validateListing,
  wrapAsync(listingController.createListing)
);


// SHOW ROUTE -> read
router.get("/:id", wrapAsync(listingController.showListing));


// EDIT ROUTE
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);


// UPDATE ROUTE
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  validateListing,
  wrapAsync(listingController.updateListing)
);


// DELETE ROUTE
router.delete(
  "/:id",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing)
);


module.exports = router;
