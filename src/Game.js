function Game(frames = []) {
  this._score = 0;
  this._frames = frames;
};

Game.prototype.score = function () {
  return this._score;
};

Game.prototype.frames = function () {
  return this._frames;
};

Game.prototype.addFrame = function (frame) {
  if (this._isFinished()) {
    throw Error("Game is finished.")
  }
  this._frames.push(frame);
  return frame;
};

Game.prototype.currentFrame = function () {
  if (this._frames.length == 0) {
    this.addFrame(new Frame());
  }
  if (this._frames[this._frames.length - 1].isFinished()) {
    this.addFrame(new Frame());
  }
  return this._frames[this._frames.length - 1];
};

Game.prototype._isFinished = function () {
  return this._frames.length >= 10;
};
