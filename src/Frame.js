function Frame() {
  this._rolls = [];
};

Frame.prototype.totalScore = function () {
  return this._baseScore() + this._bonusScore();
};

Frame.prototype.rolls = function() {
  return this._rolls;
};

Frame.prototype.addRoll = function(roll) {
  if (this._isFull()) {
    throw Error("Frame is full.");
  } else if (this.isClosed()) {
    throw Error("Frame is closed.");
  } else if (this._baseScore() + roll.baseScore() == 10) {
    roll.assignSpare();
  }
  this._rolls.push(roll);
};

Frame.prototype._isFull = function () {
  return this._rolls.length == 2;
};

Frame.prototype._isEmpty = function () {
  return this._rolls.length == 0;
};

Frame.prototype.isClosed = function () {
  var flag = false;
  this._rolls.forEach(function(roll) {
    if (roll.isStrike() || roll.isSpare()) {
      flag = true;
    };
  });
  return flag;
};

Frame.prototype._baseScore = function() {
  if (this._isEmpty()) {
    return 0;
  }
  var count;
  this._rolls.forEach(function(roll) {
    count += roll.baseScore();
  });
  return count;
};

Frame.prototype._bonusScore = function () {

};
