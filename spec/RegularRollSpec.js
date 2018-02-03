describe('RegularRoll', function() {
  // var regularRoll;
  //
  // beforeEach(function() {
  //   regularRoll = new RegularRoll();
  // });

  describe('initially', function() {
    it('has a score', function() {
      var regularRoll = new RegularRoll(2);
      expect(regularRoll.score()).toEqual(2);
    });
  });
});
