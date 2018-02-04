describe('Frame', function() {
  var frame;
  var roll1;
  var roll2;
  var roll3;
  var strike;
  var spare1;
  var spare2;

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

  describe('addBonus()', function() {

    it('adds one roll\'s bonus score when frame is spare', function() {
      frame.addRoll(spare1);
      frame.addRoll(spare2);
      frame.addBonus(roll1);
      expect(frame.bonusRolls()).toContain(roll1);
    });

    it('adds one roll\'s bonus score when frame is strike', function() {
      frame.addRoll(strike);
      frame.addBonus(roll1);
      expect(frame.bonusRolls()).toContain(roll1);
    });

    it('adds two rolls\' bonus scores when frame is strike', function() {
      frame.addRoll(strike);
      frame.addBonus(roll1);
      frame.addBonus(roll2);
      expect(frame.bonusRolls()).toContain(roll1, roll2);
    });

    it('fails if frame is open', function() {
      frame.addRoll(roll1);
      frame.addRoll(roll2);
      expect(function() {frame.addBonus(roll3)}).toThrowError("No bonus for open frame.");
    });

    it('fails to add two rolls\' bonus scores when frame is spare', function() {
      frame.addRoll(spare1);
      frame.addRoll(spare2);
      frame.addBonus(roll1);
      expect(function() {frame.addBonus(roll2)}).toThrowError("Bonus already added for spare.");
    });

    it('fails to add three rolls\' bonus scores when frame is striked', function() {
      frame.addRoll(strike);
      frame.addBonus(roll1);
      frame.addBonus(roll2);
      expect(function() {frame.addBonus(roll3)}).toThrowError("Bonuses already added for strike.");
    });

  });

});
