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
  /*
  describe('previousFrame()', function() {

    it('returns the first frame after two rolls', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      expect(game.previousFrame()).toEqual(game.frames()[0]);
    });

    it('returns the first frame after three rolls', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(5));
      expect(game.previousFrame()).toEqual(game.frames()[0]);
    });

    it('returns the second frame after four rolls', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(5));
      game.currentFrame().addRoll(new Roll(6));
      expect(game.previousFrame()).toEqual(game.frames()[1]);
    });

    it('returns the fifth frame after ten rolls', function() {
      var game = new Game();
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(5));
      game.currentFrame().addRoll(new Roll(6));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      game.currentFrame().addRoll(new Roll(5));
      game.currentFrame().addRoll(new Roll(6));
      game.currentFrame().addRoll(new Roll(3));
      game.currentFrame().addRoll(new Roll(4));
      expect(game.previousFrame()).toEqual(game.frames()[4]);
    });

  });
  */

  describe('score()', function() {

    describe('at the end of a game, returns correct score for', function() {

      it('a game without any strikes or spares', function() {
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

      it('a game with one strike', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(10));
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
        expect(game.score()).toEqual(80);
      });

      it('a game with one spare', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(6));
        game.currentFrame().addRoll(new Roll(5));
        game.currentFrame().addRoll(new Roll(1));
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
        expect(game.score()).toEqual(73);
      });

      it('a game with one spare and one strike', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(10));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(6));
        game.currentFrame().addRoll(new Roll(4));
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
        expect(game.score()).toEqual(87);
      });

      it('a game with two strikes', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(10));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(10));
        game.currentFrame().addRoll(new Roll(4));
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
        expect(game.score()).toEqual(92);
      });

      it('a game with two spares', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(6));
        game.currentFrame().addRoll(new Roll(5));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(6));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(2));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(5));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(2));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(5));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(2));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        expect(game.score()).toEqual(72);
      });

      it('a game with some mixture of spares and strikes', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(6));
        game.currentFrame().addRoll(new Roll(5));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(6));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(2));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(5));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(2));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(5));
        game.currentFrame().addRoll(new Roll(1));
        game.currentFrame().addRoll(new Roll(2));
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        expect(game.score()).toEqual(72);
      });

    });

    describe('mid-way through a game, returns correct score for', function() {

      it('a game without any spares or strikes', function() {
        var game = new Game();
        game.currentFrame().addRoll(new Roll(3));
        game.currentFrame().addRoll(new Roll(4));
        game.currentFrame().addRoll(new Roll(5));
        expect(game.score()).toEqual(12);
      });

      describe('- after bonuses have been rolled -', function() {

        it('a game with one strike', function() {
          var game = new Game();
          game.currentFrame().addRoll(new Roll(10));
          game.currentFrame().addRoll(new Roll(4));
          game.currentFrame().addRoll(new Roll(5));
          expect(game.score()).toEqual(28);
        });

        it('a game with one spare', function() {
          var game = new Game();
          game.currentFrame().addRoll(new Roll(4));
          game.currentFrame().addRoll(new Roll(6));
          game.currentFrame().addRoll(new Roll(5));
          game.currentFrame().addRoll(new Roll(1));
          expect(game.score()).toEqual(21);
        });

      });

    });

  });

});
