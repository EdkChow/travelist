const cookieController = {};
const User = require("../models/userModel");

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  User.findOne({ username: req.body.username }, (err, result) => {
    if (err) return next({ error: null });
    console.log('setted cookie ssid: ', req.cookies);
    // if (!req.cookies) {
      res.cookie('ssid', result._id, { httpOnly: true });
    // }
    res.locals.ssidVal = result._id;
    return next();
  });
};

module.exports = cookieController;
