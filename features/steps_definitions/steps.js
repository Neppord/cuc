module.exports = function () {
  this.When(/^calling method$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback();
  });

  this.Then(/^success$/, function(callback) {
    // express the regexp above with the code you wish you had
    callback();
  });
};
