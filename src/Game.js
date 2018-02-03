function Game() {
  this._score = 0;
  this._frames = [];
};

Game.prototype.score = function () {
  return this._score;
};

Game.prototype.frames = function () {
  return this._frames;
};

Game.prototype.addFrame = function (frame) {
  this._frames.push(frame);
};

Game.prototype.currentFrame = function () {
  return this._frames[this._frames.length - 1];
};
