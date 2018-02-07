function Game(frames = []) {
  this._score = 0;
  this._frames = [new Frame(),
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
  return this._score;
};

Game.prototype.frames = function () {
  return this._frames;
};

Game.prototype.currentFrame = function () {
  return this._frames.find(function(frame) {
    return !frame.isFinished();
  });
};
