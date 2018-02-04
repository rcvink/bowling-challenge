describe('Roll', function() {
  var roll;

  beforeEach(function() {
    roll = new Roll(3);
  });

  it('knows how many pins were knocked down', function() {
    expect(roll.pins()).toEqual(3);
  });

});
