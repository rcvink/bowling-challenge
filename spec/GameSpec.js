describe('Game', function() {
  describe('initially', function() {
    it('has an empty array of frames', function() {
      var game = new Game();
      expect(game.frames()).toEqual([]);
    });

    it('has a score of 0', function() {
      var game = new Game();
      expect(game.score()).toEqual(0);
    });
  });

  describe('addFrame', function() {
    it('adds a frame to its array', function() {
      var game = new Game();
      var frame = {};
      game.addFrame(frame);
      expect(game.frames()).toContain(frame);
    });
  });

  describe('currentFrame', function() {
    it('returns the current frame', function() {
      var game = new Game();
      var frame1 = {};
      var frame2 = {};
      game.addFrame(frame1);
      game.addFrame(frame2);
      expect(game.currentFrame()).toEqual(frame2);
    });
  });
});
