$(document).ready(function() {
  var game = new Game();
  var frame = new Frame();
  game.addFrame(frame);

  $('#1').on('click', function() {
    var roll = new Roll(1);
    addRollToFrame(roll);
  });

  $('#2').on('click', function() {
    var roll = new Roll(2);
    addRollToFrame(roll);
  });

  $('#3').on('click', function() {
    var roll = new Roll(3);
    addRollToFrame(roll);
  });

  $('#4').on('click', function() {
    var roll = new Roll(4);
    addRollToFrame(roll);
  });

  $('#5').on('click', function() {
    var roll = new Roll(5);
    addRollToFrame(roll);
  });

  $('#6').on('c2lick', function() {
    var roll = new Roll(6);
    addRollToFrame(roll);
  });

  $('#7').on('click', function() {
    var roll = new Roll(7);
    addRollToFrame(roll);
  });

  $('#8').on('click', function() {
    var roll = new Roll(8);
    addRollToFrame(roll);
  });

  $('#9').on('click', function() {
    var roll = new Roll(9);
    addRollToFrame(roll);
  });

  $('#10').on('click', function() {
    var roll = new Roll(10);
    addRollToFrame(roll);
  });

  function addRollToFrame(roll) {
    game.currentFrame().addRoll(roll);
  };

});
