const Session = require("../models/sessionModel");

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.ssid }, (err, result) => {
    console.log("inside isLoggedin: ", req.cookies.ssid);
    console.log("result: ", result.cookieId);
    if (err) res.render("./../client/signup", { error: null });
    else if (!result) {
      console.log('isloggedin result is null');
      res.redirect("/signup");
    } else next();
  });
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  //write code here
  Session.create({ cookieId: res.locals.ssidVal }, (err, result) => {
    if (err) res.render("./../client/signup", { error: null });
    else {
      console.log("started session: ");
      return next();
    }
  });
};

module.exports = sessionController;
