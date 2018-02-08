function Frame(rolls = []) {
  this._rolls = rolls;
  this._bonusRolls = [];
};

Frame.prototype.rolls = function() {
  return this._rolls;
};

Frame.prototype.bonusRolls = function () {
  return this._bonusRolls;
};

Frame.prototype.firstRoll = function () {
  if (this._isEmpty()) {
    throw Error("Roll does not exist.");
  };
  return this._rolls[0];
};

Frame.prototype.secondRoll = function () {
  if (!this._isFull()) {
    throw Error("Roll does not exist.");
  };
  return this._rolls[1];
};

Frame.prototype.addRoll = function(roll) {
  this._checkCapacityForRoll();
  this._rolls.push(roll);
};

Frame.prototype.isFinished = function () {
  return this._isFull() || this._isClosed();
};

Frame.prototype.isSpare = function () {
  return this._isClosed() && this._isFull();
};

Frame.prototype.isStrike = function () {
  return this._isClosed() && this._rolls.length == 1;
};

Frame.prototype.addBonus = function(roll) {
  this._checkCapacityForBonus();
  this._bonusRolls.push(roll);
};

Frame.prototype.score = function () {
  return this._baseScore() + this._bonusScore();
};

// private

Frame.prototype._isEmpty = function () {
  return this._rolls.length == 0;
};

Frame.prototype._checkCapacityForRoll = function () {
  if (this._isFull()) {
    throw Error("Frame is full.");
  } else if (this._isClosed()) {
    throw Error("Frame is closed.");
  };
};

Frame.prototype._isFull = function () {
  return this._rolls.length == 2;
};

Frame.prototype._isClosed = function () {
  return this._baseScore() == 10
};

Frame.prototype._baseScore = function() {
  return this._getScore(this._rolls);
};

Frame.prototype._bonusScore = function () {
  return this._getScore(this._bonusRolls);
};

Frame.prototype._getScore = function (rolls) {
  var count = 0;
  rolls.forEach(function(roll) {
    count += roll.pins();
  });
  return count;
};

Frame.prototype._checkCapacityForBonus = function () {
  if (this._isOpen()) {
    throw Error("No bonus for open frame.");
  } else if (this.isSpare() && this._hasOneBonus()) {
    throw Error("Bonus already added for spare.");
  } else if (this.isStrike() && this._hasTwoBonus()) {
    throw Error("Bonuses already added for strike.");
  };
};

Frame.prototype._isOpen = function () {
  return !this._isClosed()
};

Frame.prototype._hasOneBonus = function () {
  return this._bonusRolls.length == 1;
};

Frame.prototype._hasTwoBonus = function () {
  return this._bonusRolls.length == 2;
};
