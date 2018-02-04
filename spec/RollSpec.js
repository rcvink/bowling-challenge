describe('Roll', function() {
  var roll;

  describe('when neither a strike nor a spare,', function() {

    beforeEach(function() {
      roll = new Roll(3);
    });

    it('has a normal base score', function() {
      expect(roll.baseScore()).toEqual(3);
    });

    it('knows it is not a strike', function() {
      expect(roll.isStrike()).toBe(false);
    });

    it('knows it is not a spare', function() {
      expect(roll.isSpare()).toBe(false);
    });

  });

  describe('when a spare,', function() {

    beforeEach(function() {
      roll = new Roll(3, true);
    });

    it('has a normal base score', function() {
      expect(roll.baseScore()).toEqual(3);
    });

    it('knows it is a spare', function() {
      expect(roll.isSpare()).toBe(true);
    });

    it('knows it is not a strike', function() {
      expect(roll.isStrike()).toBe(false);
    });

  });

  describe('when a strike,', function() {

    beforeEach(function() {
      roll = new Roll(10);
    });

    it('has a base score of 10', function() {
      expect(roll.baseScore()).toEqual(10);
    });

    it('knows it is a strike', function() {
      expect(roll.isStrike()).toBe(true);
    });

    it('knows it is not a spare', function() {
      expect(roll.isSpare()).toBe(false);
    })

  });

});
