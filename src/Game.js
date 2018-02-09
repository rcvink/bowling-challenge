function Game(frames = []) {
  this._score = 0;
  this._frames = [
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
    new Frame(),
  ];
};

Game.prototype.score = function () {
  this._distributeBonuses();
  var sum = 0;
  this._frames.forEach(function(frame) {
    sum += frame.score();
  });
  return sum;
};

Game.prototype.frames = function () {
  return this._frames;
};

Game.prototype.currentFrame = function () {
  return this._frames.find(function(frame) {
    return !frame.isFinished();
  });
};

// Game.prototype.previousFrame = function () {
//   return this._frames[this._frames.indexOf(this.currentFrame()) - 1];
// };

Game.prototype._distributeBonuses = function () {
  var index;
  var frames = this._frames;
  frames.forEach(function(frame) {
    index = frames.indexOf(frame)
    if (frame.isStrike() || frame.isSpare()) {
      frame.addBonus(frames[index + 1].firstRoll());
    };
    if (frame.isStrike()) {
      frame.addBonus(frames[index + 1].secondRoll());
    };
  });
};
