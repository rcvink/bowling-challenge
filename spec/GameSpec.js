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

    it('fails to add an 11th frame', function() {
      var frame = {};
      var game = new Game([frame, frame, frame, frame, frame,
        frame, frame, frame, frame, frame]);
      expect(function() {game.addFrame(frame)}).toThrowError("Game is finished.");
    });

  });

  describe('currentFrame', function() {

    it('returns the current frame', function() {
      var frame1 = new Frame();
      var frame2 = new Frame();
      var game = new Game([frame1, frame2]);
      expect(game.currentFrame()).toEqual(frame2);
    });

    it('does not return a finished frame', function() {
      var frame1 = new Frame();
      var game = new Game([frame1]);
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      expect(game.currentFrame()).not.toEqual(frame1);
    });

    it('returns a new frame if none exist', function() {
      var game = new Game();
      expect(game.currentFrame()).toBeDefined();
    });

  });
});
