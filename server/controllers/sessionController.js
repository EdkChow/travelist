const Session = require('../models/sessionModel');

const sessionController = {};

/**
 * isLoggedIn - find the appropriate session for this request in the database, then
 * verify whether or not the session is still valid.
 */
sessionController.isLoggedIn = (req, res, next) => {
  // console.log('isloggedin')
  Session.findOne({ cookieId: req.cookies.ssid }, (err, result) => {
    console.log('inside isLoggedin: ', req.cookies.ssid);
    console.log('result: ', result.cookieId);
    if (err) return next({ error: null });
    if (!result) {
      console.log('isloggedin result is null');
      return next({ error: null });
    }
    return next();
  });
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = (req, res, next) => {
  Session.create({ cookieId: res.locals.ssidVal }, (err, result) => {
    // console.log(res.locals.ssidVal)
    if (err) return next({ error: null });
    console.log('started session: ', res.locals.username);
    return next();
  });
};

module.exports = sessionController;
