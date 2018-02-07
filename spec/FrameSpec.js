describe('Frame', function() {
  var frame;
  var roll1;
  var roll2;
  var roll3;
  var strike;
  var spare1;
  var spare2;
  const ROLL_1_SCORE = 3;
  const ROLL_2_SCORE = 2;
  const STRIKE_BASE_SCORE = 10;
  const SPARE_BASE_SCORE = 10;

  beforeEach(function() {
    frame = new Frame();
    roll1 = new Roll(3);
    roll2 = new Roll(2);
    roll3 = new Roll(4);
    strike = new Roll(10);
    spare1 = new Roll(8);
    spare2 = new Roll(2);
  });

  describe('initially', function() {

    it('has an empty array of rolls', function() {
      expect(frame.rolls()).toEqual([]);
    });

    it('has an empty array of bonus rolls', function() {
      expect(frame.bonusRolls()).toEqual([]);
    });

    it('is unfinished', function() {
      expect(frame.isFinished()).toBe(false);
    });

    it('has a score of 0', function() {
      expect(frame.score()).toEqual(0);
    });

  });

  describe('addRoll()', function() {

    it('adds one roll', function() {
      frame.addRoll(roll1);
      expect(frame.rolls()).toContain(roll1);
    });

    it('adds two rolls', function() {
      frame.addRoll(roll1);
      frame.addRoll(roll2);
      expect(frame.rolls()).toContain(roll1, roll2);
    });

    it('fails when frame is full', function() {
      frame.addRoll(roll1);
      frame.addRoll(roll2);
      expect(function() {frame.addRoll(roll3)}).toThrowError("Frame is full.");
    });

    it('fails when frame is closed', function() {
      frame.addRoll(strike);
      expect(function() {frame.addRoll(roll1)}).toThrowError("Frame is closed.");
    });

  });

  describe('isFinished()', function() {

    it('returns false when frame is empty', function() {
      expect(frame.isFinished()).toBe(false);
    });

    it('returns true when frame is full', function() {
      frame.addRoll(roll1);
      frame.addRoll(roll2);
      expect(frame.isFinished()).toBe(true);
    });

    it('returns true when frame is closed by a strike', function() {
      frame.addRoll(strike);
      expect(frame.isFinished()).toBe(true);
    });

    it('returns true when frame is closed by a spare', function() {
      frame.addRoll(spare1);
      frame.addRoll(spare2);
      expect(frame.isFinished()).toBe(true);
    });

  });

  describe('addBonus()', function() {

    it('fails if frame is open', function() {
      frame.addRoll(roll1);
      frame.addRoll(roll2);
      expect(function() {frame.addBonus(roll3)}).toThrowError("No bonus for open frame.");
    });

    describe('when frame is spare, ', function() {

      it('adds one bonus roll', function() {
        frame.addRoll(spare1);
        frame.addRoll(spare2);
        frame.addBonus(roll1);
        expect(frame.bonusRolls()).toContain(roll1);
      });

      it('fails to add two bonus rolls', function() {
        frame.addRoll(spare1);
        frame.addRoll(spare2);
        frame.addBonus(roll1);
        expect(function() {frame.addBonus(roll2)}).toThrowError("Bonus already added for spare.");
      });

    });

    describe('when frame is strike, ', function() {

      it('adds one bonus roll', function() {
        frame.addRoll(strike);
        frame.addBonus(roll1);
        expect(frame.bonusRolls()).toContain(roll1);
      });

      it('adds two bonus rolls', function() {
        frame.addRoll(strike);
        frame.addBonus(roll1);
        frame.addBonus(roll2);
        expect(frame.bonusRolls()).toContain(roll1, roll2);
      });

      it('fails to add three bonus rolls', function() {
        frame.addRoll(strike);
        frame.addBonus(roll1);
        frame.addBonus(roll2);
        expect(function() {frame.addBonus(roll3)}).toThrowError("Bonuses already added for strike.");
      });

    });

  });

  describe('score()', function() {
    it('returns correct score for one normal roll', function() {
      frame.addRoll(roll1);
      expect(frame.score()).toEqual(ROLL_1_SCORE);
    });

    it('returns correct score for two normal rolls', function() {
      frame.addRoll(roll1);
      frame.addRoll(roll2);
      expect(frame.score()).toEqual(ROLL_1_SCORE + ROLL_2_SCORE)
    });

    it('returns correct score for a strike and two bonuses', function() {
      frame.addRoll(strike);
      frame.addBonus(roll1);
      frame.addBonus(roll2);
      expect(frame.score()).toEqual(STRIKE_BASE_SCORE + ROLL_1_SCORE + ROLL_2_SCORE);
    });

    it('returns correct score for a spare and one bonus', function() {
      frame.addRoll(spare1);
      frame.addRoll(spare2);
      frame.addBonus(roll1);
      expect(frame.score()).toEqual(SPARE_BASE_SCORE + ROLL_1_SCORE)
    });
  })

});
