const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

const reviewControllers = require("../controllers/review.js");

// Post Route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewControllers.createReview)
);

// DELETE REVIEW ROUTE
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewControllers.destroyReview)
);

module.exports = router;
