function Roll(pins, isSpare = false) {
  this._baseScore = pins;
  this._isSpare = isSpare;
  this._isStrike = this.isStrike();
};

Roll.prototype.baseScore = function () {
  return this._baseScore;
};

Roll.prototype.isStrike = function () {
  return this._baseScore == 10;
};

Roll.prototype.isSpare = function () {
  return this._isSpare;
};

Roll.prototype.assignSpare = function () {
  this._isSpare = true;
};
