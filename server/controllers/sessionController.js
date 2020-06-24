const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.ssid }, (err, result) => {
    console.log('inside isLoggedin: ', req.cookies.ssid);
    console.log('result: ', result.cookieId);
    if (err) return next({ error: null });
    if (!result) {
      console.log('isloggedin result is null');
      return res.redirect("/signup");
    }
    return next();
  });
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  Session.create({ cookieId: res.locals.ssidVal }, (err, result) => {
    if (err) return next({ error: null });
    console.log('started session: ');
    return next();
  });
};

module.exports = sessionController;
