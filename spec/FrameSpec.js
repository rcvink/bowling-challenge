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

    it('calls assignSpare() if second roll is a spare', function() {
      // Illegal test, replace with spy rolls and expect call.
      frame.addRoll(spare1);
      frame.addRoll(spare2);
      expect(spare2.isSpare()).toBe(true);
    });

    it('fails when frame is full', function() {
      frame.addRoll(roll1);
      frame.addRoll(roll2);
      expect(function() {frame.addRoll(roll3)}).toThrowError("Frame is full.");
    });

    it('fails when frame is closed', function() {
      // console.log(frame.rolls().slice());
      // console.log(frame._isClosed());
      frame.addRoll(strike);
      // console.log(frame.rolls().slice());
      // console.log(frame._isClosed());
      expect(function() {frame.addRoll(roll1)}).toThrowError("Frame is closed.");
      // console.log(frame.rolls().slice());
      // console.log(frame._isClosed());
    });

  });

        // describe('baseScore()', function() {
        //
        //   beforeEach(function() {
        //     frame.addRoll(roll1);
        //   });
        //
        //   it('returns a base score for one roll', function() {
        //     expect(frame.baseScore()).toEqual(5);
        //   });
        //
        //   it('returns a base score for two rolls', function() {
        //     frame.addRoll(roll2);
        //     expect(frame.baseScore()).toEqual(5);
        //   });
        //
        // });

  // describe('addBonus()', function() {
  //
  //   it('fails if frame is open', function() {
  //     frame.addRoll(roll1);
  //     frame.addRoll(roll2);
  //     expect(function() {frame.addBonus(roll3)}).toThrowError("No bonus for open frame.");
  //   });
  //
  //   it('adds one roll \'s bonus score when frame is spared', function() {
  //     frame.addRoll(spare1);
  //     frame.addRoll(spare2);
  //     frame.addBonus(roll1);
  //     expect(frame.bonusScore()).toEqual(3);
  //   });
  //
  //   it('fails to add two roll\'s bonus scores when frame is spared', function() {
  //     frame.addRoll(spare1);
  //     frame.addRoll(spare2);
  //     frame.addBonus(roll1);
  //     expect(function() {frame.addBonus(roll2)}).toThrowError("Bonus already added for spare.");
  //   });
  //
  //   it('adds one roll \'s bonus score when frame is striked', function() {
  //     frame.addRoll(strike);
  //     frame.addBonus(roll1);
  //     expect(frame.bonusScore()).toEqual(3);
  //   });
  //
  //   it('adds two roll \'s bonus scores when frame is striked', function() {
  //     frame.addRoll(strike);
  //     frame.addBonus(roll1);
  //     frame.addBonus(roll2);
  //     expect(frame.bonusScore()).toEqual(5);
  //   });
  //
  //   it('fails to add three roll\'s bonus scores when frame is striked', function() {
  //     frame.addRoll(strike);
  //     frame.addBonus(roll1);
  //     frame.addBonus(roll2);
  //     expect(function() {frame.addBonus(roll3)}).toThrowError("Bonuses already added for strike.");
  //   });
  //
  // });

        describe('isClosed()', function() {

          it('returns true when a strike is rolled', function() {
            frame.addRoll(strike);
            expect(frame.isClosed()).toBe(true);
          });

          it('returns true when a spare is rolled', function() {
            frame.addRoll(spare1);
            frame.addRoll(spare2);
            expect(frame.isClosed()).toBe(true);
          });

          it('returns false when open', function() {
            frame.addRoll(roll1);
            expect(frame.isClosed()).toBe(false);
          });
        });

});
