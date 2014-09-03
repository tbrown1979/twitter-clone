app.run(['User', function (User) {
  User.get().success(function(data) {
    User.loggedIn();
  })
}]);
