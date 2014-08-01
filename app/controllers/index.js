var User = require('../models/user.js');


/* GET home page. */
exports.home = function(req, res) {
  res.render('index', { title: 'Express' });
});

exports.setUsername =  function(req, res) {
  var username = req.body.username
  User.findOne({"username": username}, function(err, user) {
    console.log(user);
    console.log(username);
    if (err)
      res.json({message: "Failed to store username", type: "Failure"});

    if (user) {
      res.json({message: "Username already in use", type: "Taken"});
    } else {
      var newUser = new User();

      newUser.username = username;
      newUser.save(function(err) {
        if (err)
          throw err;
        res.json({type: "Success", "username": username});
      });
    }
  });
});

module.exports = router;
