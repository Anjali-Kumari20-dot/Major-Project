const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { savedRedirectUrl } = require("../middleware.js");

const userControllers = require("../controllers/user.js");

router
  .route("/signup")
  .get(userControllers.renderSignUpForm)
  .post(wrapAsync(userControllers.signup));


router
  .route("/login")
  .get(userControllers.renderLoginForm)
  .post(
    savedRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userControllers.login
  );


router.get("/logout", userControllers.logout);


module.exports = router;
