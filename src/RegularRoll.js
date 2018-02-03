function RegularRoll(score) {
  this._score = score;
};

RegularRoll.prototype.score = function () {
  return this._score;
};
