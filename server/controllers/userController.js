const User = require('../models/userModel');

const userController = {};

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */
// userController.getAllUsers = (req, res, next) => {
//   User.find({}, (err, users) => {
//     // if a database error occurs, call next with the error message passed in
//     // for the express global error handler to catch
//     if (err)
//       return next(
//         "Error in userController.getAllUsers: " + JSON.stringify(err)
//       );

//     // store retrieved users into res.locals and move on to next middleware
//     // res.locals.users = users;
//     return next();
//   });
// };

/**
 * createUser - create and save a new User into the database.
 */
userController.createUser = (req, res, next) => {
  // write code here
  User.create(
    {
      username: req.body.username,
      password: req.body.password,
    },
    (err, result) => {
      if (err) return next({ err: null });
      console.log('CREATED USER*****');
      return next();
    },
  );
};

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = (req, res, next) => {
  User.findOne({ username: req.body.username, password: req.body.password }, (err, result) => {
    if (err) return next({ error: null });
    // bcrypt.compare(req.body.password, result.password, (err, isMatch) => {
    //   if (err) res.render("./../client/signup", { Error: err });
    //   else if (!isMatch) res.redirect("/signup");
    //   else return next();
    // });
    if (!result) {
      console.log('verifying user now: ', result);
      return next({ error: null });
    }
    console.log('verified user: ', req.body.username);
    return next();
  });
};

module.exports = userController;
