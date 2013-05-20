function World (callback) {
  callback();
}
World.prototype = {
  method: function (){
    /*does nothing*/
  }
}
module.exports = function () {
  this.World = World;
}
