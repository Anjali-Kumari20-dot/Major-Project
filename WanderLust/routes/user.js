const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");

const userControllers = require("../controllers/user.js");

router.get("/signup", userControllers.getUser);

router.post("/signup", wrapAsync(userControllers.renderSignUpForm));

router.get("/login", userControllers.renderLoginForm);

router.post(
  "/login",
  savedRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userControllers.login
);

router.get("/logout", userControllers.logout);

module.exports = router;
