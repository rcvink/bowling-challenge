describe('Game', function() {

  describe('initially', function() {

    it('has 10 frames', function() {
      var game = new Game();
      expect(game.frames().length).toEqual(10);
    });

    it('has a score of 0', function() {
      var game = new Game();
      expect(game.score()).toEqual(0);
    });

  });

  describe('currentFrame()', function() {

    it('returns the first frame of a new game', function() {
      var game = new Game();
      expect(game.currentFrame()).toEqual(game.frames()[0]);
    });

    it('returns the first frame after one roll', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      expect(game.currentFrame()).toEqual(game.frames()[0]);
    });

    it('returns the second frame after two rolls', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      expect(game.currentFrame()).toEqual(game.frames()[1]);
    });

    it('does not return a finished frame', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      expect(game.currentFrame()).not.toEqual(game.frames()[0]);
    });

    it('returns undefined when a game is finished', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      expect(game.currentFrame()).toBeUndefined();
    });

  });

  describe('score()', function() {

    describe('without bonus rolls', function() {

      it('returns a correct score for a partially completed game', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(5));
        expect(game.score()).toEqual(12);
      });

      it('returns a correct score for a completed game', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        expect(game.score()).toEqual(70);
      });

    });

    describe('with bonus rolls', function() {

      it('returns a correct score for a partially completed game', function() {

      });

      it('returns a correct score for a completed game', function() {
        
      });

    });

  });

});
