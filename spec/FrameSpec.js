describe('Frame', function() {
  describe('initially', function() {
    it('has an empty array of rolls', function() {
      var frame = new Frame();
      expect(frame.rolls()).toEqual([]);
    });

    it('has a score of 0', function() {
      var frame = new Frame();
      expect(frame.score()).toEqual(0);
    });
  });
});
